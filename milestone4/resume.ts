// Select the resume display container
const displayElemente = document.getElementById("resume-display");

// Retrieve stored resume data from localStorage
const storedDatae = localStorage.getItem("resumeData");

if (storedDatae && displayElemente) {
    const data = JSON.parse(storedDatae);

    displayElemente.innerHTML = `
        <h2><b> Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Name:</b> ${data.name}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>

        <h3>Education</h3>
        <p >${data.education}</p>

        <h3>Experience</h3>
        <p >${data.experience}</p>

        <h3>Skills</h3>
        <p >${data.skills}</p>

        <h3>Certifications</h3>
        <p >${data.certifications || "Not provided"}</p>

        <h3>Hobbies</h3>
        <p >${data.hobbies || "Not provided"}</p>

        <button id="back-to-form">Go Back & Edit</button>
    `;

    // Add event listener for "Go Back & Edit" button
    document.getElementById("back-to-form")?.addEventListener("click", () => {
        window.location.href = "index.html"; // Redirects back to the form page
    });
} else {
    displayElemente!.innerHTML = "<p>No resume data found. Please go back and fill out the form.</p>";
}
