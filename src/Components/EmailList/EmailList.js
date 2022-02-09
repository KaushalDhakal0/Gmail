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
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EmailList.css";

const EmailList = () => {
  const [emails, setEmails] = useState([]);
  useEffect(() => {
    const colRef = collection(db, "emails");
    getDocs(colRef).then((snap) => {
      setEmails(
        snap.docs.map((doc) => {
          // console.log(doc.data());
          return { id: doc.id, ...doc.data() };
        })
      );
    });
    // console.log(user);
  }, []);
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
        {emails.length > 0 ? (
          emails.map((email) => {
            console.log(email);
            return (
              <EmailRow
                key={email.id}
                title={email.to}
                subject={email.subject}
                description={email.message}
                time={email.timestamp}
              />
            );
          })
        ) : (
          <h1>No emails</h1>
        )}
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
  const navigate = useNavigate();
  return (
    <div
      className="emailRow"
      onClick={() => {
        navigate("/mail");
      }}
    >
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
          <span className="emailRow__description">- {description}</span>
        </h4>
      </div>
      <p className="emailRow__time">{time}</p>
    </div>
  );
};

export default EmailList;
