import React, {memo, forwardRef} from 'react';
import '../select-department/select.scss';

const SelectDistrict = forwardRef(({error, districts, ...rest}, ref) => {
    const invalidClass = error ? 'select--invalid' : '';
    return (
        <div className="form-group select">
            <select
                className={`form-control ${invalidClass}`}
                ref={ref}
                name="idDistrict"
                {...rest}
            >
                <option value="">SELECCIONE UN DISTRITO</option>
                {districts &&
                    districts.map((item) => {
                        return (
                            <option key={item.id} value={item.id}>
                                {item.nameDistrict}
                            </option>
                        );
                    })}
            </select>
            {error && error.message && (
                <span className="select__error">{error.message}</span>
            )}
        </div>
    );
});
export default memo(SelectDistrict);
