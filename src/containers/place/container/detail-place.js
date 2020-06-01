import React from 'react';
import {Link} from 'react-router-dom';
import usePlaceDelete from '../hooks/use-place-delete';

const DetailPlace = ({place}) => {
    const {onClickDelete} = usePlaceDelete(place.id);
    return (
        <tr>
            <td>{place.name}</td>
            <td>{place.description}</td>
            <td>{place.departament}</td>
            <td>{place.province}</td>
            <td>{place.district}</td>
            <td>
                <Link
                    to={`/place/edit/${place.id}`}
                    className="btn btn-outline-success btn-sm mr-2"
                >
                    editar
                </Link>
                <button
                    className="btn btn-outline-danger btn-sm"
                    type="button"
                    onClick={() => onClickDelete(place.id)}
                >
                    eliminar
                </button>
            </td>
        </tr>
    );
};

export default DetailPlace;
