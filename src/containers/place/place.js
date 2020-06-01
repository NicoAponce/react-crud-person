import React from 'react';
import {Link} from 'react-router-dom';
import DetailPlace from './container/detail-place';
import usePlaceSelect from './hooks/use-place-select';

const Place = () => {
    const {onChangeName, places} = usePlaceSelect();
    return (
        <div className="container">
            <div className="row justify-content-md-center mt-5">
                <div className="col-lg-10">
                    <div className="card border-dark">
                        <h3 className="text-center card-header">LISTA DE LUGARES</h3>
                        <div className="card-body">
                            <form className="form-inline">
                                <Link
                                    to="/place/new"
                                    className="btn btn-outline-dark mb-2 mr-4"
                                >
                                    Nuevo Lugar
                                </Link>
                                <div className="form-group">
                                    <input
                                        className="form-control mb-2"
                                        type="text"
                                        placeholder="Buscar Lugar"
                                        onChange={onChangeName}
                                    />
                                </div>
                            </form>
                            <table className="table table-striped table-bordered table-sm">
                                <thead className="text-center _color_bg_dark _color_text_white">
                                    <tr>
                                        <th>NOMBRE</th>
                                        <th>LUGAR</th>
                                        <th>DEPARTAMENTO</th>
                                        <th>PROVINCIA</th>
                                        <th>DISTRITO</th>
                                        <th>ACCIONES</th>
                                    </tr>
                                </thead>
                                <tbody className="text-center">
                                    {places &&
                                        places.map((item) => {
                                            return (
                                                <DetailPlace key={item.id} place={item} />
                                            );
                                        })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Place;
