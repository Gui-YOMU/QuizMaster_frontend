import NavButton from '../atoms/NavButton.jsx'

export default function NavBar(props) {
    return (
        <>
            {props.user.role === 'creator' && <NavButton to='/creator' src='/images/creator_icon.png' alt='Creator' />}
            <NavButton to='/player' src='/images/player_icon.png' alt='Player' />
            <NavButton to='/profile' src='/images/profile_icon.png' alt='Profile' />
            <NavButton to='/logout' src='/images/logout_icon.png' alt='Logout' />
        </>

    )
}