document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    // Basic demo validation (replace with real validation or backend call)
    if (email && password) {
      alert(`Signed up successfully!\nEmail: ${email}`);
      window.location.href = "index.html";
    } else {
      alert("Please enter valid credentials.");
    }
  });
  