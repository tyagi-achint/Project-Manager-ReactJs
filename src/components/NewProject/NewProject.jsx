import { useRef } from "react";
import Input from "../Input/Input";
import "./NewProject.css";
import Modal from "../Modal/Modal";
export default function NewProject({ onAdd, handleCancle }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();
  function handleSave() {
    const titleValue = title.current.value;
    const descriptionValue = description.current.value;
    const dueDateValue = dueDate.current.value;

    if (
      titleValue.trim() === "" ||
      descriptionValue.trim() === "" ||
      dueDateValue.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: titleValue,
      description: descriptionValue,
      dueDate: dueDateValue,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2>Invalid Input</h2>
      </Modal>
      <div id="NewProject">
        <menu>
          <li>
            <button onClick={handleCancle} className="cancleBtn">
              Cancle
            </button>
          </li>
          <li>
            <button onClick={handleSave} className="saveBtn">
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" ref={title} label={"Title"} />
          <Input type="text" ref={description} label={"Description"} textArea />
          <Input type="date" ref={dueDate} label={"Due Date"} />
        </div>
      </div>
    </>
  );
}
