"use client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <AppBar
      position="static"
      className=" bg-white shadow-none border-b-2 m-auto ">
      <Toolbar className="w-full flex flex-col justify-between items-center ">
        <Box className="w-full flex flex-col md:flex-row justify-between items-center border-b-2 py-10">
          <Box className="w-full flex flex-col justify-between items-start">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo">
              <Image
                src={"/images/Foodieland.png"}
                width={110}
                height={30}
                alt="Foodieland"
              />
            </IconButton>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetuipisicing elit,
            </Typography>
          </Box>
        </Box>
        <Box className="w-full flex flex-col lg:flex-row justify-between items-center py-10">
          <p className="w-full text-lg font-medium text-stone-500">
            © 2024 Flowbase. Powered by
            <span className="text-rose-400">Webflow</span>
          </p>
          <Box className="gap-5 " sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo">
              <Image
                src={"/images/facebook.svg"}
                alt="facebook icon"
                width={10}
                height={20}
              />
            </IconButton>{" "}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo">
              <Image
                src={"/images/twitter.svg"}
                alt="twitter icon"
                width={22}
                height={18}
              />
            </IconButton>{" "}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo">
              <Image
                src={"/images/instagram.svg"}
                alt="instagram icon"
                width={22}
                height={22}
              />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
