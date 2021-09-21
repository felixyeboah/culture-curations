import React from "react";
import { Route, Switch } from "react-router-dom";
import { Pages } from "../pages";
import { PrivateRoute } from "./privateRoute";
import { Flex } from "@chakra-ui/layout";
import HashLoader from "react-spinners/HashLoader";

const Router = () => {
  const {
    GalleryView,
    ManageGallery,
    ManageGalleries,
    ManageGalleryUpload,
    ManageSlides,
    ManageSlideUpload,
    Dashboard,
    ErrorPage,
    ManageEventView,
    Checkout,
  } = Pages;

  return (
    <React.Suspense
      fallback={
        <Flex align="center" justify="center" minH="100vh">
          <HashLoader size={100} color="#2D4298" />
        </Flex>
      }
    >
      <Switch>
        <Route exact path="/" component={Pages.Home} />
        <Route exact path="/gallery" component={Pages.Gallery} />
        <Route exact path="/about" component={Pages.About} />
        <Route exact path="/canceled" component={Pages.Canceled} />
        <Route exact path="/success" component={Pages.Success} />
        <Route exact path="/validate" component={Pages.Validate} />
        <Route exact path="/events" component={Pages.Events} />
        <Route exact path="/events/:slug" component={Pages.EventView} />
        <Route exact path="/auth/login" component={Pages.Login} />
        <Route exact path="/auth/register" component={Pages.Register} />
        <Route exact path="/auth/verify" component={Pages.Validate} />
        <Route
          exact
          path="/auth/reset-password/:slug"
          component={Pages.ResetPassword}
        />
        <Route path="/auth/forgot-password" component={Pages.ForgotPassword} />
        <PrivateRoute exact path="/dashboard">
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute exact path="/gallery/:slug">
          <GalleryView />
        </PrivateRoute>
        <PrivateRoute exact path="/manage-gallery">
          <ManageGalleries />
        </PrivateRoute>
        <PrivateRoute exact path="/manage-gallery/upload">
          <ManageGalleryUpload />
        </PrivateRoute>
        <PrivateRoute exact path="/manage-gallery/:slug">
          <ManageGallery />
        </PrivateRoute>
        <PrivateRoute exact path="/manage-slides">
          <ManageSlides />
        </PrivateRoute>
        <PrivateRoute exact path="/manage-slides/upload">
          <ManageSlideUpload />
        </PrivateRoute>
        <PrivateRoute exact path="/manage-events">
          <ManageEventView />
        </PrivateRoute>
        <PrivateRoute exact path="/checkout">
          <Checkout />
        </PrivateRoute>
        <Route component={ErrorPage} />
      </Switch>
    </React.Suspense>
  );
};

export default Router;
