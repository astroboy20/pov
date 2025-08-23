import { BottomNav } from "@/components/BottomNav";
import { ViewEvent } from "@/container/ViewAlbum/ViewAlbum";
import React from "react";

const view_album = () => {
  return (
    <div>
      <ViewEvent/>
      <BottomNav />
    </div>
  );
};

export default view_album;
