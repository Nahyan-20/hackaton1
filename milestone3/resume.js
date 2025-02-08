// Select the resume display container
var displayElement = document.getElementById("resume-display");
// Retrieve stored resume data from localStorage
var storedData = localStorage.getItem("resumeData");
if (storedData && displayElement) {
    var data = JSON.parse(storedData);
    displayElement.innerHTML = "\n        <h2><b>Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Name:</b> ".concat(data.name, "</p>\n        <p><b>Email:</b> ").concat(data.email, "</p>\n        <p><b>Phone:</b> ").concat(data.phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(data.education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(data.experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n\n        <h3>Certifications</h3>\n        <p>").concat(data.certifications, "</p>\n\n        <h3>Hobbies</h3>\n        <p>").concat(data.hobbies, "</p>\n    ");
}
else {
    displayElement.innerHTML = "<p>No resume data found. Please go back and fill out the form.</p>";
}
