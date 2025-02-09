document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resume-form");
    if (!form) {
        console.error("Form not found!");
        return;
    }
    // Load saved data (including username)
    var savedData = localStorage.getItem("resumeData");
    if (savedData) {
        var data = JSON.parse(savedData);
        document.getElementById("username").value = data.username || ""; // Added username
        document.getElementById("name").value = data.name || "";
        document.getElementById("email").value = data.email || "";
        document.getElementById("phone").value = data.phone || "";
        document.getElementById("education").value = data.education || "";
        document.getElementById("experience").value = data.experience || "";
        document.getElementById("skills").value = data.skills || "";
        document.getElementById("certifications").value = data.certifications || "";
        document.getElementById("hobbies").value = data.hobbies || "";
    }
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var resumeData = {
            username: document.getElementById("username").value, // Get username
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            education: document.getElementById("education").value,
            experience: document.getElementById("experience").value,
            skills: document.getElementById("skills").value,
            certifications: document.getElementById("certifications").value,
            hobbies: document.getElementById("hobbies").value,
        };
        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        window.location.href = "resume.html";
    });
});
