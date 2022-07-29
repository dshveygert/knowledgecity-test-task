import React from "react";
import {Navigate, useLocation, useNavigate} from "react-router-dom";
import {useAuth} from "../../router/auth/AuthProvider/AuthProvider";
import {AuthUser} from "../../models";
import logo from "../../assets/logo.svg";
import './loginPage.css';

export default function LoginPage() {
    let navigate = useNavigate();
    let location = useLocation();
    let auth = useAuth();

    // @ts-ignore
    let from = location.state?.from?.pathname ?? "/";
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let user: AuthUser = {email: formData.get("username") as string, password: formData.get('password') as string};
        auth.signIn(user, () => {
            navigate(from, { replace: true });
        });
    }

    if (auth.user) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return (
        <div className='login-wrapper'>
            <div className='login'>
                <div className="logo">
                    <img src={logo} className="logo" alt="logo" />
                </div>
                <p>Please log in to continue</p>

                <form onSubmit={handleSubmit} className='login-form'>
                    <label className='username'>
                        <input name="username" type="text" placeholder='Username'/>
                    </label>
                    <label className='password'>
                        <input name="password" type="password" placeholder='Password' />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}