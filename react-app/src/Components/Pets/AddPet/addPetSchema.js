import * as yup from "yup";

const addPetSchema = yup.object().shape({
  name: yup.string().required("Required"),
  age: yup.number().typeError("Required").required().positive().integer(),
  imageUrl: yup.string().required("Required"),
  animal: yup.string().required("Required"),
  breed: yup.string().required("Required"),
  ownerId: yup.string().required("Required"),
});

export default addPetSchema;