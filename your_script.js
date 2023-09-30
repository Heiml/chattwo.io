function sendMessage() {
    var userInput = document.getElementById('user-input');
    var chatMessages = document.getElementById('chat-messages');

    // Display user message
    chatMessages.innerHTML += `<div><img src="gpt.png" class="avatar rounded-circle" alt="User Avatar"> <strong>You:</strong> ${userInput.value}</div>`;

    // Simulate ChatGPT's response (in a real implementation, this would be fetched from a backend)
    var response = "I'm just a simples example, not the real ChatGPT!";

    // Display ChatGPT's response
    chatMessages.innerHTML += `<div> <div class="message chatgpt-message bg-light-gray"><img src="user.png" class="avatar rounded-circle" alt="ChatGPT Avatar"><strong>ChatGPT:</strong> ${response}</div></div>`;
    // chatMessages.innerHTML += `<div> <img src="user.png" class="avatar rounded-circle" alt="ChatGPT Avatar"><strong>ChatGPT:</strong> ${response}</div>`;

    // Clear user input
    userInput.value = '';
}