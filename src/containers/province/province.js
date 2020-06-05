import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import useProvinceSelect from './hooks/use-province-select';
import DetailProvince from './container/detail-province';

const Province = () => {
    const {
        provinces,
        page,
        rowsPerPage,
        emptyRows,
        handleChangePage,
        handleChangeRowsPerPage,
    } = useProvinceSelect();

    return (
        <div className="container">
            <div className=" row justify-content-md-center mt-5">
                <div className="col-lg-8">
                    <div className="card border-dark">
                        <h3 className="text-center card-header">PROVINCIAS</h3>
                        <div className="card-body">
                            <table className="table table-striped table-bordered table-sm">
                                <thead className="text-center _color_bg_dark _color_text_white">
                                    <tr>
                                        <th>PROVINCIA</th>
                                        <th>ACCION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {provinces
                                        .slice(
                                            page * rowsPerPage,
                                            page * rowsPerPage + rowsPerPage
                                        )
                                        .map((item) => (
                                            <DetailProvince
                                                key={item.id}
                                                province={item}
                                            />
                                        ))}
                                    {emptyRows > 0 && (
                                        <tr style={{height: 53 * emptyRows}}>
                                            <td colSpan={6} />
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                            <TablePagination
                                rowsPerPageOptions={[]}
                                component="div"
                                count={provinces.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Province;
