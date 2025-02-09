document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    if (!form) {
        console.error("Form not found! Make sure the ID is correct and the script loads after the HTML.");
        return;
    }
    // Load saved data from localStorage when the page loads
    var savedData = localStorage.getItem("resumeData");
    if (savedData) {
        var data = JSON.parse(savedData);
        document.getElementById("name").value = data.name || "";
        document.getElementById("email").value = data.email || "";
        document.getElementById("phone").value = data.phone || "";
        document.getElementById("education").value = data.education || "";
        document.getElementById("experience").value = data.experience || "";
        document.getElementById("skills").value = data.skills || "";
        document.getElementById("certifications").value = data.certifications || "";
        document.getElementById("hobbies").value = data.hobbies || "";
    }
    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload
        // Collect input values
        var resumeData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            education: document.getElementById("education").value,
            experience: document.getElementById("experience").value,
            skills: document.getElementById("skills").value,
            certifications: document.getElementById("certifications").value,
            hobbies: document.getElementById("hobbies").value
        };
        // Store data in localStorage
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        // Redirect to the resume page
        window.location.href = "resume.html";
    });
});
