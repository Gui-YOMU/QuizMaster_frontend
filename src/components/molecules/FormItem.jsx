import Input from "../atoms/Input.jsx";
import Label from "../atoms/Label.jsx";

export default function FormItem(props) {
  return (
    <div className="flex flex-col">
      <Label for={props.name} value={props.value} mandatory={props.mandatory} />
      <Input
        type={props.type}
        id={props.name}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </div>
  );
}
