async function getPage() {
    let url = "http://localhost:3000/";
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });
    const page = await response.json();
    return page.page
}

async function redirect() {
    let page = await getPage();
    location.replace(`../../views/pages/${page}.html`);
}

redirect();