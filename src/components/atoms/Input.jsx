export default function Input(props) {
    return (
        <input className="bg-card border border-border rounded-lg pt-1 pb-1 pr-4 pl-4" type={props.type} id={props.name} name={props.name} placeholder={props.placeholder} />
    )
}