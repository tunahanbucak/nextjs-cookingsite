"use client";

import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  MenuList,
  Toolbar,
} from "@mui/material";
import { useState, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import MenuIcon from "@mui/icons-material/Menu";

const pages = [
  { title: "Anasayfa", href: "/" },
  { title: "Hakkımızda", href: "/about" },
  { title: "Tarifler", href: "/recipes" },
  { title: "Blog", href: "/blogs" },
  { title: "İletişim", href: "/contact" },
];

export default function Navbar() {
  const [anchorNav, setAnchorNav] = useState<null | HTMLElement>(null);
  const openmenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorNav(event.currentTarget);
  };
  const closemenu = () => {
    setAnchorNav(null);
  };
  return (
    <AppBar
      position="static"
      className="bg-white px-5 md:px-20 shadow-none border-b-2">
      <Toolbar>
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          className="w-full justify-between items-center">
          <Link href="/">
            <Image
              src="/images/Foodieland.png"
              width={110}
              height={30}
              alt="Foodieland"
            />
          </Link>
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            className="w-3/6 justify-around">
            {pages.map(({ title, href }) => (
              <Link
                href={href}
                key={title}
                className="text-[16px] font-[400] text-black flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold">
                {title}
              </Link>
            ))}
          </Box>
          <Box className="gap-5" sx={{ display: { xs: "none", md: "flex" } }}>
            <CustomButton
              title="Kayıt Ol"
              btnType="button"
              containerStyles="text-white rounded-full bg-black min-w-[130px] hover:bg-gray-500"
            />
          </Box>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }} className="gap-40">
          <IconButton
            size="large"
            edge="start"
            className="text-black"
            aria-label="menu"
            onClick={openmenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            open={Boolean(anchorNav)}
            onClose={closemenu}
            anchorEl={anchorNav}
            sx={{ display: { xs: "flex", md: "none" }, width: "100%" }}>
            <MenuList>
              {pages.map(({ title, href }) => (
                <MenuItem color="inherit" key={title} onClick={closemenu}>
                  <Link
                    href={href}
                    className="text-black hover:text-neutral-800 font-medium text-base font-sans">
                    {title}
                  </Link>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo">
            <Image
              src="/images/Foodieland.png"
              alt="logo"
              width={110}
              height={30}
            />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
