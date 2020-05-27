import Swal from 'sweetalert2';
import PersonService from '../../../services/person-services';

const usePersonDelete = (id) => {
    const onClickDelete = () => {
        Swal.fire({
            title: 'Estas seguro',
            text: 'Se eliminara a esta persona',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No',
            confirmButtonText: 'Si',
        }).then((result) => {
            if (result.value) {
                PersonService.deletePerson(id).then(() => {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Exito al guardar persona',
                        showConfirmButton: false,
                        timer: 1600,
                    });
                    window.location.reload(true);
                });
            }
        });
    };
    return {onClickDelete};
};

export default usePersonDelete;
