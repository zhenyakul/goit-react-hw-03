import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(2, "Too short!!!")
    .max(30, "Name can contain only 30 char!!!")
    .required("Is required!!!"),
  number: Yup.string().min(9, "Number is invalid").required("Is required!!!"),
});

const initialValues = {
  name: "Alex Kings",
  number: "123-45-67",
};

export default function ContactForm({ onSubmit }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    onSubmit(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.inputContainer}>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" id={nameId} className={css.input} />
          <ErrorMessage
            name="name"
            component="span"
            className={css.ErrorMessage}
          />
        </div>
        <div className={css.inputContainer}>
          <label htmlFor={numberId}>Number</label>
          <Field name="number" id={numberId} className={css.input} />
          <ErrorMessage
            name="number"
            component="span"
            className={css.ErrorMessage}
          />
        </div>
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
