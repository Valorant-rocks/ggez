document.addEventListener('DOMContentLoaded', function() {
    var popup1 = document.getElementById("popup1");
    var popup2 = document.getElementById("popup2");
  
    // Display the first popup
    popup1.style.display = "block";
  
    // Display the second popup after a delay
    setTimeout(function() {
      popup2.style.display = "block";
    }, 1000); // Adjust the delay time as needed (in milliseconds)
  });
  

  document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("send-btn").addEventListener("click", function() {
      sendMessage();
    });
  
    document.getElementById("user-input").addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        sendMessage();
      }
    });
  });

  window.onload = function () {
    displayConnectingMessage();
    setTimeout(() => {
      removeConnectingMessage();
      displayConnectedMessage();
      startChat();
    }, 5000);
  };
  
  function displayConnectingMessage() {
    const initialMessage = "Connecting to live server...";
    displayMessage(initialMessage, false);
  }
  
  function removeConnectingMessage() {
    const connectingMessage = document.querySelector(".bot-message");
    if (connectingMessage) {
      connectingMessage.remove();
    }
  }
  
  function displayConnectedMessage() {
    const connectedMessage = "Connected!";
    displayMessage(connectedMessage, false);
  }
  
  
  function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
      displayMessage("You: " + userInput, true);
      setTimeout(() => { // Introduce a delay of 3 seconds before responding
        respondToUser(userInput);
      }, 3000); // 3000 milliseconds = 3 seconds
      document.getElementById("user-input").value = "";
      // Scroll to the bottom of the chat box after sending a message
      const chatBox = document.getElementById("chat-box");
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  }
  
  function respondToUser(message) {
    let response = "I'm sorry, I didn't understand that.";
    const anonymousText = "Anonymous: ";
  
    if (message.toLowerCase().includes("hello") || message.toLowerCase().includes("hi")) {
      response = "Hello! I am good.";
      displayMessage(anonymousText + response, false);
    } else if (message.toLowerCase().includes("where are you from")) {
      response = "I'm from Kenya, and you?";
      displayMessage(anonymousText + response, false);
    } else {
      displayMessage(anonymousText + response, false);
    }
  }
  
  function displayMessage(message, isUser) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("div");
    messageElement.classList.add(isUser ? "user-message" : "bot-message");
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
  }
  

  function searchBlogs() {
    // Get the search query entered by the user
    const searchQuery = document.getElementById('searchInput').value;
  
    // Simulate fetching blogs based on the search query (mock data)
    // Replace this with actual API calls to fetch real blog content
    const mockBlogs = [
      { title: 'Blog 1', content: 'Content for Blog 1 related to ' + searchQuery },
      { title: 'Blog 2', content: 'Content for Blog 2 related to ' + searchQuery },
      { title: 'Blog 3', content: 'Content for Blog 3 related to ' + searchQuery }
      // Add more mock blogs or fetch data from APIs
    ];
  
    displayResults(mockBlogs);
  }
  
  function displayResults(blogs) {
    const resultsContainer = document.getElementById('resultsContainer');
  
    // Clear previous search results
    resultsContainer.innerHTML = '';
  
    // Display blogs in the results container
    blogs.forEach(blog => {
      const blogDiv = document.createElement('div');
      blogDiv.classList.add('blog');
      blogDiv.innerHTML = `<h3>${blog.title}</h3><p>${blog.content}</p>`;
      resultsContainer.appendChild(blogDiv);
    });
  }
  
  