import {useState, useEffect} from 'react';
import UbigeoService from '../../../services/ubigeo-service';

const useProvinceSelect = () => {
    const [provinces, setProvinces] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(9);
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows =
        rowsPerPage - Math.min(rowsPerPage, provinces.length - page * rowsPerPage);
    useEffect(() => {
        UbigeoService.selectProvince().then(({data}) => {
            setProvinces(data.result);
        });
    }, []);

    return {
        provinces,
        page,
        rowsPerPage,
        emptyRows,
        handleChangePage,
        handleChangeRowsPerPage,
    };
};

export default useProvinceSelect;
