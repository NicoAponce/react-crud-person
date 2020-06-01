import React, {memo, forwardRef} from 'react';
import '../select-department/select.scss';

const SelectProvince = forwardRef(({error, onChange, provinces, ...rest}, ref) => {
    const invalidClass = error ? 'select--invalid' : '';
    return (
        <div className="form-group select">
            <select
                className={`form-control ${invalidClass}`}
                onChange={onChange}
                name="idProvince"
                ref={ref}
                {...rest}
            >
                <option value="">SELECCIONE UNA PROVINCIA</option>
                {provinces &&
                    provinces.map((item) => {
                        return (
                            <option key={item.id} value={item.id}>
                                {item.nameProvince}
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
export default memo(SelectProvince);
