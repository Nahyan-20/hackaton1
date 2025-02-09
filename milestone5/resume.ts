const displayElement = document.getElementById("resume-display");
const linkContainer = document.getElementById("linkContainer");
const downloadButton = document.getElementById('downloadButton') as HTMLButtonElement;

const storedData = localStorage.getItem("resumeData");

declare function html2pdf(): any; // Or install types: npm install @types/html2pdf.js

if (storedData && displayElement && linkContainer && downloadButton) {
    const data = JSON.parse(storedData);

    displayElement.innerHTML = `
        <h2><b> Editable Resume</b></h2>
        <h3>Personal Information</h3>
        <p><b>Username:</b> ${data.username || "Not provided"}</p>
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
        <p>${data.certifications || "Not provided"}</p>

        <h3>Hobbies</h3>
        <p>${data.hobbies || "Not provided"}</p>

        <button id="back-to-form">Go Back & Edit</button>
    `;

    document.getElementById("back-to-form")?.addEventListener("click", () => {
        window.location.href = "index.html";
    });

    // Unique Link Generation
    const username = data.username || data.name;
    if (username) {
        const uniqueLink = `${window.location.origin}/resume.html?user=${encodeURIComponent(username)}`;
        const linkElement = document.createElement('a');
        linkElement.href = uniqueLink;
        linkElement.textContent = uniqueLink;
        linkContainer.innerHTML = ""; // Clear previous link
        linkContainer.appendChild(linkElement);
    }

    // PDF Download (Corrected)
    downloadButton.addEventListener('click', () => {
        setTimeout(() => { // Add a small delay
            const resumeContent = document.getElementById('resume-display');
            if (resumeContent) {
                const opt = {
                    margin: 10,
                    filename: 'resume.pdf',
                    image: { type: 'jpeg', quality: 0.98 }, // Adjust quality as needed
                    html2canvas: { scale: 2 }, // Increase scale for better resolution
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                };
    
                const pdf = html2pdf();
                pdf.from(resumeContent).set(opt).save();
            } else {
                console.error("Resume content element not found!");
            }
        }, 500); // 500 milliseconds delay (adjust as needed)
    });

} else {
    displayElement!.innerHTML = "<p>No resume data found. Please go back and fill out the form.</p>";
    if (linkContainer) {
        linkContainer.innerHTML = ""; // Clear the link container if no data
    }
    if (downloadButton) {
        downloadButton.style.display = "none"; // Hide the download button
    }
}