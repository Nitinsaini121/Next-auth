"use client";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Checkbox } from "@mui/material";
import React from "react";
const FormData = ({
  onSubmit,
  register,
  handleSubmit,
  errors,
  editButton,
  checkBox,
  setIsChecked,
}) => {
  console.log("Box", checkBox);

  return (
    <>
      <Container className="w-3/5">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className=" text-center mt-6 p-6 rounded-md"
        >
          <div>
            <label htmlFor="name" className="block">
              Name
            </label>
            <TextField
              className="w-full max-w-96 "
              label="Name"
              name="name"
              {...register("name", { required: "address is Name" })}
            />
            <br />
            {errors.name && (
              <span className="text-red-500">{errors.name.message}</span>
            )}
          </div>
          <br />
          <div>
            <label htmlFor="email" className="block">
              Email
            </label>
            <TextField
              name="email"
              className="w-full max-w-96 "
              label="Email"
              {...register("email", {
                required: "Email Must Be Fill",
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "This is not a valid email",
                },
              })}
            />
            <br />
            {errors.email && (
              <span className="text-red-500">{errors.email.message}</span>
            )}
          </div>
          <br />
          <div>
            <label htmlFor="phoneno" className="block">
              Phone No
            </label>
            <TextField
              name="phoneno"
              className="w-full max-w-96"
              label="Number"
              {...register("phoneno", {
                required: "Must be Number",
                pattern: {
                  value: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/,
                  message: "This is not a valid number",
                },
              })}
            />
            <br />
            {errors.phoneno && (
              <span className="text-red-500">{errors.phoneno.message}</span>
            )}
          </div>
          <br />
          <br />
          <div>
            <label htmlFor="qualification" className="block">
              Qualification
            </label>
            <select
              className="w-full max-w-48"
              name="qualification"
              id=""
              {...register("qualification", {
                required: "Please SelectYour Qualification",
              })}
            >
              <option value="">Select</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="Graduation">Graduation</option>
              <option value="Master">Master</option>
              <option value="Post Graduation">Post Graduation</option>
            </select>
            <br />
            {errors.qualification && (
              <span className="text-red-500">
                {errors.qualification.message}
              </span>
            )}
          </div>
          <br />
          <div>
            <label htmlFor="gender" className="block">
              Select your gender
            </label>
            <RadioGroup
              className="inline-grid grid-cols-3 gap-4"
              aria-labelledby="demo-radio-buttons-group-label"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                {...register("gender", { required: "address is gender" })}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Male"
                {...register("gender")}
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
                {...register("gender")}
              />
              <br />
              {errors.gender && (
                <span className="text-red-500">{errors.gender.message}</span>
              )}
            </RadioGroup>
          </div>
          <br />
          <div>
            <label htmlFor="language" className="block">
              Language
            </label>
            <FormGroup className="inline-grid grid-cols-3 gap-4">
              <FormControlLabel
                control={<Checkbox defaultChecked onClick={(e) => console.log(e)}/>}
                name="select"
                value="select"
                label="select"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    // onClick={(e) => console.log(e)}
                    value ={checkBox}
                    // defaultChecked={}
                    {...register("Hindi")}
                  />
                }
                name="Hindi"
                value="Hindi"
                label="Hindi"
              />
              {/* <FormControlLabel
                control={<Checkbox   defaultChecked={checkBox}    {...register("Sanskrit")}   />}
                name="Sanskrit"
                value="Sanskrit"
                label="Sanskrit"
              />
              <FormControlLabel
                control={<Checkbox   defaultChecked={checkBox}    {...register ("English")}  />}
                name="English"
                value="English"
                label="English"
              /> */}
              {errors.language && (
                <span className="text-red-500">{errors.language.message}</span>
              )}
            </FormGroup>
          </div>
          <br />
          <div>
            <label htmlFor="address" className="block">
              Address
            </label>
            <TextField
              className="w-full max-w-96"
              label="Address"
              name="address"
              {...register("address", { required: "Address Must Be Fill" })}
            />
            <br />
            {errors.address && (
              <span className="text-red-500">{errors.address.message}</span>
            )}
          </div>{" "}
          <br />
          <div>
            <label htmlFor="address" className="block">
              Select Date
            </label>
            <TextField
              type="date"
              className="w-full max-w-48"
              name="date"
              {...register("date")}
            />
          </div>
          <br />
          <div>
            <label htmlFor="address" className="block">
              Select Time
            </label>
            <TextField
              type="time"
              className="w-full max-w-48"
              name="time"
              {...register("time")}
            />
          </div>
          <br />
          <Button
            className="w-48"
            type="submit"
            variant="contained"
            color="primary"
          >
            {editButton ? "Update" : "Submit"}
          </Button>
        </form>
      </Container>
    </>
  );
};
export default FormData;
