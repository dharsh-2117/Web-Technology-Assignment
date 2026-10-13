document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        // Get values
        const name = document.getElementById("name").value.trim();
        const roll = document.getElementById("roll").value.trim();
        const email = document.getElementById("email").value.trim();
        const course = document.getElementById("course").value;
        const password = document.getElementById("password").value;
        const file = document.getElementById("document").files[0];

        // Error elements
        const nameError = document.getElementById("nameError");
        const rollError = document.getElementById("rollError");
        const emailError = document.getElementById("emailError");
        const courseError = document.getElementById("courseError");
        const passwordError = document.getElementById("passwordError");
        const fileError = document.getElementById("fileError");
        const successMessage = document.getElementById("successMessage");

        // Clear previous errors
        nameError.textContent = "";
        rollError.textContent = "";
        emailError.textContent = "";
        courseError.textContent = "";
        passwordError.textContent = "";
        fileError.textContent = "";
        successMessage.textContent = "";

        let valid = true;

        // Name validation
        if (name === "") {
            nameError.textContent = "Name is required";
            valid = false;
        } else if (name.length < 3) {
            nameError.textContent = "Name must contain at least 3 characters";
            valid = false;
        }

        // Roll number validation
        if (roll === "") {
            rollError.textContent = "Roll number is required";
            valid = false;
        }

        // Email validation
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            emailError.textContent = "Email is required";
            valid = false;
        } else if (!emailPattern.test(email)) {
            emailError.textContent = "Enter a valid email address";
            valid = false;
        }

        // Course validation
        if (course === "") {
            courseError.textContent = "Please select a course";
            valid = false;
        }

        // Password validation
        if (password === "") {
            passwordError.textContent = "Password is required";
            valid = false;
        } else if (password.length < 8) {
            passwordError.textContent =
                "Password must be at least 8 characters";
            valid = false;
        } else if (!/[A-Z]/.test(password)) {
            passwordError.textContent =
                "Password must contain an uppercase letter";
            valid = false;
        } else if (!/[0-9]/.test(password)) {
            passwordError.textContent =
                "Password must contain a number";
            valid = false;
        }

        // File validation
        if (!file) {
            fileError.textContent = "Please upload a document";
            valid = false;
        }

        // Final result
        if (valid) {
            successMessage.textContent =
                "Registration successful!";

            document.getElementById("registrationForm").reset();
        }
    });