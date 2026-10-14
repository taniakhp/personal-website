/* Contact form interaction */

function showMessage(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;

    let response = document.getElementById("formResponse");

    response.textContent =
        "Thank you, " + name + "! This is a demo form. Your message has not been sent.";

    document.getElementById("contactForm").reset();
}

document.getElementById("contactForm")
    .addEventListener("submit", showMessage);

}