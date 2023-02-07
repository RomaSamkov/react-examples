import MyFavoriteBooksPage from "pages/MyFavoriteBooksPage/MyFavoriteBooksPage";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const BooksPage = lazy(() => import("pages/BooksPage/BooksPage"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));

const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...Loading</p>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BooksPage />} />
        <Route path="/my-favorite-books" element={<MyFavoriteBooksPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
