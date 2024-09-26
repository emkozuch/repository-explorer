import { useFormik } from "formik";
import { InferType, object, string } from "yup";
import { useSearchUserParams } from "./useSearchUserParams";

const githubUsernameRegex = /^(?!.*[-_]{2})(?![-_])[\w-]+(?<![-_])$/;

const validationSchema = object({
  login: string()
    .required("This field is required")
    .matches(githubUsernameRegex, "Please provide a valid username")
    .min(1, "Username too short")
    .max(39, "Username too long"),
});

type SearchUsersFormState = InferType<typeof validationSchema>;

export const useSearchUsersForm = () => {
  const { updateParam } = useSearchUserParams();

  const initialValues: SearchUsersFormState = {
    login: "",
  };

  const formik = useFormik<SearchUsersFormState>({
    initialValues,
    validationSchema,
    onReset: () => updateParam(),
    onSubmit: (values) => updateParam(values.login),
  });

  return { formik };
};
