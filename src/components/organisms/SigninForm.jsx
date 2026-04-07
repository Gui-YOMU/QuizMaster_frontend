import Title from "../atoms/Title";
import FormItem from "../molecules/FormItem.jsx";
import Button from "../atoms/Button.jsx";

export default function LoginForm() {
  return (
    <>
      <Title content="Page d'inscription" />
      <div className="bg-bg p-3.5 w-1/2 border border-border rounded-lg flex flex-col gap-5 justify-center items-center">
        <form className="w-1/2 flex flex-col gap-5">
          <FormItem
            name="mail"
            type="mail"
            placeholder="Ex : dupont.martin@gmail.com"
            value="Email"
            mandatory={true}
          />
          <FormItem
            name="password"
            type="password"
            placeholder="12+ majuscule, minuscule et chiffre"
            value="Mot de passe"
            mandatory={true}
          />
          <Button content="Se connecter" bg="mainblue" width="5/6" />
        </form>
      </div>
    </>
  );
}
