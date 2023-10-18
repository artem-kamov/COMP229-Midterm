import { useForm } from 'react-hook-form';

function SignUpUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert(
      `First Name: ${data.firstName}, Last Name: ${data.lastName}, User Name: ${data.userName}, Email: ${data.email}, Password: ${data.password}`
    );
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signUpForm">
      <h3>Sign Up Form</h3>
      <div className="form-group">
        <label className="signUpForm__label">First Name:</label>
        <input
          name="firstName"
          className="signUpForm__input"
          {...register('firstName', { required: true })}
        />
        {errors.firstName && <span className="signUpForm__error">This field is required</span>}
      </div>

      <div className="form-group">
        <label className="signUpForm__label">Last Name:</label>
        <input
          name="lastName"
          className="signUpForm__input"
          {...register('lastName', { required: true })}
        />
        {errors.lastName && <span className="signUpForm__error">This field is required</span>}
      </div>

      <div className="form-group">
        <label className="signUpForm__label">User Name:</label>
        <input
          name="userName"
          className="signUpForm__input"
          {...register('userName', { required: true })}
        />
        {errors.userName && <span className="signUpForm__error">This field is required</span>}
      </div>

      <div className="form-group">
        <label className="signUpForm__label">Email:</label>
        <input
          name="email"
          className="signUpForm__input"
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
        />
        {errors.email && <span className="signUpForm__error">This field is required and must be in correct format</span>}
      </div>

      <div className="form-group">
        <label className="signUpForm__label">Password:</label>
        <input
          type="password"
          name="password"
          className="signUpForm__input"
          {...register('password', { required: true })}
        />
        {errors.password && <span className="signUpForm__error">This field is required</span>}
      </div>

      <div className="form-group">
        <label className="signUpForm__label">Confirm Password:</label>
        <input
          type="password"
          name="confirmPassword"
          className="signUpForm__input"
          {...register('confirmPassword', { required: true,})}
        />
      </div>

      <button type="submit" className="signUpForm__button">
        Submit
      </button>
    </form>
  );
}

export default SignUpUser;
