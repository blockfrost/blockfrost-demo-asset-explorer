import React from "react";
import { useRouter } from "next/router";
import { IoCubeOutline } from "react-icons/io5";
import { Nav } from "react-bootstrap";
import Link from "next/link";
import { X, Box, Package, Archive } from "react-feather";
import { FaHashtag } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";

function Menu() {
  return (
    <div id="navbarMenu" className="navbar-menu-wrapper">
      <div className="navbar-menu-header">
        <Link href={"/"} passHref>
          <a className="df-logo">
            block<span>frost</span>
          </a>
        </Link>
        <a id="mainMenuClose" href="">
          <X />
        </a>
      </div>
    </div>
  );
}

export { Menu };
