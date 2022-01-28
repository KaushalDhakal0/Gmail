import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  RedoOutlined,
  MoreVertOutlined,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  Settings,
} from "@material-ui/icons";

import React from "react";
import "./EmailList.css";

const EmailList = () => {
  return (
    <div className="email__list">
      <div className="emailList__settings">
        <div className="emailList__settingsLeft">
          <Checkbox />
          <IconButton>
            <ArrowDropDown />
          </IconButton>
          <IconButton>
            <RedoOutlined />
          </IconButton>
          <IconButton>
            <MoreVertOutlined />
          </IconButton>
        </div>
        <div className="emailList__settingsRight">
          <IconButton>
            <ChevronLeft />
          </IconButton>
          <IconButton>
            <ChevronRight />
          </IconButton>
          <IconButton>
            <KeyboardHide />
          </IconButton>
          <IconButton>
            <Settings />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default EmailList;
