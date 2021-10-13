import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Card, Col, DatePicker, Row, Select } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdKey } from "react-icons/io";
import Button from "../../ButtonComponeent";
import { FaMapMarkerAlt, FaPencilAlt, FaUser } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { useFormik } from "formik";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Loader from "../../loader";
import DropZoneComponent from "./uploadComponent/DropzoneComponent";

import {
  AddCardImage,
  freeSubscription,
  saveServiceInfo,
} from "../../../flux/actions/advertisingAction/advertisingAction";

import { BusinessList } from "../../../utils/advertisingData";
import ButtonComponeent from "../../ButtonComponeent";
import { Link, useHistory } from "react-router-dom";
import { register } from "../../../flux/actions/userAction";
import { BiWorld } from "react-icons/bi";
import axios from "axios";
import { successMessage } from "../../message";
import MainContainer from "../../MainContainer";
import { useTranslation } from "react-i18next";

const { Option } = Select;

function PartnerRegisterTemplate2() {
  const { loading, userInfo } = useSelector((state) => state.userLogin);
  return (
    <MainContainer>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {!userInfo && <SignUpForm />}
          <DetailsComponent />
        </Container>
      )}
    </MainContainer>
  );
}

const SignUpForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Email est requis !";
    if (values.password.length < 6)
      errors.password = "Enter a password longer than 6 characters";
    if (values.password !== values.password2)
      errors.password2 = "Error Please Make sure your passwords match";
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password2: "",
    },
    validate,
    onSubmit: (values) => {
      const body = JSON.stringify(values, null, 2);
      dispatch(register(body));
    },
  });
  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <Row gutter={[10, 10]}>
        <Col xs={{ span: 4 }} md={{ span: 1 }}>
          <IconStyling>
            <AiOutlineMail className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 23 }}>
          <InputStyling
            type="email"
            name="email"
            placeholder={t("email_placeholder")}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Col>

        <Col xs={{ span: 20 }} md={{ span: 23 }} offset={2}>
          {formik.errors.email && (
            <Alert message={formik.errors.email} type="error" banner>
              {formik.errors.email}
            </Alert>
          )}
        </Col>

        <Col xs={{ span: 4 }} md={{ span: 1 }}>
          <IconStyling>
            <IoMdKey className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 23 }}>
          <InputStyling
            type="password"
            placeholder={t("password_placeholder")}
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Col>

        <Col xs={{ span: 4 }} md={{ span: 1 }}>
          <IconStyling>
            <IoMdKey className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 23 }}>
          <InputStyling
            type="password"
            placeholder={t("retype_placeholder")}
            name="password2"
            id="password2"
            onChange={formik.handleChange}
            value={formik.values.password2}
          />
        </Col>

        <Col xs={{ span: 24, offset: 0 }} md={{ span: 23, offset: 1 }}>
          {formik.errors.password ? (
            <Alert type="error" message={formik.errors.password} banner />
          ) : null}
          {formik.errors.password2 ? (
            <Alert type="error" message={formik.errors.password2} banner />
          ) : null}
        </Col>
      </Row>

      <Row gutter={[10, 10]} justify="end">
        <Col>
          <Button
            type="submit"
            style={{
              fontWeight: 400,
              letterSpacing: "1px",
              textTransform: "capitalize",
            }}
            className="mt-2"
          >
            {t("signup")}
          </Button>
        </Col>
      </Row>
    </form>
  );
};

const DetailsComponent = () => {
  const [plan, setPlan] = useState("");
  // ////////    services fields
  const [companyName, setCompanyName] = useState("");
  const [about, setAbout] = useState("");
  const [typeBusiness, setTypeBusiness] = useState([]);
  const [fullName, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const dispatch = useDispatch();

  const body = {
    companyName,
    about,
    typeBusiness,
    fullName,
    telephone,
    email,
    city,
    country,
    region,
  };

  const history = useHistory();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (plan === "free") {
      dispatch(freeSubscription(body));
      history.push("/advertising/thank", { data: body });
    }
    if (plan === "premium") {
      dispatch(saveServiceInfo(body));
      history.push("/advertising/cart");
    }
  };

  // const handleClickFree = () => {
  //   dispatch(saveServiceInfo(body));
  //   history.push("/advertising/cart")
  // };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title">{t("company_info")}</h1>
      <Row gutter={[10, 10]}>
        <Col xs={{ span: 4 }} md={{ span: 1 }}>
          <IconStyling>
            <BsBuilding className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 23 }}>
          <InputStyling
            required
            type="text"
            placeholder={t("company_name_placeholder")}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Col>
        <Col xs={{ span: 4 }} md={{ span: 1 }}>
          <IconStyling>
            <FaPencilAlt className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 23 }}>
          <TextAreaStyling
            required
            name=""
            rows="5"
            cols="4"
            placeholder={t("about_company_placeholder")}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </Col>
        <Col xs={{ span: 4 }} md={{ span: 1 }}>
          <IconStyling>
            <MdBusinessCenter className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 23 }}>
          <SelectStyling
            required
            // mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder={t("select_typ_business_placeholder")}
            onChange={(value) => setTypeBusiness(value)}
          >
            {BusinessList.map((item, index) => (
              <Option key={index} value={item.value} label={item.title}>
                {item.title}
              </Option>
            ))}
          </SelectStyling>
        </Col>
      </Row>

      <h1 className="title">{t("contact_details")}</h1>
      <Row gutter={[10, 10]}>
        <Col xs={{ span: 4 }} md={{ span: 1 }}>
          <IconStyling>
            <FaUser className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 23 }}>
          <InputStyling
            required
            type="text"
            name="name"
            placeholder={t("full_name__placeholder")}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Col>
        <Col xs={{ span: 4 }} md={{ span: 1 }}>
          <IconStyling>
            <ImPhone className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 23 }}>
          <InputStyling
            required
            type="tel"
            placeholder={t("phone_number_placeholder")}
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </Col>
        <Col xs={{ span: 4 }} md={{ span: 1 }}>
          <IconStyling>
            <AiOutlineMail className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 23 }}>
          <InputStyling
            required
            type="email"
            placeholder={t("email_placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
        <Col xs={{ span: 4 }} md={{ span: 1 }}>
          <IconStyling>
            <FaMapMarkerAlt className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 23 }}>
          <InputStyling
            required
            type="text"
            placeholder={t("city__placeholder")}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Col>
        <Col xs={{ span: 4 }} md={{ span: 1 }}>
          <IconStyling>
            <BiWorld className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 20 }} md={{ span: 23 }}>
          <Row gutter={20}>
            <Col xs={{ span: 12 }}>
              <CountryDropdownStyling
                value={country}
                defaultOptionLabel={t("select_country__placeholder")}
                onChange={(val) => setCountry(val)}
              />
            </Col>
            <Col xs={{ span: 12 }}>
              <RegionDropdownStyling
                required
                country={country}
                value={region}
                onChange={(value) => setRegion(value)}
                defaultOptionLabel={t("select_region__placeholder")}
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <PlanStyling>
        <h1 className="title">Choose your ad type, premium or free</h1>
        <Row gutter={{ lg: 20, md: 10, sm: 10 }}>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div className="card">
              <h5 className="card_title premium">Premium</h5>
              <div className="card_body">
                <p className="price">
                  {" "}
                  start<span>aed 25</span>{" "}
                </p>
                <ul className="content">
                  <li>Vivamus magna justo, lacinia eget consectetur</li>
                  <li>Vivamus magna justo, lacinia consectetur</li>
                  <li>Vivamus magna justo, lacinia eget consectetur</li>
                  <li>Vivamus magna justo, lacinia consectetur</li>
                </ul>
              </div>
              <div className="card_footer">
                <button
                  type="submit"
                  // to="/advertising/cart"
                  className="btn premium"
                  onClick={() => setPlan("premium")}
                >
                  Start Now
                </button>
              </div>
            </div>
          </Col>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div className="card">
              <h5 className="card_title free">free</h5>
              <div className="card_body">
                <p className="price">
                  {" "}
                  start<span>aed 0</span>{" "}
                </p>
                <ul className="content">
                  <li>Vivamus magna justo, lacinia eget consectetur</li>
                  <li>Vivamus magna justo, lacinia consectetur</li>
                  <li>Vivamus magna justo, lacinia eget consectetur</li>
                  <li>Vivamus magna justo, lacinia consectetur</li>
                </ul>
              </div>
              <div className="card_footer">
                <button
                  type="submit"
                  className="btn free"
                  onClick={() => setPlan("free")}
                >
                  Start Now
                </button>
              </div>
            </div>
          </Col>
        </Row>
      </PlanStyling>
    </form>
  );
};

// const PlanComponent = ({ body }) => {
//   const dispatch = useDispatch();
//   const history = useHistory();

//   const handleClickPremium = () => {
//     dispatch(saveServiceInfo(body));
//     history.push("/advertising/cart");
//   };

//   return (

//   );
// };

const PlanStyling = styled.div`
  margin: 4rem 0;
  & .title {
    text-align: center;
    margin-bottom: 2rem !important;
  }
  & .card {
    margin-bottom: 13px;
  }
  & .card_title {
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 10px 0;
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    &.free {
      background: #808e9b;
    }
    &.premium {
      background: var(--orange-color);
    }
  }
  & .card_body {
    background: #fff;
    text-align: center;
    padding: 0 10px;

    & .price {
      color: var(--orange-color);
      margin: 1.3rem 0;
      font-weight: 700;
      & span {
        font-size: 3rem;
        color: #000;
        text-transform: uppercase;
        margin-left: 10px;
        font-weight: 700;
      }
    }
    & .content {
      list-style-type: none;
      font-size: 0.9rem;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
  & .card_footer {
    margin: 2rem 0;
    text-align: center;
    & .btn {
      background: var(--orange-color);
      padding: 5px 40px;
      color: #fff;
      &:hover {
        opacity: 0.9;
      }
      &.free {
        background: #808e9b;
      }
      &.premium {
        background: var(--orange-color);
      }
    }
  }
`;

const FirstFraction = styled.div`
  margin-bottom: 1rem;
  & .card-element {
    background: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    height: 150px;

    & .content {
      text-align: center;
    }
    & .content-price {
      color: #fff;
      background: var(--orange-color);
      position: absolute;
      right: 5px;
      bottom: 3.6rem;
      padding: 3px 10px;
      font-size: 0.8rem;
    }
  }
  & .card-element-footer {
    padding: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .price {
      color: var(--orange-color);
      text-transform: uppercase;
      font-weight: 700;
      margin-right: 10px;
    }
    & .quantity {
      /* display: flex; */
      & button {
        outline: none;
        border: 1px solid var(--orange-color);
        padding: 0px;
        display: inline;
        border-radius: 50%;
        width: 30px;
        line-height: 30px;
        height: 30px;
        color: var(--orange-color);
      }
      & p {
        display: inline;
        margin: 0 7px;
        font-weight: 700;
      }
    }
  }
`;

// const AddPictureComponent = () => {
//   return (
//     <form>
//       <h1 className="title">add pictures</h1>
//       <Row>
//         <Col span={24} >
//           <DropZoneComponent
//             name="landing-image"
//             price={150}
//             accept="image/png, image/jpg, image/jpeg"
//           />
//         </Col>
//       </Row>
//       <Row gutter={10}>
//         <Col span={8}  xs={{ span: 12 }} sm={{ span: 8 }}>
//           <DropZoneComponent
//             name="image1"
//             price={45}
//             accept="image/png, image/jpg, image/jpeg"
//           />
//         </Col>
//         <Col span={8} xs={{ span: 12 }} sm={{ span: 8 }}>
//           <DropZoneComponent
//             name="image2"
//             price={45}
//             accept="image/png, image/jpg, image/jpeg"
//           />
//         </Col>
//         <Col span={8}  xs={{ span: 12 }} sm={{ span: 8 }}>
//           <DropZoneComponent
//             name="image3"
//             price={45}
//             accept="image/png, image/jpg, image/jpeg"
//           />
//         </Col>
//       </Row>
//       <Row gutter={10}>
//         <Col span={12} >
//           <DropZoneComponent
//             name="image4"
//             price={55}
//             accept="image/png, image/jpg, image/jpeg"
//           />
//         </Col>
//         <Col span={12} >
//           <DropZoneComponent
//             name="image5"
//             price={55}
//             accept="image/png, image/jpg, image/jpeg"
//           />
//         </Col>
//       </Row>
//       <Button className="ml-auto mt-3">save</Button>
//     </form>
//   );
// };

// const AddVideoComponent = () => {
//   return (
//     <form>
//       <h1 className="title">add videos</h1>
//       <Row>
//         <Col span={24} >
//           <DropZoneComponent
//             name="landing-image"
//             price={200}
//             accept="video/*"
//           />
//         </Col>
//       </Row>
//       <Button className="ml-auto mt-3">save</Button>
//     </form>
//   );
// };

const Container = styled.div`
  /* max-width: 800px; */
  /* margin: rem auto 0; */
  background-color: #ecececec;
  padding: 3rem;
  position: relative;
  /* bottom: 5rem; */

  & .title {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 14px;
    margin-top: 1rem;
    font-weight: 700;
  }
  & h3,
  h4 {
    color: #fff;
    text-transform: capitalize;
  }

  & .gutter-row {
    margin-bottom: 10px;
  }
`;

const IconStyling = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--orange-color);
  & .icon {
    font-size: 1.5rem;
  }
`;
const InputStyling = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: #fff;
  padding: 5px 10px;
`;
const TextAreaStyling = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  background: #fff;
  padding: 4px 10px;
`;

const SelectStyling = styled(Select)`
  & > * {
    text-transform: capitalize !important;
  }
  &.ant-select-selection {
    background-color: red;
  }
`;

const CountryDropdownStyling = styled(CountryDropdown)`
  border: none;
  width: 100%;
  padding: 5px 10px;
  display: block;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
    border: none;
  }
`;
const RegionDropdownStyling = styled(RegionDropdown)`
  border: none;
  padding: 5px 10px;
  display: block;
  width: 100%;
  &:focus {
    outline: none;
    border: none;
  }
`;

export default PartnerRegisterTemplate2;
