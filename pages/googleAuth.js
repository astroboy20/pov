import { PurpleSpinner } from "@/components/Spinner/Spinner";
import { GoogleAuth } from "@/container/GoogleAuth";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import React, { useEffect } from "react";

const googleAuth = () => {
  return (
    <div className="body">
      <ProtectedRoute>
        <GoogleAuth />
      </ProtectedRoute>
    </div>
  );
};

export default googleAuth;
