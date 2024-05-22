import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ShareIcon from "@mui/icons-material/Share";
import {
  EmailShareButton,
  FacebookShareButton,
  FacebookIcon,
  WhatsappIcon,
  TwitterIcon,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
export default function Share({ anchorEl, handleClick, handleClose }) {
  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <ShareIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>
          <WhatsappShareButton url="tutorent.com" />
          <WhatsappIcon />
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <FacebookShareButton url="tutorent.com">
            <FacebookIcon />
          </FacebookShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <TwitterShareButton url="tutorent.com">
            <TwitterIcon />
          </TwitterShareButton>
        </MenuItem>
      </Menu>
    </div>
  );
}
