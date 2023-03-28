import React from "react";

const Input = ({ label, name, formik, type = "text", placeholder }) => {
    return (
        <div className="form__field">
            <label htmlFor="email">{label}</label>
            <input
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                {...formik.getFieldProps(name)}
            />
            {formik.errors[name] && formik.touched[name] && (
                <span className="form__errors">{formik.errors[name]}</span>
            )}
        </div>
    );
};

export default Input;
