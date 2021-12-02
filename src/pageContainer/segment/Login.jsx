import React from "react";
import { Field, Form, Formik } from "formik";
import { Col, Container, Row, Input, Button } from "reactstrap";
import { ReactstrapInput } from "reactstrap-formik";
import * as Yup from "yup";

let validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("فرمت صحبح")
    .required("باید مقدار را وارد کنید"),
  password: Yup.string("sadasw222").min(5, "asdasdasdsa")
});

export default function Login() {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        //Make API calls here

        setTimeout(() => {
          setSubmitting(false);
          alert(
            `Submitted Successfully ->  ${JSON.stringify(values, null, 2)}`
          );
        }, 2000);
      }}
      render={({ submitForm, isSubmitting, values }) => (
        <Form>
          <Container style={{ paddingTop: "5px", alignItems: "center", display: "flex", justifyContent: "center" }}>
            <Row>
              <Col xs="12" style={{ paddingTop: "5px", margin: 5 }}>
                <Field xs="12" style={{ textAlign: "center", paddingTop: "5px", margin: 5, outline: 0, border: 0, borderRadius: 15, width: "80%" }}
                  type="text"
                  name="email"
                  placeholder="نام کاربری"
                  component={ReactstrapInput}

                />
              </Col>
              <Col xs="12" style={{ paddingTop: "5px", }}>
                <Field xs="12" style={{ textAlign: "center", paddingTop: "5px", margin: 5, outline: 0, border: 0, borderRadius: 15, width: "80%" }}
                  type="password"
                  placeholder="رمز عبور"
                  name="password"
                  component={ReactstrapInput}



                />
              </Col>
              <Col xs="12" style={{ margin: 25 }}  >
                <div style={{ width: "70%", display: "flex", justifyContent: "space-evenly" }}>
                  <Button color="primary">ثبت نام </Button>
                  <Button type="submit" color="success">ورود</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </Form>
      )}
    />
  );
}


