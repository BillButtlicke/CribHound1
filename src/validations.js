import * as Yup from "yup";

export const listingValidation = Yup.object().shape({
  Name: Yup.string().required("Please Enter A Name!"),
  Location: Yup.string().required("Please Enter A Location!"),
});
