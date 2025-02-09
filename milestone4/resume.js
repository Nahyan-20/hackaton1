var _a;
// Select the resume display container
var displayElemente = document.getElementById("resume-display");
// Retrieve stored resume data from localStorage
var storedDatae = localStorage.getItem("resumeData");
if (storedDatae && displayElemente) {
    var data = JSON.parse(storedDatae);
    displayElemente.innerHTML = "\n        <h2><b> Editable Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(data.name, "</p>\n        <p><b>Email:</b> ").concat(data.email, "</p>\n        <p><b>Phone:</b> ").concat(data.phone, "</p>\n\n        <h3>Education</h3>\n        <p >").concat(data.education, "</p>\n\n        <h3>Experience</h3>\n        <p >").concat(data.experience, "</p>\n\n        <h3>Skills</h3>\n        <p >").concat(data.skills, "</p>\n\n        <h3>Certifications</h3>\n        <p >").concat(data.certifications || "Not provided", "</p>\n\n        <h3>Hobbies</h3>\n        <p >").concat(data.hobbies || "Not provided", "</p>\n\n        <button id=\"back-to-form\">Go Back & Edit</button>\n    ");
    // Add event listener for "Go Back & Edit" button
    (_a = document.getElementById("back-to-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        window.location.href = "index.html"; // Redirects back to the form page
    });
}
else {
    displayElemente.innerHTML = "<p>No resume data found. Please go back and fill out the form.</p>";
}
