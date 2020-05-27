import React from 'react';

const ButtonField = ({...rest}) => {
    return (
        <div className="form-group">
            <button
                className="form-control btn btn-primary col-6 mx-auto d-block"
                type="submit"
                {...rest}
            >
                Guardar
            </button>
        </div>
    );
};

export default ButtonField;
