import { Gallery } from "@/container/Dashboard/Pages/Gallery";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import React from "react";

const gallery = () => {
  return (
    <ProtectedRoute>
      <Gallery />
    </ProtectedRoute>
  );
};

export default gallery;
