import React from "react";

import "./getstarted.css";

import { Link } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";

import { Navbar } from "../../components";
import { Footer } from "../../containers";

// import { styled, Box } from "@mui/system";

import ModalUnstyled from "@mui/base/ModalUnstyled";

import { Button, LinearProgress } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";

import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

import ButtonUnstyled, {
  buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";

import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";

import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

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

// const blue = {
//   500: "#007FFF",
//   600: "#0072E5",
//   700: "#0059B2",
// };

// const grey = {
//   100: "#E7EBF0",
//   200: "#E0E3E7",
//   300: "#CDD2D7",
//   400: "#B2BAC2",
//   500: "#A0AAB4",
//   600: "#6F7E8C",
//   700: "#3E5060",
//   800: "#2D3843",
//   900: "#1A2027",
// };

// const StyledButton = styled("button")(
//   ({ theme }) => `
//   margin-top: 10px;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   min-height: calc(1.5em + 22px);
//   height: 57px;
//   min-width: 320px;
//   width: 85%;
//   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//   border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
//   border-radius: 0.75em;
//   padding: 0 20px;
//   text-align: left;
//   line-height: 1.5;
//   color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

//   &:hover {
//     background: ${theme.palette.mode === "dark" ? "" : grey[100]};
//     border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
//   }

//   &.${selectUnstyledClasses.focusVisible} {
//     outline: 3px solid ${theme.palette.mode === "dark" ? blue[600] : blue[100]};
//   }

//   &.${selectUnstyledClasses.expanded} {
//     &::after {
//       content: '▴';
//     }
//   }

//   &::after {
//     content: '▾';
//     float: right;
//   }
//   `
// );

// const StyledListbox = styled("ul")(
//   ({ theme }) => `
//   width: 100%;
//   font-size: 0.875rem;
//   box-sizing: border-box;
//   padding: 5px;
//   margin: 10px 0;
//   min-width: 320px;
//   background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
//   border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
//   border-radius: 8px;
//   color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   overflow: auto;
//   outline: 0px;
//   `
// );

// const StyledOption = styled(OptionUnstyled)(
//   ({ theme }) => `
//   list-style: none;
//   padding: 8px;
//   border-radius: 0.45em;
//   cursor: default;

//   &:last-of-type {
//     border-bottom: none;
//   }

//   &.${optionUnstyledClasses.selected} {
//     background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
//   }

//   &.${optionUnstyledClasses.highlighted} {
//     background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   }

//   &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
//     background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
//     color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
//   }

//   &.${optionUnstyledClasses.disabled} {
//     color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
//   }

//   &:hover:not(.${optionUnstyledClasses.disabled}) {
//     background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
//     color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
//   }
//   `
// );

// const StyledPopper = styled(PopperUnstyled)`
//   z-index: 1;
// `;

// const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
//   const components = {
//     Root: StyledButton,
//     Listbox: StyledListbox,
//     Popper: StyledPopper,
//     ...props.components,
//   };

//   return <SelectUnstyled {...props} ref={ref} components={components} />;
// });

// const CustomButtonRoot = styled("button")`
//   margin-top: 87px;
//   font-weight: 600;
//   font-size: 20px;
//   background-color: #6e53cb;
//   padding: 12px 40px;
//   border-radius: 8px;
//   color: white;
//   transition: all 150ms ease;
//   cursor: pointer;
//   border: none;

//   &:hover {
//     background-color: ${blue[600]};
//   }

//   &.${buttonUnstyledClasses.active} {
//     background-color: ${blue[700]};
//   }

//   &.${buttonUnstyledClasses.focusVisible} {
//     box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1),
//       0 0 0 5px rgba(0, 127, 255, 0.5);
//     outline: none;
//   }

//   &.${buttonUnstyledClasses.disabled} {
//     opacity: 0.5;
//     cursor: not-allowed;
//   }
// `;

// function CustomButton(props) {
//   return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
// }

// interface Values {
//   businessEmail: string;
//   password: string;
// }

const GetStarted = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [openSn, setOpenSn] = React.useState(false);
  const [openJn, setOpenJn] = React.useState(false);

  const handleSnOpen = () => setOpenSn(true);
  const handleJnOpen = () => setOpenJn(true);

  const handleSnClose = () => setOpenSn(false);
  const handleJnClose = () => setOpenJn(false);

  const [date, setDate] = React.useState(null);

  const [gender, setGender] = React.useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  return (
    <div className="flex getstarted flex-col h-screen">
      <Navbar />
      <div className="sm:flex flex-1 sm:px-20 px-8 sm:mt-20">
        <div className="pr-10">
          <GsContent
            heading={"Are you a Brand?"}
            l1="Find the right set of influencers"
            l2="Design & execute marketing campaigns"
            l3="Partner for Brand Ambassador deals"
            l4="Exclusive partnerships with movies, shows & events"
          />
          <div className="mt-10 md:mt-20">
            <Link to="./startnow">
              {/* <button className="mt-10 md:mt-20 md:text-xl md:px-5 bg-purple px-4 py-2 rounded-md text-white font-medium">
              Join Now
            </button> */}
              <Button sx={{ backgroundColor: "#6E53CB" }} variant="contained">
                Start Now
              </Button>
            </Link>
          </div>

          <Modal
            sx={{
              overflow: "scroll",
              height: "100%",
              display: "block",
            }}
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={open}>
              <Box className="w-full flex flex-col justify-between" sx={style}>
                <div className="bg-green-400">
                  <Navbar />
                </div>
                <div className="px-8 flex-1">
                  <h4 className="mt-6 text-xl text-bkBlack2 font-semibold">
                    Just a few details
                  </h4>
                  <p className="text-base text-bkBlack2 mb-5">
                    Let Brandkart handle your branding needs
                  </p>
                  <Formik
                    initialValues={{
                      name: "",
                      companyName: "",
                      businessEmail: "",
                      contactNumber: "",
                      password: "",
                    }}
                    validate={(values) => {
                      const errors = {};
                      if (!values.businessEmail) {
                        errors.businessEmail = "Required";
                      } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(
                          values.businessEmail
                        )
                      ) {
                        errors.businessEmail = "Invalid email address";
                      }
                      if (values.password.length < 6) {
                        errors.password =
                          "Password must contain at least 6 characters";
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
                      <Form>
                        <Field
                          component={TextField}
                          name="businessEmail"
                          type="email"
                          label="Email"
                        />
                        <br />
                        <Field
                          component={TextField}
                          type="password"
                          label="Password"
                          name="password"
                        />
                        {isSubmitting && <LinearProgress />}
                        <br />
                        <Button
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
                <Footer />
              </Box>
            </Fade>
          </Modal>
        </div>
        <div className="mt-10 sm:mt-0 mb-14 sm:mb-0 sm:ml-20">
          <GsContent
            heading="Are you an Influencer?"
            l1="Join the elite community leaders"
            l2="Be part of popular brand campaigns"
            l3="Get exclusive Brand Ambassador offers"
            l4="Leverage your online presence & grow your audience"
          />
          <div className="mt-10 md:mt-20">
            <Link to="./joinnow">
              {/* <button className="mt-10 md:mt-20 md:text-xl md:px-5 bg-purple px-4 py-2 rounded-md text-white font-medium">
              Join Now
            </button> */}
              <Button sx={{ backgroundColor: "#6E53CB" }} variant="contained">
                Join Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="ss:hidden">
        <Footer />
      </div>
    </div>
  );
};

const GsContent = ({ heading, l1, l2, l3, l4 }) => {
  return (
    <div style={{ color: "#1D252D" }}>
      <div>
        <h3 className="text-xl md:text-4xl font-medium">{heading}</h3>
        <div className="flex mt-5 lg:mt-10 items-center">
          <div>
            <AiFillStar
              style={{
                backgroundColor: "#f561a8",
                position: "relative",
                top: 1,
              }}
              className="p-1 rounded-full text-xl"
              color="white"
            />
          </div>
          <p className="ml-3 text-base md:text-xl">{l1}</p>
        </div>
        <div className="flex mt-4 items-center">
          <div>
            <AiFillStar
              style={{
                backgroundColor: "#f561a8",
                position: "relative",
                top: 1,
              }}
              className="p-1 rounded-full text-xl"
              color="white"
            />
          </div>
          <p className="ml-3 text-base md:text-xl">{l2}</p>
        </div>
        <div className="flex mt-4 items-center">
          <div>
            <AiFillStar
              style={{
                backgroundColor: "#f561a8",
                position: "relative",
                top: 1,
              }}
              className="p-1 rounded-full text-xl"
              color="white"
            />
          </div>
          <p className="ml-3 text-base md:text-xl">{l3}</p>
        </div>
        <div className="flex mt-4 items-center">
          <div>
            <AiFillStar
              style={{
                backgroundColor: "#f561a8",
                position: "relative",
                top: 1,
              }}
              className="p-1 rounded-full text-xl"
              color="white"
            />
          </div>
          <p className="ml-3 text-base md:text-xl">{l4}</p>
        </div>
      </div>
    </div>
  );
};

const GsButton = ({ text }) => {
  return <button className="gs-btn">{text}</button>;
};

// function ChildModal() {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => {
//     setOpen(true);
//   };
//   const handleClose = () => {
//     setOpen(false);
//   };

//   return (
//     <React.Fragment>
//       <button onClick={handleOpen}>Open Child Modal</button>
//       <StyledModal
//         hideBackdrop
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="child-modal-title"
//         aria-describedby="child-modal-description"
//       >
//         <Box sx={{ ...styleChildModal }}>
//           <h2 id="jn-heading">Just a Few Details</h2>
//           <p id="jn-desc">Be a part of the elite community </p>
//           <form action="#">
//             <h4 className="ib-headings">Full Name</h4>
//             <input
//               placeholder="Enter your full name here"
//               id="full-name-input"
//               type="text"
//             />
//             <div className="jn-formsplit">
//               <div className="left">
//                 <h4 className="ib-headings">Email Address</h4>
//                 <input
//                   className="splitform-input"
//                   placeholder="Enter email"
//                   type="text"
//                 />
//                 <h4 className="ib-headings">Date of Birth</h4>

//                 <h4 className="ib-headings">Influencer Category</h4>
//                 <CustomSelect defaultValue={10}>
//                   <StyledOption value={10}>E-commerce</StyledOption>
//                   <StyledOption value={20}>Twenty</StyledOption>
//                   <StyledOption value={30}>Thirty</StyledOption>
//                 </CustomSelect>
//               </div>
//               <div className="right">
//                 <h4 className="ib-headings">Location</h4>
//                 <input
//                   placeholder="Enter Location"
//                   type="text"
//                   className="splitform-input"
//                 />
//               </div>
//             </div>
//           </form>
//           <button onClick={handleClose} id="proceed-btn" type="submit">
//             Join Now
//           </button>
//         </Box>
//       </StyledModal>
//     </React.Fragment>
//   );
// }

export default GetStarted;

// const StyledModal = styled(ModalUnstyled)`
//   position: fixed;
//   z-index: 1300;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   left: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Backdrop = styled("div")`
//   z-index: -1;
//   position: fixed;
//   right: 0;
//   bottom: 0;
//   top: 0;
//   left: 0;
//   background-color: rgba(0, 0, 0, 0.4);
//   -webkit-tap-highlight-color: transparent;
// `;

// const stylebox1 = {
//   width: "70vw",
//   bgcolor: "white",
//   outline: 0,
//   borderRadius: "20px",
//   p: 2,
//   px: 6,
//   pb: 6,
// };

// const stylebox2 = {
//   width: "70vw",

//   bgcolor: "white",
//   borderRadius: "20px",
//   p: 2,
//   px: 6,
//   pb: 3,
// };

// const styleChildModal = {
//   width: "70vw",
//   height: "70vh",
//   bgcolor: "white",
//   borderRadius: "20px",
//   p: 2,
//   px: 6,
//   pb: 3,
// };

{
  /* <StyledModal
  aria-labelledby="unstyled-modal-title"
  aria-describedby="unstyled-modal-description"
  open={openSn}
  onClose={handleSnClose}
  BackdropComponent={Backdrop}
  BackdropProps={{
    timeout: 500,
  }}
>
  <Fade in={openSn}>
    <Box sx={stylebox1}>
      <h2 id="jn-heading">Just a Few Details</h2>
      <p id="jn-desc">Let Brandkart handle your branding needs</p>
      <form action="#">
        <h4 className="ib-headings">Full Name</h4>
        <input
          placeholder="Enter your full name here"
          id="full-name-input"
          type="text"
        />
        <div className="jn-formsplit">
          <div className="left">
            <h4 className="ib-headings">Company Name</h4>
            <input
              className="splitform-input"
              placeholder="Enter company name"
              type="text"
            />
            <h4 className="ib-headings">Contact Number</h4>
            <input
              placeholder="Enter contact number"
              type="number"
              className="splitform-input"
            />
          </div>
          <div className="right">
            <h4 className="ib-headings">Business Email</h4>
            <input
              placeholder="Enter business email"
              type="text"
              className="splitform-input"
            />
            <h4 className="ib-headings">What describes you best</h4>
            <CustomSelect defaultValue={10}>
              <StyledOption value={10}>E-commerce</StyledOption>
              <StyledOption value={20}>Twenty</StyledOption>
              <StyledOption value={30}>Thirty</StyledOption>
            </CustomSelect>
          </div>
        </div>
        <FormControlLabel
          id="agreement-cb"
          control={<Checkbox defaultChecked />}
          label="I have agreed to and accepted the Terms of Use and Privacy Policy"
        />
      </form>
    </Box>
  </Fade>
</StyledModal>; */
}

{
  /* <StyledModal
  aria-labelledby="unstyled-modal-title"
  aria-describedby="unstyled-modal-description"
  open={openJn}
  onClose={handleJnClose}
  BackdropComponent={Backdrop}
  BackdropProps={{
    timeout: 500,
  }}
>
  <Fade in={openJn}>
    <Box sx={stylebox2}>
      <h2 id="jn-heading">Just a Few Details</h2>
      <p id="jn-desc">Be a part of the elite community </p>
      <form action="#">
        <h4 className="ib-headings">Full Name</h4>
        <input
          placeholder="Enter your full name here"
          id="full-name-input"
          type="text"
        />
        <div className="jn-formsplit">
          <div className="left">
            <h4 className="ib-headings">Email Address</h4>
            <input
              className="splitform-input"
              placeholder="Enter email"
              type="text"
            />
            <h4 className="ib-headings">Date of Birth</h4>

            <div id="dob-picker">
              <DatePicker
                label=""
                value={date}
                onChange={(newValue) => {
                  setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </div>
            <h4 className="ib-headings">Influencer Category</h4>
            <CustomSelect defaultValue={10}>
              <StyledOption value={10}>E-commerce</StyledOption>
              <StyledOption value={20}>Twenty</StyledOption>
              <StyledOption value={30}>Thirty</StyledOption>
            </CustomSelect>
          </div>
          <div className="right">
            <h4 className="ib-headings">Location</h4>
            <input
              placeholder="Enter Location"
              type="text"
              className="splitform-input"
            />
            <h4 className="ib-headings">Gender</h4>
            <div style={{ width: "60%", marginTop: 10 }}>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  value={gender}
                  onChange={handleGenderChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>Choose</em>
                  </MenuItem>
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </form>
      <button id="proceed-btn" type="submit">
        Proceed
      </button>
      <ChildModal />
    </Box>
  </Fade>
</StyledModal>; */
}
