import { IconButton } from "@material-ui/core";
import {
  ArrowBackOutlined,
  CheckCircleOutlined,
  DeleteOutlined,
  EmailOutlined,
  ErrorOutlineOutlined,
  ExitToApp,
  LabelImportant,
  LabelImportantOutlined,
  MoreVert,
  MoveToInbox,
  Print,
  UnfoldMore,
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
        <div className="mail_toolsRight">
          <IconButton>
            <UnfoldMore />
          </IconButton>
          <IconButton>
            <Print />
          </IconButton>
          <IconButton>
            <ExitToApp />
          </IconButton>
        </div>
      </div>
      <div className="mail__body">
        <div className="mail__bodyHeader">
          <h2>Subject</h2>
          <LabelImportantOutlined className="mail__important" />
          <p>Title</p>
          <p className="mail__time">10pm</p>
        </div>

        <div className="mail__message">
          <p>This is a message.</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
