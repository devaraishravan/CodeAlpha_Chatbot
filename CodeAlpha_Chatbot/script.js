function sendMessage() {

    let input = document.getElementById("userInput").value;
    let chatbox = document.getElementById("chatbox");

    if (input.trim() === "") {
        return;
    }

    chatbox.innerHTML +=
    '<div class="user-message"><span>' + input + '</span></div>';

    let response = "";

    input = input.toLowerCase();

    if (input.includes("hello")) {
        response = "Hello! How can I help you?";
    }
    else if (input.includes("hi")) {
        response = "Hi! Nice to meet you.";
    }
    else if (input.includes("services")) {
        response = "We provide web development and AI solutions.";
    }
    else if (input.includes("price")) {
        response = "Please contact our sales team for pricing details.";
    }
    else if (input.includes("contact")) {
        response = "You can contact us at skilldevelop@gmail.com.";
    }
    else if (input.includes("email")) {
        response = "Our email is skilldevelop@gmail.com.";
    }
    else if (input.includes("phone")) {
        response = "You can call us at +91 9876543210.";
    }
    else if (input.includes("internship")) {
        response = "Our internship program provides practical industry experience.";
    }
    else if (input.includes("location")) {
        response = "We provide services online worldwide.";
    }
    else if (input.includes("about")) {
        response = "This is an AI-powered chatbot developed using HTML, CSS, and JavaScript.";
    }
    else if (input.includes("help")) {
        response = "I can help you with services, pricing, contact details, and more.";
    }
    else if (input.includes("hours")) {
        response = "Our working hours are Monday to Friday, 9 AM to 6 PM.";
    }
    else if (input.includes("website")) {
        response = "Our official website is www.example.com.";
    }
    else if (input.includes("thank")) {
        response = "You're welcome!";
    }
    else if (input.includes("bye")) {
        response = "Goodbye! Have a great day.";
    }
    else {
        response = "Sorry, I don't understand that question.";
    }

    chatbox.innerHTML +=
    '<div class="bot-message"><span>' + response + '</span></div>';

    chatbox.scrollTop = chatbox.scrollHeight;

    document.getElementById("userInput").value = "";
}

document.getElementById("userInput")
.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        sendMessage();
    }

});