import NavButton from '../atoms/NavButton.jsx'

export default function NavBar(props) {
    return (
        <>
            {props.user.role === 'creator' && <NavButton src='/images/creator_icon.png' alt='Creator' />}
            <NavButton src='/images/player_icon.png' alt='Player' />
            <NavButton src='/images/profile_icon.png' alt='Profile' />
            <NavButton src='/images/logout_icon.png' alt='Logout' />
        </>

    )
}