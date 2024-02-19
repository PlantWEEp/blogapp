import React from "react";
import DetailPages from "./DetailPages";
import Sidebar from "./Sidebar";

function Index() {
  return (
    <>
      <div className="container flex gap-5 mt-3">
        <div className="w-[70%]">
          <DetailPages />
        </div>
        <div className="w-[30%]">
          <Sidebar />
        </div>
      </div>
    </>
  );
}

export default Index;
