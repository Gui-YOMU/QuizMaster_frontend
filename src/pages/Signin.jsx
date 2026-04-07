import SigninForm from "../components/organisms/SigninForm.jsx";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <SigninForm />
      <p>Déjà inscrit ?</p>
      <p>Cliquez <Link className='font-bold' to='/login'>ici</Link> pour vous connecter</p>
    </>
  );
}
