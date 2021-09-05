import * as Yup from 'yup';

export const SignupSchema = Yup.object().shape({
  firstName: Yup.string().required('First name is required!'),
  lastName: Yup.string().required('Last name is required!'),
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  phoneNumber: Yup.string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/, {
      message: 'Invalid phone number, exclude country code!',
    })
    .required('Phone number is required!'),
  password: Yup.string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
      message:
        ' Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    })
    .required('Password is Required!'),
});

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Email is required!'),
  password: Yup.string().required('Password is required!'),
});

export const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email!').required('Email is required!'),
});

export const ResetPasswordSchema = Yup.object().shape({
  resetCode: Yup.string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)
    .required('Phone number is required!'),
  password: Yup.string()
    .matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/, {
      message:
        ' Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character',
    })
    .required('Password is Required!'),
});
