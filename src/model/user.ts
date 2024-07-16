import * as yup from 'yup';


const testSchema = yup.object().shape({
    username: yup.string(),
    password: yup.string(),
});

export {testSchema}