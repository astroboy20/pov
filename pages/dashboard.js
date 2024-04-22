import { BottomNav } from "@/components/BottomNav";
import { Dashboard } from "@/container/Dashboard";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import React from "react";

const dashboard = () => {
  return (
    <div className="body">
      {/* <ProtectedRoute> */}
        <Dashboard />
        <BottomNav/>

      {/* </ProtectedRoute> */}
    </div>
  );
};

export default dashboard;
