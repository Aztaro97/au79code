import React from "react";
import { Translation } from "react-i18next";
import { AiOutlineShop } from "react-icons/ai";
import { BiBuildingHouse } from "react-icons/bi";
import { IoIosConstruct } from "react-icons/io";
import { IoRestaurantSharp } from "react-icons/io5";
import { MdCamera } from "react-icons/md";

const TranslateContent = (contents) => {
  return <Translation>{(t) => <>{t(contents)}</>}</Translation>;
};

export const categoryAdversiting = [
  {
    profileId: "61683883bb90435d90a1bd24",
    title: TranslateContent("real estate"),
    image:
      "https://res.cloudinary.com/tarositeweb/image/upload/v1634130730/tmp-9-1634130722917_bxjxtm.jpg",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    title: TranslateContent("restaurant"),
    image: "/img/advertising/restaurant.jpg",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    title: TranslateContent("vehicule"),
    image: "/img/advertising/real_state.jpg",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    title: TranslateContent("pharmacy"),
    image: "/img/advertising/pharmacy.jpg",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    title: TranslateContent("marketing"),
    image: "/img/advertising/exemple.jpg",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    title: TranslateContent("construction"),
    image: "/img/advertising/exemple.jpg",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    title: TranslateContent("construction"),
    image: "/img/advertising/exemple.jpg",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    title: TranslateContent("construction"),
    image: "/img/advertising/exemple.jpg",
  },
];

export const BusinessList = [
  {
    title: TranslateContent("restaurant"),
    value: "restaurant",
    icon: <IoRestaurantSharp />,
  },
  {
    title: TranslateContent("real estate"),
    value: "real estate",
    icon: <BiBuildingHouse />,
  },
  {
    title: TranslateContent("construction"),
    value: "construction",
    icon: <IoIosConstruct />,
  },
  {
    title: TranslateContent("marketing"),
    value: "marketing",
    icon: <AiOutlineShop />,
  },
  {
    title: TranslateContent("vehicule"),
    value: "vehicule",
    icon: <AiOutlineShop />,
  },
  {
    title: TranslateContent("pharmacy"),
    value: "pharmacy",
    icon: <AiOutlineShop />,
  },
  {
    title: TranslateContent("photography"),
    value: "photography",
    icon: <MdCamera />,
  },
];

export const listPartnerLogo = [
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "code loccol",
    logoUrl: "https://logo.clearbit.com/clearbit.com",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "Noon",
    logoUrl: "https://logo.clearbit.com/amazon.com",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    logoUrl: "https://logo.clearbit.com/alibaba.com",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "tabalat",
    logoUrl: "https://logo.clearbit.com/aliexpress.com",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    logoUrl: "https://logo.clearbit.com/ebay.com",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    logoUrl: "https://logo.clearbit.com/Fiverr.com",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    logoUrl: "https://logo.clearbit.com/IKEA.com",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    logoUrl: "https://logo.clearbit.com/Vinted.com",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    logoUrl: "https://logo.clearbit.com/Rakuten.com",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    logoUrl: "https://logo.clearbit.com/Pinterest.com",
  },
];

export const VideoData = [
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    videoUrl:
      "https://res.cloudinary.com/tarositeweb/video/upload/v1634022188/au79code/AZ_1_gro3g4.mp4",
    description:
      "Quisque velit nisi, pretium ut lacinia inQuisque velit nisi, pretium ut lacinia in Quisque velit nisi, pretium ut lacinia in ",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    videoUrl:
      "https://res.cloudinary.com/tarositeweb/video/upload/v1634022182/au79code/AZ_3_ignyyi.mp4",
    description:
      "Quisque velit nisi, pretium ut lacinia inQuisque velit nisi, pretium ut lacinia in Quisque velit nisi, pretium ut lacinia in ",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    companyName: "au 79 code",
    videoUrl:
      "https://res.cloudinary.com/tarositeweb/video/upload/v1634022150/au79code/AZ_2_l0qaqv.mp4",
    description:
      "Quisque velit nisi, pretium ut lacinia inQuisque velit nisi, pretium ut lacinia in Quisque velit nisi, pretium ut lacinia in ",
  },
];

export const firstBannerData = [
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8874465/%D8%AA%D8%B1%D8%A7%D9%8A%D9%86%D8%AC%D9%84-%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9-8874465-english_featured_image_mobile-1621170914.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/9063300/%D9%81%D8%A7%D9%86%D8%AA%D8%A7%D8%B2%D9%8A-%D8%A8%D8%B1%D9%8A%D9%85%D9%8A%D9%8A%D8%B1-%D9%84%D9%8A%D8%AC-9063300-english_featured_image_mobile-1630224811.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8736764/%D8%AC%D8%A7%D9%83%D9%84%D9%8A%D9%86-%D9%84%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%81-8736764-english_featured_image_mobile-1614506174.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8961842/%D8%B4%D9%87%D8%AF-%D8%A7%D9%84%D8%A7%D8%B5%D9%8A%D9%84-%D9%84%D9%86%D9%82%D9%84-%D8%A7%D9%84%D8%A7%D8%AB%D8%A7%D8%AB-8961842-english_featured_image_mobile-1624714329.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Abu-Dhabi/banners/7903041/%D9%84%D8%AD%D8%AC%D8%B2-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%AD%D9%87-%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9-7903041-english_featured_image_mobile-1608209412.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl: "/img/advertising/bg-images.jpeg",
  },
];

export const secondeBannerData = [
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8874465/%D8%AA%D8%B1%D8%A7%D9%8A%D9%86%D8%AC%D9%84-%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9-8874465-english_featured_image_mobile-1621170914.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/9063300/%D9%81%D8%A7%D9%86%D8%AA%D8%A7%D8%B2%D9%8A-%D8%A8%D8%B1%D9%8A%D9%85%D9%8A%D9%8A%D8%B1-%D9%84%D9%8A%D8%AC-9063300-english_featured_image_mobile-1630224811.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8736764/%D8%AC%D8%A7%D9%83%D9%84%D9%8A%D9%86-%D9%84%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%81-8736764-english_featured_image_mobile-1614506174.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8961842/%D8%B4%D9%87%D8%AF-%D8%A7%D9%84%D8%A7%D8%B5%D9%8A%D9%84-%D9%84%D9%86%D9%82%D9%84-%D8%A7%D9%84%D8%A7%D8%AB%D8%A7%D8%AB-8961842-english_featured_image_mobile-1624714329.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Abu-Dhabi/banners/7903041/%D9%84%D8%AD%D8%AC%D8%B2-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%AD%D9%87-%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9-7903041-english_featured_image_mobile-1608209412.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl: "/img/advertising/bg-images.jpeg",
  },
];

export const ThirdBannerData = [
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8874465/%D8%AA%D8%B1%D8%A7%D9%8A%D9%86%D8%AC%D9%84-%D9%84%D9%84%D8%A7%D8%B3%D8%AA%D8%B4%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D9%84%D9%87%D9%86%D8%AF%D8%B3%D9%8A%D8%A9-8874465-english_featured_image_mobile-1621170914.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/9063300/%D9%81%D8%A7%D9%86%D8%AA%D8%A7%D8%B2%D9%8A-%D8%A8%D8%B1%D9%8A%D9%85%D9%8A%D9%8A%D8%B1-%D9%84%D9%8A%D8%AC-9063300-english_featured_image_mobile-1630224811.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8736764/%D8%AC%D8%A7%D9%83%D9%84%D9%8A%D9%86-%D9%84%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%81-8736764-english_featured_image_mobile-1614506174.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8961842/%D8%B4%D9%87%D8%AF-%D8%A7%D9%84%D8%A7%D8%B5%D9%8A%D9%84-%D9%84%D9%86%D9%82%D9%84-%D8%A7%D9%84%D8%A7%D8%AB%D8%A7%D8%AB-8961842-english_featured_image_mobile-1624714329.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl:
      "https://assets.waseet.net/prod/Abu-Dhabi/banners/7903041/%D9%84%D8%AD%D8%AC%D8%B2-%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%AD%D9%87-%D8%A7%D9%84%D8%A7%D8%B9%D9%84%D8%A7%D9%86%D9%8A%D8%A9-7903041-english_featured_image_mobile-1608209412.jpg?width=720&height=408",
  },
  {
    profileId: "61683883bb90435d90a1bd24",
    imgUrl: "/img/advertising/bg-images.jpeg",
  },
];

export const servicePicture = [
  {
    profileId: "6162a11181e69950ac0d7e0d",
    imgUrl:
      "https://thumbs.dreamstime.com/b/healthy-food-background-fruits-vegetables-cereal-nuts-superfood-dietary-balanced-vegetarian-eating-products-kitchen-143677456.jpg",
  },
  {
    profileId: "6162a11181e69950ac0d7e0d",
    imgUrl:
      "https://thumbs.dreamstime.com/b/diet-healthy-food-lifestyle-health-concept-sport-exercise-equipment-workout-and-gym-background-nutrition-detox-salad-f-179855057.jpg",
  },
  {
    profileId: "6162a11181e69950ac0d7e0d",
    imgUrl:
      "https://assets.waseet.net/prod/Dubai/banners/8736764/%D8%AC%D8%A7%D9%83%D9%84%D9%8A%D9%86-%D9%84%D9%84%D8%AA%D9%86%D8%B8%D9%8A%D9%81-8736764-english_featured_image_mobile-1614506174.jpg?width=720&height=408",
  },
  {
    profileId: "6162a11181e69950ac0d7e0d",
    imgUrl:
      "https://thumbs.dreamstime.com/b/mexican-food-mix-colorful-background-mexico-66442136.jpg",
  },
  {
    profileId: "6162a11181e69950ac0d7e0d",
    imgUrl:
      "https://thumbs.dreamstime.com/b/fast-food-menu-chicken-nuggets-hamburger-french-fries-33671451.jpg",
  },
  {
    profileId: "6162a11181e69950ac0d7e0d",
    imgUrl:
      "https://thumbs.dreamstime.com/b/real-estate-agent-closeup-woman-mortgage-consultant-holding-house-model-concept-new-home-sale-rent-shallow-depth-field-53751844.jpg",
  },
];
