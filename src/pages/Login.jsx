import LoginForm from "../components/organisms/LoginForm.jsx";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <LoginForm />
      <p>Pas encore inscrit ?</p>
      <p>Cliquez <Link className='font-bold' to='/signin'>ici</Link> pour vous inscrire</p>
    </>
  );
}
