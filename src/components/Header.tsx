import React from "react";
import { Navbar } from "react-bootstrap";
import { Menu } from "components";
import Link from "next/link";
import { Menu as MenuIcon } from "react-feather";
import Skeleton from "react-loading-skeleton";
import { IoCubeOutline } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";

function Header() {
  return (
    <header className="navbar navbar-header navbar-header-fixed">
      <Link href="/" passHref>
        <a href={"/"} id="mainMenuOpen" className="burger-menu">
          <MenuIcon />
        </a>
      </Link>
      <Navbar className="navbar-brand">
        <Link href="/" passHref>
          <a className="pt-1">
            <img width="160px" src="/images/logo.svg" />
          </a>
        </Link>
      </Navbar>
      <Menu />
      <div className="navbar-right" style={{ width: 400 }}>
        <a href="https://docs.blockfrost.io/" target="_blank" rel="noreferrer">
          <button className="btn btn-sm pd-x-15 btn-uppercase mg-l-5 d-flex">
            <div className="mr-2">
              <FaHashtag />
            </div>
            documentation
          </button>
        </a>
      </div>
    </header>
  );
}

export { Header };
