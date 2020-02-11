import * as yup from "yup";

const addOwnerSchema = yup.object().shape({
  name: yup.string().required("Required"),
  imageUrl: yup.string().required("Required"),
  bio: yup.string(),
  email: yup.string().required("Required")
});

export default addOwnerSchema;