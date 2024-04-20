import React from "react";
import logo2 from "../../logo.jpg";
export default function Header() {
  return (
    <div>
      <header className="p-3 text-bg">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <img src={logo2} alt="" className="bi me-2" width="100px" />
          </div>
        </div>
      </header>
    </div>
  );
}
