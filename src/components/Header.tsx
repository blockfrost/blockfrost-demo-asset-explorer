import React from "react";
import { Navbar } from "react-bootstrap";
import Link from "next/link";
import { Menu as MenuIcon } from "react-feather";
import { FaHashtag, FaGithub } from "react-icons/fa";

function Header() {
  return (
    <header className="navbar navbar-header navbar-header-fixed">
      <Link href="/" passHref>
        <a href={"/"} id="mainMenuOpen" className="burger-menu">
          <MenuIcon />
        </a>
      </Link>
      <Navbar className="navbar-brand d-flex align-items-center">
        <Link href="/" passHref>
          <a className="pt-1">
            <img width="160px" src="/images/logo.svg" />
          </a>
        </Link>
        <div className="title">
          <div className="text">Demo Asset Explorer</div>
        </div>
      </Navbar>

      <div className="navbar-right" style={{ width: 400 }}>
        <a href="https://docs.blockfrost.io/" target="_blank" rel="noreferrer">
          <button className="btn btn-sm pd-x-15 btn-uppercase mg-l-5 d-flex">
            <div className="mr-2">
              <FaHashtag />
            </div>
            documentation
          </button>
        </a>
        <a
          href="https://github.com/blockfrost/blockfrost-demo-asset-explorer"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
      <style jsx>{`
        .title {
          margin-top: 2px;
          padding-left: 20px;
          display: flex;
          align-items: center;
        }
      `}</style>
    </header>
  );
}

export { Header };
