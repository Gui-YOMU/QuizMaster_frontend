const profileLink = document.getElementById("profile");

profileLink.addEventListener("click", (e) => {
  e.preventDefault();
  if (localStorage.getItem("access_token")) {
    getProfile(localStorage.getItem("access_token"));
  } else {
    location.replace(`../../views/index.html`);
  }
});

async function getProfile(token) {
  const response = await fetch("http://localhost:3000/users/profile", {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-type": "application/json",
    },
  });
  const result = await response.json();
  if (result.success) {
    location.replace(`../../views/pages/profile.html`);
    return;
  } else if (result.error) {
    return result.error;
  }
}
