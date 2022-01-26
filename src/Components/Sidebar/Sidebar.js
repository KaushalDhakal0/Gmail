import React from "react";
import "./Sidebar.css";

import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";

import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Button
        startIcon={<AddIcon fontSize="large" />}
        className="sidebar__compose"
      >
        Compose
      </Button>
      <SidebarOption
        Icon={InboxIcon}
        title="Inbox"
        number={23}
        selected={true}
      />
      <SidebarOption Icon={StarIcon} title="Starred" number={15} />
      <SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={23} />
      <SidebarOption Icon={LabelImportantIcon} title="Important" number={23} />
      <SidebarOption Icon={NearMeIcon} title="Send" number={23} />
      <SidebarOption Icon={NoteIcon} title="Drafts" number={23} />
      <SidebarOption Icon={ExpandMoreIcon} title="More" number={23} />
    </div>
  );
};

export default Sidebar;

const SidebarOption = ({ Icon, title, number, selected }) => (
  <div className={`sidebar__option ${selected && "sidebar__option_active"}`}>
    <Icon />
    <h3>{title}</h3>
    <p>{number}</p>
  </div>
);
