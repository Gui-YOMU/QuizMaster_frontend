const signin = document.getElementById("signin");

signin.addEventListener("submit", async (e) => {
  e.preventDefault();
  const signinData = new FormData(e.target);
  await createUser(
    signinData.get("lastName"),
    signinData.get("firstName"),
    signinData.get("surname"),
    signinData.get("mail"),
    signinData.get("password"),
    signinData.get("confirmPassword"),
  );
});

async function createUser(
  lastName,
  firstName,
  surname,
  mail,
  password,
  confirmPassword,
) {
  const response = await fetch("http://localhost:3000/users/signin", {
    method: "POST",
    body: JSON.stringify({
      lastName,
      firstName,
      surname,
      mail,
      password,
      confirmPassword,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const result = await response.json();
  if (result.success) {
    location.replace(`../../views/pages/login.html`);
    return;
  } else if (result.error) {
    return result.error;
  }
}