export default function Input({ label, textArea, ...props }) {
  return (
    <p id="inputPara">
      <label>{label}</label>
      {textArea ? <textarea {...props} /> : <input {...props} />}
    </p>
  );
}
