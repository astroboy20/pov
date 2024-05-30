import { BottomNav } from "@/components/BottomNav";
import { Profile } from "@/container/Profile";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import React from "react";

const profile = () => {
  return (
    <div className="body">
      <ProtectedRoute>
        <Profile/>
        <BottomNav />
      </ProtectedRoute>
    </div>
  );
};

export default profile;
