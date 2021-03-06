import React from "react";

import { Navbar } from "../../../components";
import Footer from "../../../containers/footer/Footer";

import { Button, LinearProgress, MenuItem } from "@mui/material";

import { Formik, Form, Field } from "formik";
import { TextField, Select, CheckboxWithLabel } from "formik-mui";

import { Grid } from "@mui/material";
const StartNow = () => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Navbar />
      <div className="px-8 md:px-20 lg:w-9/12">
        <h4 className="mt-6 text-xl md:text-2xl text-bkBlack2 font-medium">
          Just a few details
        </h4>
        <p className="mt-2 text-sm md:text-base font-normal text-bkBlack2 mb-5">
          Let Brandkart handle your branding needs
        </p>
        <div className="text-bkBlack2">
          <Formik
            initialValues={{
              name: "",
              companyName: "",
              email: "",
              contactNumber: "",
              description: "",
              checkbox: false,
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.name) {
                errors.name = "Required";
              }
              if (!values.companyName) {
                errors.companyName = "Required";
              }
              if (!values.contactNumber) {
                errors.contactNumber = "Required";
              }
              if (values.checkbox === false) {
                errors.checkbox = "Agree First";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                setSubmitting(false);
                // alert(JSON.stringify(values, null, 2));
              }, 500);
              // fetch("https://api.sheetmonkey.io/form/9oWZbhbaRsvXkYR5AeymUw", {
              fetch("https://api.sheetmonkey.io/form/vfer4eUSJYu5RjpE2vKhwk", {
                method: "POST",
                body: JSON.stringify(values),
                headers: {
                  "Content-Type": "application/json",
                },
              })
                .then((response) => response.json())
                .then((response) =>
                  console.log("Success:", JSON.stringify(response))
                )
                .catch((error) => console.error("Error:", error));
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form
                // action="https://api.sheetmonkey.io/form/9oWZbhbaRsvXkYR5AeymUw"
                autoComplete="off"
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <h4 className="my-3">Name</h4>
                    <Field
                      className="w-full"
                      component={TextField}
                      name="name"
                      type="text"
                      label="Enter your name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <h4 className="my-3">Company Name</h4>
                    <Field
                      className="w-full"
                      component={TextField}
                      name="companyName"
                      type="text"
                      label="Enter company name"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <h4 className="my-3">Business Email</h4>
                    <Field
                      className="w-full"
                      component={TextField}
                      name="email"
                      type="email"
                      label="Email"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <h4 className="my-3">Contact Number</h4>
                    <Field
                      className="w-full"
                      component={TextField}
                      name="contactNumber"
                      type="number"
                      label="Enter contact number"
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <h4 className="my-3">What describes you best ?</h4>
                    <Field
                      component={Select}
                      formControl={{
                        sx: {
                          width: "100%",
                        },
                      }}
                      name="description"
                      label="Select a type"
                    >
                      <MenuItem value={"B2B"}>B2B</MenuItem>
                      <MenuItem value={"B2C"}>B2C</MenuItem>
                      <MenuItem value={"Non-Profit"}>Non-Profit</MenuItem>
                    </Field>
                  </Grid>
                </Grid>
                <br />
                <br />
                <Field
                  component={CheckboxWithLabel}
                  name="checkbox"
                  Label={{
                    label:
                      "I agree to the terms of service and privacy policy of the company",
                  }}
                />
                {isSubmitting && <LinearProgress />}
                <br />
                <Button
                  type="submit"
                  sx={{ marginBottom: 8, marginTop: 6 }}
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Submit
                </Button>
                {/* <button type="submit">Submit Form</button> */}
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default StartNow;
