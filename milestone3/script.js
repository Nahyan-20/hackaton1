var form = document.getElementById("resume-form");
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent page reload
    // Collect input values
    var resumeData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        education: document.getElementById('education').value,
        experience: document.getElementById('experience').value,
        skills: document.getElementById('skills').value
    };
    // Store data in localStorage
    localStorage.setItem("resumeData", JSON.stringify(resumeData));
    // Redirect to the resume page
    window.location.href = "resume.html";
});
