import * as yup from "yup";

const addPetSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required().positive().integer(),
  imageUrl: yup.string().required(),
  animal: yup.string().required(),
  breed: yup.string().required(),
  ownerId: yup.string().required(),
});

export default addPetSchema;