import "./SignupForm.style.css";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Signupform = () => {
    const formikInitialValues = {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    };

    const formikOnSubmit = (values) => {
        console.log(values);
    };

    const formikValidationValues = Yup.object({
        name: Yup.string()
            .required("Please Enter Your Name")
            .min(6, "Name must be at least 6 characters"),
        email: Yup.string()
            .email("Please Enter valid E-Mail Address")
            .required("Please Enter Your E-Mail Address"),
        phone: Yup.string()
            .required("Please Enter Your Phone Number")
            // .matches(/^[0-9]{11}$/, "Invalid Phone Number")
            .nullable(),
        password: Yup.string().required("Please Enter Your Password").matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
          ),,
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password not match")
            .required("Please Confirm Your Password"),
    });

    const formik = useFormik({
        initialValues: formikInitialValues,
        onSubmit: formikOnSubmit,
        validationSchema: formikValidationValues,
    });

    return (
        <div className="container">
            <form className="form" onSubmit={formik.handleSubmit}>
                <div className="form__field">
                    <label htmlFor="name">Full Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Full Name"
                        {...formik.getFieldProps("name")}
                    />
                    {formik.errors.name && formik.touched.name && (
                        <span className="form__errors">
                            {formik.errors.name}
                        </span>
                    )}
                </div>
                <div className="form__field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        {...formik.getFieldProps("email")}
                    />
                    {formik.errors.email && formik.touched.email && (
                        <span className="form__errors">
                            {formik.errors.email}
                        </span>
                    )}
                </div>
                <div className="form__field">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="text"
                        name="phone"
                        placeholder="Enter Phone Number"
                        {...formik.getFieldProps("phone")}
                    />
                    {formik.errors.phone && formik.touched.phone && (
                        <span className="form__errors">
                            {formik.errors.phone}
                        </span>
                    )}
                </div>
                <div className="form__field">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter Password"
                        {...formik.getFieldProps("password")}
                    />
                    {formik.errors.password && formik.touched.password && (
                        <span className="form__errors">
                            {formik.errors.password}
                        </span>
                    )}
                </div>
                <div className="form__field">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        {...formik.getFieldProps("confirmPassword")}
                    />
                    {formik.errors.confirmPassword &&
                        formik.touched.confirmPassword && (
                            <span className="form__errors">
                                {formik.errors.confirmPassword}
                            </span>
                        )}
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
        </div>
    );
};

export default Signupform;
