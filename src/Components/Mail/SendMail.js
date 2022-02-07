import { Button } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "./sendMail.css";

import { useForm } from "react-hook-form";
const SendMail = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <Close className="sendMail__close" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="to"
          {...register("to", { required: true, pattern: /^\S+@\S+$/i })}
        />
        {errors.to && <p>{"Enter valid email"}</p>}
        <input
          type="text"
          placeholder="subject"
          {...register("Subject", { required: true })}
        />

        <input
          type="text"
          placeholder="message..."
          className="sendMail__message"
          {...register("message", { required: true })}
        />
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
