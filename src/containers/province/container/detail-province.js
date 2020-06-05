import React from 'react';
import {Link} from 'react-router-dom';

const DetailProvince = ({province}) => {
    return (
        <tr>
            <td>{province.nameProvince}</td>
            <td className="text-center">
                <Link
                    to={`/province/detail/${province.id}`}
                    className="btn btn-outline-success btn-sm"
                >
                    detalle
                </Link>
            </td>
        </tr>
    );
};

export default DetailProvince;
