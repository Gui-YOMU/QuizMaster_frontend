export default function Label(props) {
  return (
    <label htmlFor={props.for}>
      {props.value}
      {props.mandatory && <span className="text-error font-bold">*</span>}
    </label>
  );
}
