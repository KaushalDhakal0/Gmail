import { Checkbox, IconButton } from "@material-ui/core";
import {
  ArrowDropDown,
  RedoOutlined,
  MoreVertOutlined,
  ChevronLeft,
  ChevronRight,
  KeyboardHide,
  Settings,
  Inbox,
  People,
  LocalOffer,
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
      <div className="emailList__sections">
        <Section Icon={Inbox} title="Primary" color="red" selected />
        <Section Icon={People} title="Social" color="#1A73E8" />
        <Section Icon={LocalOffer} title="Promotions" color="green" />
      </div>
      <div className="emailList__list">
        <EmailRow />
      </div>
    </div>
  );
};

const Section = ({ Icon, title, color, selected }) => {
  return (
    <div
      className={`section ${selected && "section-selected"}`}
      style={{
        borderbottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

const EmailRow = () => {
  return (
    <div className="emailRow">
      <p>hello</p>
    </div>
  );
};

export default EmailList;
