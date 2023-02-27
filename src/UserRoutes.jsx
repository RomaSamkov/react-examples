import PrivateRoute from "modules/PrivateRoute/PrivateRoute";
import PublicRoute from "modules/PublicRoute/PublicRoute";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MyFavoriteBooksPage = lazy(() =>
  import("pages/MyFavoriteBooksPage/MyFavoriteBooksPage")
);
const RegisterPage = lazy(() => import("pages/RegisterPage/RegisterPage"));
const LoginPage = lazy(() => import("pages/LoginPage/LoginPage"));
const BooksPage = lazy(() => import("pages/BooksPage/BooksPage"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route element={<PublicRoute />}>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/books" element={<BooksPage />} />
          <Route path="/my-favorite-books" element={<MyFavoriteBooksPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster
        toastOptions={{
          error: {
            style: {
              fontWeight: 500,
              padding: "16px",
              color: "#fff",
              background: "red",
            },
          },
          success: {
            style: {
              fontWeight: 500,
              padding: "16px",
              color: "#fff",
              background: "#5446cc",
            },
          },
        }}
      />
    </Suspense>
  );
};

export default UserRoutes;
