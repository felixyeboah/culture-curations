import React from "react";

//pages
const Home = React.lazy(() => import("./home"));
const Login = React.lazy(() => import("./auth/login"));
const Register = React.lazy(() => import("./auth/register"));
const Verify = React.lazy(() => import("./auth/verify"));
const ForgotPassword = React.lazy(() => import("./auth/forgot-password"));
const ResetPassword = React.lazy(() => import("./auth/reset-password"));
const About = React.lazy(() => import("./about"));
const Dashboard = React.lazy(() => import("./dashboard"));
const Validate = React.lazy(() => import("./validate"));
const Success = React.lazy(() => import("./success"));
const Canceled = React.lazy(() => import("./canceled"));
const ManageGalleries = React.lazy(() => import("./manage-gallery/index"));
const ManageGalleryUpload = React.lazy(() => import("./manage-gallery/upload"));
const ManageGallery = React.lazy(() => import("./manage-gallery/gallery"));
const ManageSlides = React.lazy(() => import("./manage-slides/index"));
const ManageSlideUpload = React.lazy(() => import("./manage-slides/upload"));
const Gallery = React.lazy(() => import("./gallery/index"));
const GalleryView = React.lazy(() => import("./gallery/gallery-view"));
const Events = React.lazy(() => import("./events"));
const EventView = React.lazy(() => import("./events/event"));
const Checkout = React.lazy(() => import("./checkout"));
const ErrorPage = React.lazy(() => import("./404"));
const ManageEventView = React.lazy(() => import("./manage-events"));

export const Pages = {
  Home,
  Login,
  Register,
  Verify,
  ForgotPassword,
  ResetPassword,
  About,
  Dashboard,
  Validate,
  Success,
  Canceled,
  ManageGalleries,
  ManageGalleryUpload,
  ManageGallery,
  ManageSlides,
  ManageSlideUpload,
  Gallery,
  GalleryView,
  Events,
  EventView,
  Checkout,
  ErrorPage,
  ManageEventView,
};
