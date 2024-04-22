import { BottomNav } from "@/components/BottomNav";
import { CreateEvent } from "@/container/CreateEvent";
import { ProtectedRoute } from "@/container/ProtectedRoutes/ProtectedRoute";
import React from "react";

const createEvent = () => {
  return (
    <div className="body">
      {/* <ProtectedRoute> */}
        <CreateEvent />
        <BottomNav/>
      {/* </ProtectedRoute> */}
    </div>
  );
};

export default createEvent;
