

import { Gallery } from "@/container/Gallery/Gallery";
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
