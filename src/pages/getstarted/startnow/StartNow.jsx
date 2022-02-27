import React from "react";

import { Navbar } from "../../../components";
import Footer from "../../../containers/footer/Footer";

import {
  Button,
  LinearProgress,
  FormControl,
  MenuItem,
  FormControlLabel,
} from "@mui/material";

import { Formik, Form, Field } from "formik";
import { TextField, Select, CheckboxWithLabel } from "formik-mui";
// import { MenuItem } from "@mui/material";

import { Grid } from "@mui/material";

import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FlashAutoOutlined } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: "70vw",
  bgcolor: "background.paper",
  // border: "2px solid #000",
  // borderRadius: 2,
  boxShadow: 24,
  // p: 4,
};

// interface Values {
//   businessEmail: string;
//   password: string;
// }

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
                alert(JSON.stringify(values, null, 2));
              }, 500);
            }}
          >
            {({ submitForm, isSubmitting }) => (
              <Form autoComplete="off">
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
                      <MenuItem value={"Fashion and Lifestyle"}>
                        Fashion & Lifestyle
                      </MenuItem>
                      <MenuItem value={"Food and Restaurant"}>
                        Food & Restaurant
                      </MenuItem>
                      <MenuItem value={"Travel and Tourism"}>
                        Travel & Tourism
                      </MenuItem>
                      <MenuItem value={"Beauty and Skincare"}>
                        Beauty & Skincare
                      </MenuItem>
                      <MenuItem value={"Sports and Fitness"}>
                        Sports & Fitness
                      </MenuItem>
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
                  sx={{ marginBottom: 8, marginTop: 6 }}
                  variant="contained"
                  color="primary"
                  disabled={isSubmitting}
                  onClick={submitForm}
                >
                  Submit
                </Button>
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
