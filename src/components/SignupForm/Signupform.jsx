import "./SignupForm.style.css";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signupform = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(formik.values);
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="form__field">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Full Name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                    />
                </div>
                <div className="form__field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                </div>
                <div className="form__field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter Phone Number"
                        onChange={formik.handleChange}
                        value={formik.values.phone}
                    />
                </div>
                <div className="form__field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </div>
                <div className="form__field">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                    />
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default Signupform;
