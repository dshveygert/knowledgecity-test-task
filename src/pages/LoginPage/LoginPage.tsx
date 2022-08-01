import React, {useState, ChangeEvent, useEffect} from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../router/auth/AuthProvider/AuthProvider';
import { AuthUser } from '../../models';
import logo from '../../assets/logo.svg';
import './loginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const locState =  location.state as {from: {pathname: string}};
  const from = locState?.from?.pathname ?? '/';
  const [formValues, setFormValues] = useState<AuthUser>({email: '', password: ''});
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const user: AuthUser = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };
    auth.signIn(user, () => {
      navigate(from, { replace: true });
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>, field: string): void => {
    setFormValues({...formValues, [field]: e.target?.value});
  }

  if (auth.user) {
    return <Navigate to='/' state={{ from: location }} replace />;
  }

  useEffect(() => {
    setDisabled(formValues['email']?.length < 5 || formValues['password']?.length < 3);
  }, [formValues])

  return (
    <div className='login-wrapper'>
      <div className='login'>
        <div className='logo'>
          <img src={logo} className='logo' alt='logo' />
        </div>
        <p>Please log in to continue</p>

        <form onSubmit={handleSubmit} className='login-form'>
          <label className='username'>
            <input name='email' type='text' placeholder='Username' onChange={(event) => handleChange(event, 'email')} />
          </label>
          <label className='password'>
            <input name='password' type='password' placeholder='Password' onChange={(event) => handleChange(event, 'password')} />
          </label>
          <button type='submit' disabled={disabled}>Login</button>
        </form>
      </div>
    </div>
  );
}
