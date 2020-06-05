import {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import {useDispatch} from 'react-redux';
import PlaceService from '../../../services/place-service';
import UbigeoService from '../../../services/ubigeo-service';
import {departmentSelectSuccess} from '../../../redux/departments/actions';
import {provinceSelectSuccess} from '../../../redux/provinces/actions';
import {districtSelectSuccess} from '../../../redux/districts/actions';

const usePlaceSelect = () => {
    const [places, setPlaces] = useState([]);
    const [name, setNama] = useState('');
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [placesPage] = useState(5);
    const indexOfLastPlace = currentPage * placesPage;
    const indexOfFirstPlace = indexOfLastPlace - placesPage;
    const currentPlaces = places.slice(indexOfFirstPlace, indexOfLastPlace);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

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
            dispatch(departmentSelectSuccess(data.result));
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

    return {onChangeName, places, currentPlaces, placesPage, paginate};
};

export default usePlaceSelect;
