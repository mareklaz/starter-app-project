import React from 'react';

const Login = () => {
  const {
    register,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    const formData = new FormData();

    for (let value in values) {
      formData.append(value, values[value]);
    }

    console.log(formData);

    registerUser(formData)
      .then((user) => {
        if (user) {
          console.log('Usuario creado', user);
        } else {
          console.log('Error al crear usuario');
        }
      })
      .catch((error) => {
        console.log('Error al registrar el usuario', error);
      });
  };

  return (
    <div>
      <h1>Estas en LOGIN</h1>
    </div>
  );
};

export default Login;
