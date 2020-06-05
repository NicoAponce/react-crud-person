import {string, object} from 'yup';

const placeFormSchema = object().shape({
    name: string().required('Nombre requerido'),
    description: string().required('Descripcion requerida'),
    idDepartment: string().required('Seleccione un departamento'),
    idProvince: string().required('Seleccione una provincia'),
    idDistrict: string().required('Seleccione un distrito'),
});

export default placeFormSchema;
