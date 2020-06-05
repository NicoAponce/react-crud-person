import {useState, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Swal from 'sweetalert2';
import UbigeoService from '../../../services/ubigeo-service';
import PlaceService from '../../../services/place-service';
import placeFormSchema from '../constants/place-form-schema';

const usePlaceInsert = (id = 0) => {
    const [departments, setDepartments] = useState([]);
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const dep = useSelector((state) => state.department.departments);
    const pro = useSelector((state) => state.province.provinces);
    const dis = useSelector((state) => state.district.districts);
    const [disablePro, setDisablePro] = useState(true);
    const [disableDis, setDisableDis] = useState(true);

    const form = useForm({
        mode: 'onChange',
        validationSchema: placeFormSchema,
    });

    const {
        handleSubmit,
        formState: {isValid},
        setValue,
    } = form;

    const history = useHistory();

    useEffect(() => {
        if (id > 0) {
            setProvinces(pro);
            setDistricts(dis);
            setDepartments(dep);
            PlaceService.getPlace(id)
                .then(({data}) => {
                    Object.keys(data.result).forEach((key) =>
                        setValue(key, data.result[key], true)
                    );
                })
                .catch(() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Algo salio mal',
                    });
                });
        }
    }, [dep, dis, id, pro, setValue]);

    const onSubmit = (values) => {
        const promise =
            id > 0
                ? PlaceService.updatePlace(id, {id, ...values})
                : PlaceService.insertPlace(values);

        promise
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Lugar guardado',
                    showConfirmButton: false,
                    timer: 1500,
                });
                history.push('/place');
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal',
                });
            });
    };

    useEffect(() => {
        UbigeoService.selectDepartment().then(({data}) => {
            setDepartments(data.result);
        });
    }, []);
    const onDepartment = (payload) => {
        setDisablePro(false);
        setDisableDis(true);
        UbigeoService.getProvince(payload).then(({data}) => {
            setProvinces(data.result);
        });
    };
    const onProvince = (payload) => {
        setDisableDis(false);
        UbigeoService.getDistrict(payload).then(({data}) => {
            setDistricts(data.result);
        });
    };

    let title;
    if (id > 0) {
        title = 'ACTUALIZAR LUGAR';
    } else {
        title = 'AGREGAR NUEVO LUGAR';
    }
    return {
        title,
        departments,
        provinces,
        districts,
        onDepartment,
        onProvince,
        form,
        isValid,
        disablePro,
        disableDis,
        onSubmit: handleSubmit(onSubmit),
    };
};

export default usePlaceInsert;
