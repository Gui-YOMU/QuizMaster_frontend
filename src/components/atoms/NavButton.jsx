export default function NavButton(props) {
    return (
        <button><a href={props.href}><img src={props.src} alt={props.alt} /></a></button>
    )
}