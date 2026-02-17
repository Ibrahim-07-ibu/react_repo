import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

function Contact() {
  const validationSchema = yup.object({
    contactName: yup.string().min(5).max(20).required("Name required"),
    contactEmail: yup.string().email("Invalid email").required("Email required"),
    message: yup.string().max(500, "Max 500 characters"),
    age: yup.number().max(100, "Age must be below 100").positive().required(),
  });

  const formik = useFormik({
    initialValues: {
      contactName: "",
      contactEmail: "",
      message: "",
      age: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="Container">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="contactName">Contact Name </label>
          <input
            type="text"
            id="contactName"
            name="contactName"
            placeholder="enter your name"
            onChange={formik.handleChange}
            value={formik.values.contactName}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.contactName && formik.touched.contactName && (
          <div>{formik.errors.contactName}</div>
        )}

        <div>
          <label htmlFor="contactEmail">Contact Email </label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            placeholder="enter your email id"
            onChange={formik.handleChange}
            value={formik.values.contactEmail}
            onBlur={formik.handleBlur}
          />
        </div>
        {formik.errors.contactEmail && formik.touched.contactEmail && (
          <div>{formik.errors.contactEmail}</div>
        )}

        <div>
          <label htmlFor="message">Message </label>
          <textarea
            id="message"
            name="message"
            placeholder="enter your message"
            onChange={formik.handleChange}
            value={formik.values.message}
            onBlur={formik.handleBlur}
          />
        </div>

        <div>
          <label htmlFor="age">Age </label>
          <input
            type="number"
            id="age"
            name="age"
            placeholder="enter your age"
            onChange={formik.handleChange}
            value={formik.values.age}
            onBlur={formik.handleBlur}
          />
        </div>

        <div>
          <button type="submit">Submit Form</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
