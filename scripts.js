document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".newsletter form");
    const emailInput = document.getElementById("email");
    const messageDiv = document.querySelector(".newsletter .message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const email = emailInput.value.trim();

        if (email === "") {
            messageDiv.textContent = "Please enter a valid email address.";
            return;
        }

        messageDiv.textContent = `Thank you! Your email address ${email} has been added to our mailing list!`;

        form.reset();
    });
});
