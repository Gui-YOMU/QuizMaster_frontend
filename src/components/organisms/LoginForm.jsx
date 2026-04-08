import Title from "../atoms/Title";
import FormItem from "../molecules/FormItem.jsx";
import Button from "../atoms/Button.jsx";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();


  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mail,
        password,
      }),
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      localStorage.setItem("token", data.token);
      Navigate("/dashboard");
    } else {
      alert("Erreur lors de la connexion");
    }
  }

  return (
    <>
      <Title content='Page de connexion' />
      <div className="bg-bg p-3.5 w-1/2 border border-border rounded-lg flex flex-col gap-5 justify-center items-center">
        <form className="w-1/2 flex flex-col gap-5" onSubmit={handleSubmit}>
          <FormItem
            name="mail"
            type="mail"
            placeholder="Ex : dupont.martin@gmail.com"
            value="Email"
            mandatory={true}
            onChange={(e) => setMail(e.target.value)}
          />
          <FormItem
            name="password"
            type="password"
            placeholder="12+ majuscule, minuscule et chiffre"
            value="Mot de passe"
            mandatory={true}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button content="Se connecter" bg="mainblue" width="5/6" />
        </form>
      </div>
    </>
  );
}
