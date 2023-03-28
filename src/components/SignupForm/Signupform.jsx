import "./SignupForm.style.css";
import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Input from "../Input/Input";
const Signupform = () => {
    const [value, setValue] = React.useState(null);
    useEffect(() => {
        const getUserData = async () => {
            const { data } = await axios.get("http://localhost:3001/users/1");
            setValue(data);
            console.log(data);
        };
        getUserData();
    }, []);

    const formikInitialValues = {
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        gender: "",
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
            .nullable(),
        password: Yup.string()
            .required("Please Enter Your Password")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character",
            ),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref("password"), null], "Password not match")
            .required("Please Confirm Your Password"),
        gender: Yup.string().required("Please Select your gender"),
    });

    const formik = useFormik({
        initialValues: value || formikInitialValues,
        onSubmit: formikOnSubmit,
        validationSchema: formikValidationValues,
        validateOnMount: true,
        enableReinitialize: true,
    });

    return (
        <div className="container">
            <form className="form" onSubmit={formik.handleSubmit}>
                <div className="form__field">
                    <Input
                        label="Name"
                        name="name"
                        formik={formik}
                        id="name"
                        placeholder="Enter Full Name"
                    />
                    <div className="radio">
                        <div className="form__radio">
                            <input
                                type="radio"
                                name="gender"
                                id="0"
                                value="0"
                                onChange={formik.handleChange}
                                checked={formik.values.gender === "0"}
                            />
                            <label htmlFor="0">Male</label>
                        </div>
                        <div className="form__radio">
                            <input
                                type="radio"
                                name="gender"
                                id="1"
                                value="1"
                                onChange={formik.handleChange}
                                checked={formik.values.gender === "1"}
                            />
                            <label htmlFor="1">Female</label>
                        </div>
                    </div>
                </div>
                <Input
                    label="E-Mail"
                    name="email"
                    id="email"
                    formik={formik}
                    placeholder="Enter Your E-Mail"
                />
                <Input
                    label="Phone Number"
                    name="phone"
                    id="phone"
                    formik={formik}
                    placeholder="Enter Your Phone Number"
                />
                <Input
                    label="Password"
                    name="password"
                    id="password"
                    formik={formik}
                    type="password"
                    placeholder="Enter Password"
                />
                <Input
                    label="Confirm Password"
                    name="confirmPassword"
                    id="confirmPassword"
                    formik={formik}
                    type="password"
                    placeholder="Enter Password Again"
                />
                <div>
                    <button type="submit" disabled={!formik.isValid}>
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Signupform;
