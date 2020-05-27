import {string, object} from 'yup';

const personFormSchema = object().shape({
    name: string().required('Nombre requerido'),
    lastName: string().required('Apellido requerido'),
    age: string()
        .required('Edad requerido')
        .matches(/^\d{1,2}$/, 'Edad incorrecta'),
    phone: string()
        .required('Telefono requerido')
        .matches(/9\d{8}/, 'Telefono invalido'),
    documentNumber: string()
        .required('Numero de Documento requerido')
        .matches(/^\d{8}$/, 'Documeneto invalido'),
    address: string().required('Direccion requerido'),
});

export default personFormSchema;
