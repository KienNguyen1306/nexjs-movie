"use client";

import "./footer.css";
import { GoMoveToTop } from "react-icons/go";
function Footer() {
  function handleScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer className="footer">
      <div className="container">
        <div className="body">
          <div className="logo">
            <span>FILM-</span>
            <span>HD_ONLINE</span>
          </div>
          <div className="license">
            <p>Filmato © 2023</p>
            <p>Created by Kiên Nguyễn</p>
          </div>
          <div className="scrollTop">
            <button onClick={handleScrollTop}>
              <GoMoveToTop className="icon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
