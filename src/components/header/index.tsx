"use client";
import { useState } from "react";
import "./header.css";
import Logo from "./logo";
import Menu from "./menu";
import FormSearch from "./search";

import { FaBars } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleBar, toggleSearch } from "@/store/isShow";
function Header() {
  let bar = useSelector((state: any) => state.ISSHOW.isBar);
  let search = useSelector((state: any) => state.ISSHOW.isSearch);

  const dispatch = useDispatch();
  function handleShowMenu() {
    let payloadValue = "...";
    dispatch(toggleBar(payloadValue));
  }

  function handleShowSearch() {
    let payloadValue = "...";
    dispatch(toggleSearch(payloadValue));
  }

  return (
    <div className="header">
      <div className="container">
        <div className="body">
          <div className={`image-logo ${search ? "show" : ""}`}>
            <Logo />
          </div>
          <nav className={`nav-menu ${bar ? "togle-bar" : ""}`}>
            <Menu />
          </nav>
          <div className={`search ${search ? "show" : ""}`}>
            <FormSearch />
          </div>
          <div className="bar bar-search" onClick={handleShowSearch}>
            {search ? (
              <AiOutlineClose className="icon" />
            ) : (
              <AiOutlineSearch className="icon" />
            )}
          </div>
          <div className="bar" onClick={handleShowMenu}>
            <FaBars className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
