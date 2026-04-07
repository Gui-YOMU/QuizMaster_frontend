export default function Title(props) {
    if (props.user.surname) {
        return (
            <h1>Bonjour {props.user.surname}</h1>
        )
    }
    return (
        <h1>Bonjour {props.user.firstName} {props.user.lastName}</h1>
    )
}