import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { GoogleAuth } from "@/container/GoogleAuth";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import React, { useEffect } from "react";

const googleAuth = () => {
  return (
    <>
      <ProtectedRoute>
        <GoogleAuth />
      </ProtectedRoute>
    </>
  );
};

export default googleAuth;
