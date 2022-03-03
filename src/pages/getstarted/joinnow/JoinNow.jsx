import React, { useState } from "react";

import { Navbar } from "../../../components";
import Footer from "../../../containers/footer/Footer";

import {
  Button,
  LinearProgress,
  MenuItem,
  TextField,
  Grid,
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
} from "@mui/material";
import { DatePicker } from "@mui/lab";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const initialValues = {
  name: "",
  email: "",
  location: "",
  age: "",
  gender: "",
  influencerCategory: "",
  subCategory: [],
  instagram: "",
  youtube: "",
  website: "",
  contact: "",
};

const subCategoryANS = [
  "Authors & Poets",
  "Comedian",
  "Computer & Mobile Gaming",
  "Dancer",
  "Fitness & Yoga",
  "Movies & TV Artist",
  "Musician",
  "Photographer",
  "Sketching & Painting",
  "Sports & Games",
];

const subCategoryMNE = [
  "Automobile",
  "Business & Career",
  "Cryptocurrency & NFT",
  "Education",
  "Family & Parenting",
  "Finance Expert",
  "Health & Medicine",
  "Podcaster & Speaker",
  "Technology",
  "Youtuber",
];

const subCategoryOM = [
  "Beauty & Cosmetics",
  "Environmentalist",
  "Fashion & Lifestyle",
  "Food & Restaurant",
  "News & Media",
  "Plus Size Model",
  "Real Estate",
  "Short Video/Live Streaming",
  "Social Activist",
  "Travel & Tourism",
];

const JoinNow = () => {
  const theme = useTheme();

  const [values, setValues] = useState(initialValues);
  const [dob, setDob] = useState(null);
  const [gender, setGender] = useState("");

  const [allErrors, setAllErrors] = useState({});

  const [influencerCategory, setInfluencerCategory] = useState("");

  const [personName, setPersonName] = React.useState([]);
  console.log(personName);

  const handleSubCategoryChange = (event) => {
    const {
      target: { value },
    } = event;
    // console.log("this is sub category change: ", event);
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleGenderChange = (event) => {
    const { name, value } = event.target;
    setGender(value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCategoryChange = (e) => {
    setPersonName([]);
    values.subCategory = [];
    // console.log("this is category event: ", e);
    const { name, value } = e.target;
    setInfluencerCategory(value);
    setValues({
      ...values,
      [name]: value,
    });
  };

  const validate = () => {
    let temp = {};
    temp.name = values.name ? "" : "Name is required";
    // temp.email = /$^|.+@.+..+/.test(values.email) ? "" : "Invalid Email";
    temp.email =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        values.email
      )
        ? ""
        : "Invalid Email";
    temp.location = values.location ? "" : "Required";
    temp.age = values.age < 100 ? "" : "Age must be between 1-100";
    temp.gender = values.gender.length != 0 ? "" : "Required";
    temp.influencerCategory =
      values.influencerCategory.length != 0 ? "" : "Required";
    temp.subCategory = values.subCategory.length != 0 ? "" : "Required";
    temp.instagram = values.instagram != 0 ? "" : "Required";
    temp.contact = values.contact.length > 9 ? "" : "Invalid Number";
    setAllErrors({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      fetch("https://api.sheetmonkey.io/form/bjRZLqeEvEg4DagP6YemZd", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        // .then((response) => console.log("Success:", JSON.stringify(response)))
        .then((response) => window.alert(response))
        .catch((error) => console.error("Error:", error));
    }
  };

  console.log("All of the values: ", values);

  return (
    <div
      style={{ backgroundColor: "#eeeeee" }}
      className="flex flex-col justify-between"
    >
      <Navbar />
      <div className="px-8 md:px-20 lg:w-9/12">
        <h4 className="mt-6 text-xl md:text-2xl text-bkBlack2 font-medium">
          Just a few details before you join
        </h4>
        <p className="mt-2 text-sm md:text-base font-normal text-bkBlack2 mb-5">
          Let Brandkart handle your branding needs
        </p>
        <div className="text-bkBlack2">
          <form autoComplete="off" onSubmit={handleSubmit}>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={12}>
                <h4 className="my-3">Name</h4>
                <TextField
                  name="name"
                  className="w-full"
                  variant="outlined"
                  label="Full Name"
                  value={values.name}
                  onChange={handleInputChange}
                  {...(allErrors.name && {
                    error: true,
                    helperText: allErrors.name,
                  })}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="my-3">Business Email</h4>
                <TextField
                  autoComplete="off"
                  name="email"
                  className="w-full"
                  variant="outlined"
                  label="Email"
                  value={values.email}
                  onChange={handleInputChange}
                  {...(allErrors.email && {
                    error: true,
                    helperText: allErrors.email,
                  })}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="my-3">Location</h4>
                <TextField
                  name="location"
                  className="w-full"
                  variant="outlined"
                  label="Location"
                  value={values.location}
                  onChange={handleInputChange}
                  {...(allErrors.location && {
                    error: true,
                    helperText: allErrors.location,
                  })}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="my-3">Age</h4>
                {/* <DatePicker
                  name="dateOfBirth"
                  label="Date of birth"
                  value={dob}
                  onChange={(newValue) => {
                    setDob(newValue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                /> */}
                <TextField
                  name="age"
                  className="w-full"
                  type={"number"}
                  variant="outlined"
                  label="Enter your age"
                  value={values.age}
                  onChange={handleInputChange}
                  {...(allErrors.age && {
                    error: true,
                    helperText: allErrors.age,
                  })}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="my-3">Gender</h4>
                <FormControl
                  fullWidth
                  {...(allErrors.gender && { error: true })}
                >
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    name="gender"
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    onChange={handleGenderChange}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                    <MenuItem value={"Other"}>Other</MenuItem>
                  </Select>
                  {allErrors.gender && (
                    <FormHelperText>{allErrors.gender}</FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="my-3">Influencer Category</h4>
                <FormControl
                  fullWidth
                  {...(allErrors.influencerCategory && { error: true })}
                >
                  <InputLabel id="category">Category</InputLabel>
                  <Select
                    name="influencerCategory"
                    labelId="category"
                    id="demo-simple"
                    value={influencerCategory}
                    label="Category"
                    onChange={handleCategoryChange}
                  >
                    <MenuItem value={"Art & Skill"}>Art & Skill</MenuItem>
                    <MenuItem value={"Mentor & Expert"}>
                      Mentor & Expert
                    </MenuItem>
                    <MenuItem value={"Opinion Maker"}>Opinion Maker</MenuItem>
                  </Select>
                  {allErrors.influencerCategory && (
                    <FormHelperText>
                      {allErrors.influencerCategory}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="my-3">Sub Category</h4>

                <FormControl
                  className="w-full"
                  {...(allErrors.subCategory && { error: true })}
                >
                  {/* <InputLabel id="demo-multiple-name-label">
                    Sub Category
                  </InputLabel> */}
                  <Select
                    name="subCategory"
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    multiple
                    value={personName}
                    onChange={handleSubCategoryChange}
                    input={<OutlinedInput label="" />}
                    MenuProps={MenuProps}
                  >
                    {/* {subCategoryANS.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))} */}
                    {values.influencerCategory === "Art & Skill"
                      ? subCategoryANS.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))
                      : values.influencerCategory === "Mentor & Expert"
                      ? subCategoryMNE.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))
                      : values.influencerCategory === "Opinion Maker"
                      ? subCategoryOM.map((name) => (
                          <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                          >
                            {name}
                          </MenuItem>
                        ))
                      : null}
                  </Select>
                  {allErrors.subCategory && (
                    <FormHelperText>{allErrors.subCategory}</FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="my-3">Instagram</h4>
                <TextField
                  name="instagram"
                  className="w-full"
                  variant="outlined"
                  label="Instagram"
                  value={values.instagram}
                  onChange={handleInputChange}
                  {...(allErrors.instagram && {
                    error: true,
                    helperText: allErrors.instagram,
                  })}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="my-3">Youtube (optional)</h4>
                <TextField
                  name="youtube"
                  className="w-full"
                  variant="outlined"
                  label="Youtube"
                  value={values.youtube}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="my-3">Website/Blog (optional)</h4>
                <TextField
                  name="website"
                  className="w-full"
                  variant="outlined"
                  label="Domain"
                  value={values.website}
                  onChange={handleInputChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <h4 className="my-3">Contact Number</h4>
                <TextField
                  name="contact"
                  className="w-full"
                  variant="outlined"
                  label="Number"
                  value={values.contact}
                  onChange={handleInputChange}
                  {...(allErrors.contact && {
                    error: true,
                    helperText: allErrors.contact,
                  })}
                />
              </Grid>
            </Grid>

            <br />
            <button
              className="mt-8 mb-10 bg-purple text-white px-4 text-base py-2 font-medium rounded-md"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinNow;
