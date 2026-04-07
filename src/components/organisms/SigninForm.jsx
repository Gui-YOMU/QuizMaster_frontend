import Title from "../atoms/Title";
import FormItem from "../molecules/FormItem.jsx";
import Button from "../atoms/Button.jsx";

import { useState } from "react";

export default function SigninForm() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        lastName,
        firstName,
        surname,
        mail,
        password,
        confirmPassword,
      }),
    });

    const data = await response.json();
    console.log(data);
  }

  return (
    <>
      <Title content="Page d'inscription" />
      <div className="bg-bg p-3.5 w-1/2 border border-border rounded-lg flex flex-col gap-5 justify-center items-center">
        <form className="w-3/4 flex flex-col gap-3" onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <FormItem
              name="lastName"
              type="text"
              placeholder="Ex : DUPONT"
              value="Nom"
              mandatory={true}
              onChange={(e) => setLastName(e.target.value)}
            />
            <FormItem
              name="firstName"
              type="text"
              placeholder="Ex : Martin"
              value="Prénom"
              mandatory={true}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <FormItem
            name="surname"
            type="text"
            placeholder="Votre pseudo"
            value="Pseudo"
            mandatory={false}
            onChange={(e) => setSurname(e.target.value)}
          />
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
          <FormItem
            name="confirmPassword"
            type="password"
            placeholder="Entrez à nouveau le mot de passe"
            value="Confirmer le mot de passe"
            mandatory={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button content="S'inscrire" bg="mainblue" width="4/6" />
        </form>
      </div>
    </>
  );
}
