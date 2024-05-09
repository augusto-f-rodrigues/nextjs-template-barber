"use client";
import { Box, Button, IconButton } from "@mui/material";
import { Instagram, WhatsApp, Facebook } from "@mui/icons-material";
import Link from "next/link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import React from "react";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed left-0 top-0 z-10 flex w-full items-center justify-center bg-neutral-900 bg-opacity-70 p-4">
      <nav className="flex w-2/3 flex-row items-center justify-around">
      <button onClick={() => scrollToId("home")}>
          {" "}
          <p className="font-semibold text-neutral-100 transition-colors hover:text-amber-200">
            Home
          </p>
        </button>
        <button onClick={() => scrollToId("about")}>
          {" "}
          <p className="font-semibold text-neutral-100 transition-colors hover:text-amber-200">
            Quem somos
          </p>
        </button>
        <button onClick={() => scrollToId("services")}>
          {" "}
          <p className="font-semibold text-neutral-100 transition-colors hover:text-amber-200">
            Serviços
          </p>
        </button>
        <button onClick={() => scrollToId("contact")}>
          {" "}
          <p className="font-semibold text-neutral-100 transition-colors hover:text-amber-200">
            Contato
          </p>
        </button>
        <button
          className="cursor-pointer font-semibold text-neutral-100 transition-colors hover:text-amber-200"
          onMouseEnter={handleClick}
        >
          Mais
        </button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
            style: {
              backgroundColor: "rgba(23 23 23)",
              width: "200px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            },
            onMouseLeave: handleClose,
          }}
          anchorOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "center",
          }}
        >
          <MenuItem onClick={handleClose}>
            {" "}
            <p className="font-semibold text-neutral-100 transition-colors hover:text-amber-200">
              Blog
            </p>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <p className="font-semibold text-neutral-100 transition-colors hover:text-amber-200">
              Trabalhe Conosco
            </p>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            {" "}
            <p className="font-semibold text-neutral-100 transition-colors hover:text-amber-200">
              Aplicativo da Barbearia
            </p>
          </MenuItem>
        </Menu>
        <div className="flex w-24 justify-between">
          <WhatsApp className="cursor-pointer text-neutral-100 transition-colors hover:text-amber-200" />
          <Instagram className="cursor-pointer text-neutral-100 transition-colors hover:text-amber-200" />
          <Facebook className="cursor-pointer text-neutral-100 transition-colors hover:text-amber-200" />
        </div>
      </nav>
    </div>
  );
}
