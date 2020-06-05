import React, {memo, forwardRef} from 'react';
import './select.scss';

const SelectDepartment = forwardRef(({error, onChange, departments, ...rest}, ref) => {
    const invalidClass = error ? 'select--invalid' : '';
    return (
        <div className="form-group select">
            <select
                className={`form-control ${invalidClass}`}
                onChange={onChange}
                ref={ref}
                name="idDepartment"
                {...rest}
            >
                <option value="">SELECCIONE UN DEPARTAMENTO</option>
                {departments &&
                    departments.map((item) => {
                        return (
                            <option key={item.id} value={item.id}>
                                {item.nameDepartment}
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
export default memo(SelectDepartment);
