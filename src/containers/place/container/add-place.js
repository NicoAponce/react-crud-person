import React from 'react';
import usePlaceInsert from '../hooks/use-place-insert';
import InputField from '../../../components/input/input-field';
import ButtonField from '../../../components/button/button-field';
import SelectDepartment from '../components/select-department/select-Department';
import SelectProvince from '../components/select-province/select-province';
import SelectDistrict from '../components/select-district/select-district';

const AddPlace = ({match}) => {
    const {id} = match.params;
    const {
        title,
        departments,
        provinces,
        districts,
        onDepartment,
        onProvince,
        form,
        isValid,
        onSubmit,
        disablePro,
        disableDis,
    } = usePlaceInsert(id);

    const {register, errors} = form;

    const onChangeDepartment = ({target}) => {
        onDepartment({idDepartament: target.value});
    };

    const onChangeProvince = ({target}) => {
        onProvince({idProvince: target.value});
    };

    return (
        <div className="container">
            <div className="row justify-content-md-center mt-5">
                <div className="col-lg-6">
                    <div className="card border-dark">
                        <h3 className="text-center card-header">{title}</h3>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <InputField
                                    name="name"
                                    placeholder="Nombre"
                                    ref={register}
                                    error={errors.name}
                                />
                                <InputField
                                    name="description"
                                    placeholder="Que es el lugar"
                                    ref={register}
                                    error={errors.description}
                                />

                                <SelectDepartment
                                    ref={register}
                                    onChange={onChangeDepartment}
                                    departments={departments}
                                    error={errors.idDepartament}
                                />
                                <SelectProvince
                                    ref={register}
                                    onChange={onChangeProvince}
                                    provinces={provinces}
                                    disabled={disablePro}
                                    error={errors.idProvince}
                                />
                                <SelectDistrict
                                    ref={register}
                                    districts={districts}
                                    disabled={disableDis}
                                    error={errors.idDistrict}
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

export default AddPlace;
