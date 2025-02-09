var _a;
var displayElement = document.getElementById("resume-display");
var linkContainer = document.getElementById("linkContainer");
var downloadButton = document.getElementById('downloadButton');
var storedData = localStorage.getItem("resumeData");
if (storedData && displayElement && linkContainer && downloadButton) {
    var data = JSON.parse(storedData);
    displayElement.innerHTML = "\n        <h2><b> Editable Resume</b></h2>\n        <h3>Personal Information</h3>\n        <p><b>Username:</b> ".concat(data.username || "Not provided", "</p>\n        <p><b>Name:</b> ").concat(data.name, "</p>\n        <p><b>Email:</b> ").concat(data.email, "</p>\n        <p><b>Phone:</b> ").concat(data.phone, "</p>\n\n        <h3>Education</h3>\n        <p>").concat(data.education, "</p>\n\n        <h3>Experience</h3>\n        <p>").concat(data.experience, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n\n        <h3>Certifications</h3>\n        <p>").concat(data.certifications || "Not provided", "</p>\n\n        <h3>Hobbies</h3>\n        <p>").concat(data.hobbies || "Not provided", "</p>\n\n        <button id=\"back-to-form\">Go Back & Edit</button>\n    ");
    (_a = document.getElementById("back-to-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        window.location.href = "index.html";
    });
    // Unique Link Generation
    var username = data.username || data.name;
    if (username) {
        var uniqueLink = "".concat(window.location.origin, "/resume.html?user=").concat(encodeURIComponent(username));
        var linkElement = document.createElement('a');
        linkElement.href = uniqueLink;
        linkElement.textContent = uniqueLink;
        linkContainer.innerHTML = ""; // Clear previous link
        linkContainer.appendChild(linkElement);
    }
    // PDF Download (Corrected)
    downloadButton.addEventListener('click', function () {
        setTimeout(function () {
            var resumeContent = document.getElementById('resume-display');
            if (resumeContent) {
                var opt = {
                    margin: 10,
                    filename: 'resume.pdf',
                    image: { type: 'jpeg', quality: 0.98 }, // Adjust quality as needed
                    html2canvas: { scale: 2 }, // Increase scale for better resolution
                    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
                };
                var pdf = html2pdf();
                pdf.from(resumeContent).set(opt).save();
            }
            else {
                console.error("Resume content element not found!");
            }
        }, 500); // 500 milliseconds delay (adjust as needed)
    });
}
else {
    displayElement.innerHTML = "<p>No resume data found. Please go back and fill out the form.</p>";
    if (linkContainer) {
        linkContainer.innerHTML = ""; // Clear the link container if no data
    }
    if (downloadButton) {
        downloadButton.style.display = "none"; // Hide the download button
    }
}
