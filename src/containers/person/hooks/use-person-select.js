import {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import PersonService from '../../../services/person-services';

const usePersonSelect = () => {
    const [persons, setPersons] = useState([]);
    const [name, setName] = useState('');

    const onChangeName = ({target}) => {
        setName(target.value);
    };

    useEffect(() => {
        PersonService.selectPerson({name})
            .then(({data}) => {
                setPersons(data.result);
            })
            .catch(() => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Algo salio mal',
                });
            });
    }, [name]);
    return {onChangeName, persons};
};

export default usePersonSelect;
