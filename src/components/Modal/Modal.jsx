import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const Modal = forwardRef(function ({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});
export default Modal;
