// Select the resume display container
const displayElemente = document.getElementById("resume-display");

// Retrieve stored resume data from localStorage
const storedDatae = localStorage.getItem("resumeData");

if (storedDatae && displayElemente) {
    const data = JSON.parse(storedDatae);

    displayElemente.innerHTML = `
        <h2><b>Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>

        <h3>Education</h3>
        <p>${data.education}</p>

        <h3>Experience</h3>
        <p>${data.experience}</p>

        <h3>Skills</h3>
        <p>${data.skills}</p>

        <h3>Certifications</h3>
        <p>${data.certifications}</p>

        <h3>Hobbies</h3>
        <p>${data.hobbies}</p>
    `;
} else {
    displayElement!.innerHTML = "<p>No resume data found. Please go back and fill out the form.</p>";
}