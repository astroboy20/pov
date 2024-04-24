import { BottomNav } from "@/components/BottomNav";
import { EventSetup } from "@/container/EventSetup";
import React from "react";

const eventsetup = () => {
  return (
    <div className="body">
      <EventSetup />
      <BottomNav />
    </div>
  );
};

export default eventsetup;
