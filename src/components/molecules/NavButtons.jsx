import NavButton from '../atoms/NavButton.jsx'

export default function NavButtons(props) {
    return (
        <>
            {props.user.role === 'creator' && <NavButton href='editor' src='/images/creator_icon.png' alt='Creator' />}
            <NavButton href='player' src='/images/player_icon.png' alt='Player' />
            <NavButton href='profile' src='/images/profile_icon.png' alt='Profile' />
            <NavButton href='logout' src='/images/logout_icon.png' alt='Logout' />
        </>

    )
}