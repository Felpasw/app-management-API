import * as yup from 'yup';


const testSchema = yup.object().shape({
    result: yup.string(),
    msg: yup.string().email(),
    computerModel: yup.string(),
});

export {testSchema}