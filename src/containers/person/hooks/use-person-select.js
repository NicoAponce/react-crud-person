import {useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import PersonService from '../../../services/person-services';

const usePersonSelect = () => {
    const [persons, setPersons] = useState([]);
    const [name, setName] = useState('');

    const [page, setPage] = useState(0);
    const [personsPerPage, setPersonsPerPage] = useState(8);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangePersonsPage = (event) => {
        setPersonsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyPersons =
        personsPerPage - Math.min(personsPerPage, persons.length - page * personsPerPage);

    const onChangeName = ({target}) => {
        setName(target.value);
    };

    useEffect(() => {
        const fetchPersons = async () => {
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
        };
        fetchPersons();
    }, [name]);
    return {
        onChangeName,
        persons,
        page,
        personsPerPage,
        emptyPersons,
        handleChangePage,
        handleChangePersonsPage,
    };
};

export default usePersonSelect;
