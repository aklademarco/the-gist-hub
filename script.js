//search form
const searchForm = document.getElementById("search-form");

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = document.getElementById("search-input").value.toLowerCase();
  const newsItem = document.querySelectorAll(".news-item h3");
  newsItem.forEach((newsItem) => {
    if (newsItem.innerText.toLowerCase().includes(query)) {
      newsItem.parentElement.style.display = "block";
    } else {
      newsItem.parentElement.style.display = "none";
    }
  });
});

// Subscribe Form
const subscribeForm = document.getElementById("subscribe-form");
subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  // Handle form submission, e.g., send data to a server
  console.log("Form submitted!");
});

// Comment Form
const commentForm = document.getElementById("comment-form");
commentForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  // Handle form submission, e.g., send data to a server
  console.log("Comment submitted!");
});

// Read More Button (Example for one news item)
const readMoreBtn = document.querySelector(".news-item .read-more");
readMoreBtn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default link behavior
  // Toggle the visibility of more content or redirect to a detailed article page.
  console.log("Read More clicked!");
});

// Dark Mode Toggle
const toggleBtn = document.getElementById("dark-mode-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.querySelectorAll("header, section, footer, a").forEach((element) => {
    element.classList.toggle("dark-mode");
  });

  // Update button text
  toggleBtn.textContent = document.body.classList.contains("dark-mode")
    ? "Light Mode"
    : "Dark Mode";
});

// Request permission for browser notifications
function requestNotificationPermission() {
  if ("Notification" in window) {
    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        new Notification(
          "You will now receive live updates from The Gist Hub!"
        );
      }
    });
  }
}

// Trigger notification
function showNotification(title, body) {
  if ("Notification" in window && Notification.permission === "granted") {
    new Notification(title, {
      body: body,
      icon: "path/to/icon.png", // Optional icon for the notification
    });
  }
}

// Example usage when a news update occurs
setTimeout(() => {
  showNotification(
    "News Update!",
    "Check out the latest stories on The Gist Hub."
  );
}, 10000); // Trigger after 10 seconds (for demo purposes)

// form validation
subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = subscribeForm.querySelector("input[type='email']").value;

  if (validateEmail(email)) {
    alert("Thank you for subscribing!");
    subscribeForm.reset();
  } else {
    alert("Please enter a valid email.");
  }
});

// Helper function to validate email
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// Subscribe Form with Feedback
subscribeForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent page reload
  console.log("Form submitted!");

  // Show confirmation message
  alert("Thank you for subscribing!");

  // Optionally reset the form
  subscribeForm.reset();
});
