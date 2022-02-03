import { IconButton } from "@material-ui/core";
import {
  ArrowBackOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  EmailOutlined,
  ErrorOutlineOutlined,
  LabelImportant,
  MoreVert,
  MoveToInbox,
  WatchLaterSharp,
} from "@material-ui/icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Mail.css";

const Mail = () => {
  const navigate = useNavigate();
  return (
    <div className="mail">
      <div className="mail__tools">
        <div className="mail_toolsLeft">
          <IconButton>
            <ArrowBackOutlined onClick={() => navigate("/")} />
          </IconButton>
          <IconButton>
            <MoveToInbox />
          </IconButton>
          <IconButton>
            <ErrorOutlineOutlined />
          </IconButton>
          <IconButton>
            <DeleteOutlined />
          </IconButton>
          <IconButton>
            <EmailOutlined />
          </IconButton>
          <IconButton>
            <WatchLaterSharp />
          </IconButton>
          <IconButton>
            <CheckCircleOutlined />
          </IconButton>
          <IconButton>
            <LabelImportant />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
        <div className="mail_toolsRight"></div>
      </div>
    </div>
  );
};

export default Mail;
