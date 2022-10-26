import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">MT-FASHION</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://firebasestorage.googleapis.com/v0/b/shop-f3941.appspot.com/o/16645508860706.png?alt=media&token=db7e6097-4eea-4458-a278-00e5813600ca" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}
