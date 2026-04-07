import NavBar from "../molecules/NavBar.jsx";
import Title from "../atoms/Title.jsx";
import Icon from "../atoms/Icon.jsx";

export default function Header() {
    return (
        <header className="flex justify-center p-2.5 w-full bg-mainblue h-37.5">
            <Icon />
            <Title user={{firstName:'Gui', lastName:'YOMU'}} />
            <NavBar user={{role:'creator'}} />
        </header>
    )
}