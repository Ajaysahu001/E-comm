import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase-config';
import { toast } from 'react-toastify';

let initialState = {
    email: '',
    password: ''
}

export default function Login() {
    const [formData, setFormData] = useState(initialState);

    let { email, password } = formData;

    const navigate = useNavigate();

    const inputChange = (event) => {
        setFormData((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }))
    }

    const submit = (event) => {
        event.preventDefault();

        signInWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                localStorage.setItem('currentUserId', user.uid);

                toast.success('User signed in successfully');
    
                // navigate("/admin/profile");
                navigate("/");
                
                window.location.reload(false)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error("Email and password does not matched");
            });
    }

    return (
        <>
            <h1 className=''>Login</h1>
            <form onSubmit={submit} id="contactForm">
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={inputChange} />
                    <label className="form-label" htmlFor="email">Email address</label>
                </div>

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={password}
                        onChange={inputChange} />
                    <label className="form-label" htmlFor="password">Password</label>
                </div>

                {/* <!-- 2 column grid layout for inline styling --> */}
                <div className="row mb-4">
                    <div className="col">
                        {/* <!-- Simple link --> */}
                        <a href="#!">Forgot password?</a>
                    </div>
                </div>

                {/* <!-- Submit button --> */}
                <button type="submit" value="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                {/* <!-- Register buttons --> */}
                <div className="text-center">
                    <p>Not a member? <Link to="/register">Register</Link></p>
                </div>
            </form>
        </>
    )
}
