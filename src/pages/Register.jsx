import React from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { auth } from './../firebase-config';
import { useDispatch } from 'react-redux';
import { addUserStart } from '../redux/actions/user.action';
import { toast } from 'react-toastify';

let initialState = {
    name: '',
    email: '',
    password: ''
}

export default function Register() {
    const [formData, setFormData] = useState(initialState);

    let { name, email, password } = formData;

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const inputChange = (event) => {
        setFormData((prevProps) => ({
            ...prevProps,
            [event.target.name]: event.target.value
        }))
    }

    const submit = (event) => {

        event.preventDefault();

        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;

                formData.uid = user.uid;

                dispatch(addUserStart(formData))

                setTimeout(() => {
                    toast.success("User Register Successfully");

                    navigate('/login');
                }, 2000)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });

    }

    return (
        <>
            <section className="banner-area organic-breadcrumb">
                <div className="container">
                    <div className="breadcrumb-banner d-flex flex-wrap align-items-center justify-content-end">
                        <div className="col-first">
                            <h1>Register</h1>
                        </div>
                    </div>
                </div>
            </section>

            <section className="login_box_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="login_box_img">
                                <img className="img-fluid" src="/assets/img/login1.jpg" alt="" />
                                <div className="hover">
                                    <h4>New to our website?</h4>
                                    <p>There are advances being made in science and technology everyday, and a good example of this is the</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="login_form_inner">
                                <h3>Register</h3>
                                <form className="row login_form" id="contactForm" onSubmit={submit}>
                                    <div className="col-md-12 form-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            placeholder="Name"
                                            value={name}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            placeholder="Password"
                                            value={password}
                                            onChange={inputChange} />
                                    </div>
                                    <div className="col-md-12 form-group">
                                        <button type="submit" value="submit" className="primary-btn">Register</button>
                                        <Link className="primary-btn float-right" to="/login">Have an Account</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
