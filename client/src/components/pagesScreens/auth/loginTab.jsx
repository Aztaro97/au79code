import React from "react";
import styled from "styled-components";
import InputComponents from "../../InputComponents";
import ButtonComponeent from "../../ButtonComponeent";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import {useTranslation} from "react-i18next"
import {useDispatch} from "react-redux"
import {login} from "../../../flux/actions/userAction"

function LoginForm() {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit:async (values) => {
      const body = JSON.stringify(values, null, 2);
      dispatch(login(body));
      formik.setFieldValue("email", "")
      formik.setFieldValue("password", "")
    },
  });
  return (
    <Containber>
      <Form onSubmit={formik.handleSubmit}>
        <Row>
          <InputComponents
            type="email"
            name="email"
            id="email"
            placeholder={t("email_placeholder")}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Row>

        <Row>
          <InputComponents
            type="password"
            name="password"
            id="password"
            placeholder={t("password_placeholder")}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Row>
        <Row>
          <LinkE to="/forgot-password">{t("forget_password")}</LinkE>
          <ButtonComponeent type="submit">{t("login")}</ButtonComponeent>
        </Row>
      </Form>
    </Containber>
  );
}

const Containber = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 3rem;
  width: 550px;

  @media only screen and (max-width: 651px) {
    width: auto;
    padding: 2rem;
  }
`;
const Form = styled.form``;

const Row = styled.div`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LinkE = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: var(--silver-color);
  font-size: 0.8rem;

  &:hover {
    color: var(--orange-color);
    text-decoration:none;
  }
  @media only screen and (max-width: 653px) {
    font-size: 0.6rem;
    padding-right: 0.5rem;
  }
`;

export default LoginForm;
