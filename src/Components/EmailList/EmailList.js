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
  StarBorderOutlined,
  LabelImportantOutlined,
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
        <EmailRow
          title="Twitch"
          subject="Hey Streamers!!"
          description="This is a test"
          time="1pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey Streamers!!"
          description="This is a test"
          time="1pm"
        />
        <EmailRow
          title="Twitch"
          subject="Hey Streamers!!"
          description="This is a test. This is a test. This is a test. this is a test."
          time="1pm"
        />
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

const EmailRow = ({ id, title, subject, description, time }) => {
  return (
    <div className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlined />
        </IconButton>
        <IconButton>
          <LabelImportantOutlined />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject}
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <div className="emailRow__description">{time}</div>
    </div>
  );
};

export default EmailList;
