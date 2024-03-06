import Input from "../Input/Input";
import "./NewProject.css";
export default function NewProject() {
  return (
    <div id="NewProject">
      <menu>
        <li>
          <button className="cancleBtn">Cancle</button>
        </li>
        <li>
          <button className="saveBtn">Save</button>
        </li>
      </menu>
      <div>
        <Input label={"Title"} />
        <Input label={"Description"} textArea />
        <Input label={"Due Date"} />
      </div>
    </div>
  );
}
