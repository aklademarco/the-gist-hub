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
