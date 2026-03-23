const loginForm = document.getElementById("login");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const loginData = new FormData(e.target);
  await login(
    loginData.get("mail"),
    loginData.get("password"),
  );
});

async function login(
  mail,
  password,
) {
  const response = await fetch("http://localhost:3000/users/login", {
    method: "POST",
    body: JSON.stringify({
      mail,
      password,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const result = await response.json();
  if (result.success) {
    localStorage.setItem("access_token", result.token)
    location.replace(`../../views/pages/dashboard.html`);
    return;
  } else if (result.error) {
    return result.error;
  }
}