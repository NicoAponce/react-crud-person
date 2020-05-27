import {useForm} from 'react-hook-form';
import {useHistory} from 'react-router-dom';
import {useEffect} from 'react';
import Swal from 'sweetalert2';
import PersonService from '../../../services/person-services';
import personFormSchema from '../constants/person-form-schema';

const usePersonInsert = (id = 0) => {
    const form = useForm({
        mode: 'onChange',
        validationSchema: personFormSchema,
    });

    const {
        handleSubmit,
        setValue,
        formState: {isValid},
    } = form;

    const history = useHistory();

    useEffect(() => {
        if (id > 0) {
            PersonService.getPerson(id)
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
    }, [id, setValue]);

    const onSubmit = (values) => {
        const promise =
            id > 0
                ? PersonService.updatePerson(id, {id, ...values})
                : PersonService.insertPerson(values);
        promise
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Exito al guardar persona',
                    showConfirmButton: false,
                    timer: 1600,
                });
                history.push('/person');
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal',
                });
            });
    };
    return {form, isValid, onSubmit: handleSubmit(onSubmit)};
};

export default usePersonInsert;
