import {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import {useDispatch} from 'react-redux';
import PlaceService from '../../../services/place-service';
import UbigeoService from '../../../services/ubigeo-service';
import {departamentSelectSuccess} from '../../../redux/departments/actions';
import {provinceSelectSuccess} from '../../../redux/provinces/actions';
import {districtSelectSuccess} from '../../../redux/districts/actions';

const usePlaceSelect = () => {
    const [places, setPlaces] = useState([]);
    const [name, setNama] = useState('');
    const dispatch = useDispatch();

    const onChangeName = ({target}) => {
        setNama(target.value);
    };
    useEffect(() => {
        PlaceService.selectPlace({name})
            .then(({data}) => {
                setPlaces(data.result);
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal',
                });
            });
    }, [name]);

    useEffect(() => {
        UbigeoService.selectDepartment().then(({data}) => {
            dispatch(departamentSelectSuccess(data.result));
        });
    }, [dispatch]);
    useEffect(() => {
        UbigeoService.selectProvince().then(({data}) => {
            dispatch(provinceSelectSuccess(data.result));
        });
    }, [dispatch]);
    useEffect(() => {
        UbigeoService.selectDistrict().then(({data}) => {
            dispatch(districtSelectSuccess(data.result));
        });
    }, [dispatch]);

    return {onChangeName, places};
};

export default usePlaceSelect;
