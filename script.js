function toggleChat() {
    let chat = document.getElementById("chat-window");
    chat.style.display = chat.style.display === "none" ? "block" : "none";
}

function quickReply(type) {
    let chat = document.getElementById("chat-body");

   
    chat.innerHTML = "";

    let response = "";

    if (type === "book") {
        response = "Go to Home → Book Now → Select service → Choose time.";
    } else if (type === "login") {
        response = "Click Sign In and enter your email and password.";
    } else if (type === "cancel") {
        response = "Go to Booking page and click 'Cancel Existing Booking'.";
    } else if (type === "navigate") {
        response = "Use the top menu: Home | Services | About | Help.";
    }

  botReply(response);
}
function sendMessage() {
    let input = document.getElementById("userInput").value.toLowerCase();
    let chat = document.getElementById("chat-body");

    chat.innerHTML += `<p><b>You:</b> ${input}</p>`;

    let response = "";

    if (input.includes("book")) {
        response = "Click Book Now and choose a slot.";
    } 
    else if (input.includes("login")) {
        response = "Click Sign In and enter your details.";
    } 
    else {
        response = `
         OOPS!I couldn't find an answer to that!<br><br>
        
         What would you like to do?<br><br>
        
        <button onclick="connectAgent()">Chat with Help Desk</button><br><br>
        <button onclick="contactSupport()">Contact Support</button>
        `;
    }

   botReply(response);

    document.getElementById("userInput").value = "";
}
function connectAgent() {
    let chat = document.getElementById("chat-body");

    chat.innerHTML += `
    <p class="bot"> Connecting you to an agent...</p>
    `;

    setTimeout(() => {
        chat.innerHTML += `
        <p class="bot"> You are now connected to a live agent. How can we assist you?</p>
        `;
    }, 2000);
}
function contactSupport() {
    let chat = document.getElementById("chat-body");

    chat.innerHTML += `
    <p class="bot">
    Email: support@bookmyslot.com<br>
    Phone: 012 345 6789
    </p>
    `;
}
function botReply(message) {
    let chat = document.getElementById("chat-body");

    let typing = document.createElement("p");
    typing.className = "bot";
    typing.innerHTML = "Typing...";
    chat.appendChild(typing);

    setTimeout(() => {
        typing.innerHTML = message;
    }, 1000);
}