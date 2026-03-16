const hello = document.getElementById("hello");

async function sayHello() {
    let url = "http://localhost:3000/";
    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });
    const greetings = await response.json();
    console.log(greetings);
    return greetings
}

async function displayGreetings(name) {
    let greetings = await sayHello();
    hello.textContent = `${greetings.message} ${name}`;
}

displayGreetings("Gui YOMU");