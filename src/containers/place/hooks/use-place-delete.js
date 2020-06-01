import Swal from 'sweetalert2';
import PlaceService from '../../../services/place-service';

const usePlaceDelete = (id) => {
    const onClickDelete = () => {
        Swal.fire({
            title: 'Estas seguro',
            text: 'Se eliminara este lugar',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            cancelButtonText: 'No',
            confirmButtonText: 'Si',
        }).then((result) => {
            if (result.value) {
                PlaceService.deletePlace(id).then(() => {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Lugar eliminado',
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
export default usePlaceDelete;
