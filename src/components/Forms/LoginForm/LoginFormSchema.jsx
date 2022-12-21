import * as Yup from 'yup';
import ERRORS from '../../../constants/formErrors';

const LoginFormSchema = Yup.object().shape({
  email: Yup.string()
    .email(ERRORS.ERROR_VALID_EMAIL)
    .required(ERRORS.ERROR_REQUIRED),

  password: Yup.string().required(ERRORS.ERROR_REQUIRED),
});

export default LoginFormSchema;
