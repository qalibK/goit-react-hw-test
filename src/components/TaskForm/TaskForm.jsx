import { Formik, Form, Field } from "formik";

export default function TaskForm() {
  const handleSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <Field type="text" name="text" placeholder="Enter task" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
