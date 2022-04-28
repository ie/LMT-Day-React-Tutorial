import Button from "./../Button/Button";
import { useState } from "react";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");

  const [description, setDescription] = useState("");

  const handleChangeInputSubject = (event) => {
    setSubject(event.target.value);
  };
  const handleChangeInputEmail = (event) => {
    setSubject(event.target.value);
  };
  const handleTextAreaInput = (event) => {
    setSubject(event.target.value);
  };
  const handleSubmit = (event) => {};
  return (
    <div className="contact">
      <div className="formControl">
        <input
          type="text"
          placeholder="subject"
          onChange={handleChangeInputSubject()}
        />
      </div>
      <div className="formControl">
        <input
          type="email"
          placeholder="Email"
          onChange={handleChangeInputEmail()}
        />
      </div>
      <div className="formControl">
        <textarea name="" id="" cols="30" rows="4">
          Your request here
        </textarea>
      </div>
      <div className="formControl">
        <Button handleClick={handleSubmit}></Button>
      </div>
    </div>
  );
};
export default Contact;
