"use client";

import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
} from "@mui/material";

const validationSchema = Yup.object({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export const LoginForm = () => {
  const submitHandler = (values: any) => {
    console.log('submitHandler', values);
  }

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={submitHandler}
    >
      {(formikProps) => (
          <Form>
            <TextField
              label="Username"
              type="text"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formikProps.values.username}
              onChange={formikProps.handleChange('username')}
              error={formikProps.touched.username && Boolean(formikProps.errors.username)}
              helperText={formikProps.touched.username && formikProps.errors.username}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              variant="outlined"
              value={formikProps.values.password}
              onChange={formikProps.handleChange('password')}
              error={formikProps.touched.password && Boolean(formikProps.errors.password)}
              helperText={formikProps.touched.password && formikProps.errors.password}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              disabled={!(formikProps.isValid && formikProps.dirty)}
            >
              Login
            </Button>
          </Form>
        )}
    </Formik>
  )
}
