import React, {forwardRef, memo} from 'react';
import './input-field.scss';

const InputField = forwardRef(({error, ...rest}, ref) => {
    const invalidClassName = error ? 'input-field--invalid' : '';
    return (
        <div className="form-group input-field">
            <input
                className={`form-control ${invalidClassName}`}
                autoComplete="off"
                ref={ref}
                {...rest}
            />
            {error && error.message && (
                <span className="input-field__error">{error.message}</span>
            )}
        </div>
    );
});

export default memo(InputField);
