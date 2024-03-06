import { forwardRef } from "react";
import "./Input.css";

const Input = forwardRef(function ({ label, textArea, ...props }, ref) {
  return (
    <p id="inputPara">
      <label>{label}</label>
      {textArea ? (
        <textarea ref={ref} {...props} />
      ) : (
        <input ref={ref} {...props} />
      )}
    </p>
  );
});
export default Input;
