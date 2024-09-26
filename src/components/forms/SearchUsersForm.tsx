import styled from "styled-components";
import { useLayoutEffect } from "react";
import { flexColumn } from "style";
import { useSearchUserParams, useSearchUsersForm } from "hooks";
import { Button, SearchInput } from "components/common";

export const SearchUsersForm = () => {
  const { formik } = useSearchUsersForm();
  const { query } = useSearchUserParams();

  useLayoutEffect(() => {
    if (query) {
      formik.setFieldValue("login", query);
    }
  }, [query]);

  const disableButton = !formik.values.login;

  return (
    <Form onSubmit={formik.handleSubmit}>
      <SearchInput
        name="login"
        placeholder="Enter username"
        reset={formik.resetForm}
        onChange={formik.handleChange}
        value={formik.values.login}
        error={formik.errors.login}
      />
      <Button text="Search" type="submit" disabled={disableButton} />
    </Form>
  );
};

const Form = styled.form`
  ${flexColumn}
  gap: 12px;
`;
