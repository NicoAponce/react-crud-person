import React from 'react';
import InputField from '../../../components/input/input-field';
import ButtonField from '../../../components/button/button-field';
import usePersonInsert from '../hooks/use-person-insert';

const AddPerson = ({match}) => {
    const {id} = match.params;

    const {form, isValid, onSubmit} = usePersonInsert(id);
    const {register, errors} = form;

    return (
        <div className="container">
            <div className="row justify-content-md-center mt-5">
                <div className="col-lg-6">
                    <div className="card border-dark">
                        <h3 className="card-header text-center">ACTUALIZAR PERSONA</h3>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <InputField
                                    placeholder="Nombres"
                                    name="name"
                                    ref={register}
                                    error={errors.name}
                                />
                                <InputField
                                    placeholder="Apellidos"
                                    name="lastName"
                                    ref={register}
                                    error={errors.lastName}
                                />
                                <InputField
                                    placeholder="Edad"
                                    name="age"
                                    ref={register}
                                    error={errors.age}
                                    maxLength="2"
                                />
                                <InputField
                                    placeholder="Telefono"
                                    name="phone"
                                    ref={register}
                                    error={errors.phone}
                                    maxLength="9"
                                />
                                <InputField
                                    placeholder="Numero de Documento"
                                    name="documentNumber"
                                    ref={register}
                                    error={errors.documentNumber}
                                    maxLength="8"
                                />
                                <InputField
                                    placeholder="Direccion"
                                    name="address"
                                    ref={register}
                                    error={errors.address}
                                />
                                <ButtonField disabled={!isValid} />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddPerson;
