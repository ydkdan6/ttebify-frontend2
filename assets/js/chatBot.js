// Sample chatbot responses
const responses = {
    cashPayment: "Yes, we accept cash payments for room bookings.",
    stayDuration: "You can stay at our hostel for a maximum of 14 days per booking.",
    confirmationIssue: "I'm sorry to hear that. Please check your spam folder for the confirmation email. If you still haven't received it, you can contact our support team at support@yourhotel.com.",
    discountCodes: "Yes, we have discount codes available from time to time. You can check our website or subscribe to our newsletter to receive updates on discounts and promotions.",
    cancelBooking: "To cancel your booking, please log in to your account on our website and go to the 'My Bookings' section. From there, you can follow the cancellation process.",
    // Add more chatbot responses here:
    // questionKey: "Response to the question goes here.",
  };
  
  document.addEventListener('DOMContentLoaded', function () {
    const chatbotContainer = document.getElementById('chatbot-container');
    const openChatbotButton = document.getElementById('openChatbot');
    const closeButton = document.getElementById('submit-button');
    const userMessageInput = document.getElementById('user-message');
    const chatbotMessages = document.getElementById('chatbot-messages');
    const userInput = document.getElementById('user-input');
  
    // Function to open the chatbot pop-up
    function openChatbot() {
      chatbotContainer.style.display = 'block';
    }
  
    // Function to close the chatbot pop-up
    function closeChatbot() {
      chatbotContainer.style.display = 'none';
    }
  
    // Function to display a user message in the chat
    function displayUserMessage(message) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'user-message';
      messageDiv.textContent = message;
      chatbotMessages.appendChild(messageDiv);
    }
  
    // Function to display a chatbot response in the chat
    function displayChatbotResponse(response) {
      const responseDiv = document.createElement('div');
      responseDiv.className = 'chatbot-response';
      responseDiv.textContent = response;
      chatbotMessages.appendChild(responseDiv);
    }
  
    // Event listener for opening the chatbot
    openChatbotButton.addEventListener('click', openChatbot);
  
    // Event listener for closing the chatbot
    closeButton.addEventListener('click', closeChatbot);
  
    // Event listener for submitting a user question
    closeButton.addEventListener('click', function () {
      const userQuestion = userMessageInput.value;
      displayUserMessage(userQuestion);
  
      // Call the answerQuestion function to get the chatbot's response
      const chatbotResponse = answerQuestion(userQuestion);
      displayChatbotResponse(chatbotResponse);
  
      // Clear the user input field
      userMessageInput.value = '';
    });
  
    // Function to answer user questions
    function answerQuestion(question) {
      const lowercaseQuestion = question.toLowerCase();
  
      if (lowercaseQuestion.includes("cash") && lowercaseQuestion.includes("payment")) {
        return responses.cashPayment;
      } else if (lowercaseQuestion.includes("stay") && lowercaseQuestion.includes("duration")) {
        return responses.stayDuration;
      } else if (lowercaseQuestion.includes("confirmation") && lowercaseQuestion.includes("not received")) {
        return responses.confirmationIssue;
      } else if (lowercaseQuestion.includes("discount codes") || lowercaseQuestion.includes("discounts")) {
        return responses.discountCodes;
      } else if (lowercaseQuestion.includes("cancel") && lowercaseQuestion.includes("booking")) {
        return responses.cancelBooking;
      } else {
        return "I'm sorry, I don't have information on that. Please contact our customer support for further assistance.";
      }
    }
  });
  