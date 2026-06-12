function toggleChat(){

    const chat =
        document.getElementById("chatWindow");

    if(chat.style.display === "block"){
        chat.style.display = "none";
    }else{
        chat.style.display = "block";
    }

}function sendMessage(){

    const input =
        document.getElementById("userInput");

    const messages =
        document.getElementById("chatMessages");

    const userText =
        input.value.toLowerCase();

    messages.innerHTML +=
        `<p>🧑 ${input.value}</p>`;

    let reply =
        "I can help with websites, AI employees and automation.";

    if(userText.includes("website")){
        reply =
        "We build modern business websites.";
    }

    if(userText.includes("price")){
        reply =
        "Pricing depends on the project requirements.";
    }

    if(userText.includes("ai")){
        reply =
        "Our AI employees answer customer questions 24/7.";
    }

    messages.innerHTML +=
        `<p>👩 ${reply}</p>`;

    input.value = "";

}
