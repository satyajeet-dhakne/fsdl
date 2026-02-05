document.getElementById("feedbackForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let rating = document.getElementById("rating").value;

    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    document.getElementById("successMessage").textContent = "";

    // Name validation
    if (name.length < 3) {
        document.getElementById("nameError").textContent = "Name must be at least 3 characters";
        isValid = false;
    }

    // Email validation
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("emailError").textContent = "Enter a valid email address";
        isValid = false;
    }

    // Phone validation
    let phonePattern = /^[0-9]{10}$/;
    if (!phone.match(phonePattern)) {
        document.getElementById("phoneError").textContent = "Phone number must be 10 digits";
        isValid = false;
    }

    // Rating validation
    if (rating === "") {
        document.getElementById("ratingError").textContent = "Please select a rating";
        isValid = false;
    }

    // Success
    if (isValid) {
        document.getElementById("successMessage").textContent = "Form submitted successfully!";
        document.getElementById("feedbackForm").reset();
    }
});