import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "./sendMail.css";

import { useForm } from "react-hook-form";
import { closeSendMessage } from "../../features/mailSlice";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const SendMail = () => {
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const newData = {
      to: data.To,
      subject: data.subject,
      message: data.message,
      timeStamp: serverTimestamp(),
    };
    const colRef = collection(db, "emails");
    await addDoc(colRef, newData);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close
          className="sendMail__close"
          onClick={() => dispatch(closeSendMessage())}
        />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="To"
          type="email"
          placeholder="To"
          {...register("To", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.to && <p className="error__message">{"Enter valid email"}</p>}
        <input
          name="subject"
          type="text"
          placeholder="subject"
          {...register("subject", { required: true })}
        />
        {errors.subject && (
          <p className="error__message">{"Subject is invalid"}</p>
        )}

        <input
          name="message"
          type="text"
          placeholder="message..."
          className="sendMail__message"
          {...register("message", { required: true })}
        />
        {errors.message && (
          <p className="error__message">{"message cannot be empty"}</p>
        )}
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
