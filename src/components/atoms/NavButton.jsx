import { Link } from "react-router-dom";

export default function NavButton(props) {
    return (
        <Link to={props.to}>
            <button>
                <img src={props.src} alt={props.alt} />
            </button>
        </Link>
    )
}