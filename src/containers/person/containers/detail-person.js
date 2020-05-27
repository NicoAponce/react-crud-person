import React, {memo} from 'react';
import {Link} from 'react-router-dom';
import usePersonDelete from '../hooks/use-person-delete';

const DetailPerson = ({person}) => {
    const {onClickDelete} = usePersonDelete(person.id);
    return (
        <tr>
            <td>{`${person.name} ${person.lastName}`}</td>
            <td>{person.age}</td>
            <td>{person.phone}</td>
            <td>{person.documentNumber}</td>
            <td>{person.address}</td>
            <td>
                <Link
                    to={`/person/edit/${person.id}`}
                    className="btn btn-outline-success btn-sm mr-2"
                >
                    editar
                </Link>
                <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => onClickDelete(person.id)}
                    type="button"
                >
                    eliminar
                </button>
            </td>
        </tr>
    );
};

export default memo(DetailPerson);
