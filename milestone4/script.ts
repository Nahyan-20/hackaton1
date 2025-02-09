document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement | null;

    if (!form) {
        console.error("Form not found! Make sure the ID is correct and the script loads after the HTML.");
        return;
    }

    // Load saved data from localStorage when the page loads
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
        const data = JSON.parse(savedData);

        (document.getElementById("name") as HTMLInputElement).value = data.name || "";
        (document.getElementById("email") as HTMLInputElement).value = data.email || "";
        (document.getElementById("phone") as HTMLInputElement).value = data.phone || "";
        (document.getElementById("education") as HTMLTextAreaElement).value = data.education || "";
        (document.getElementById("experience") as HTMLTextAreaElement).value = data.experience || "";
        (document.getElementById("skills") as HTMLTextAreaElement).value = data.skills || "";
        (document.getElementById("certifications") as HTMLTextAreaElement).value = data.certifications || "";
        (document.getElementById("hobbies") as HTMLTextAreaElement).value = data.hobbies || "";
    }

    // Handle form submission
    form.addEventListener("submit", (event: Event) => {
        event.preventDefault(); // Prevent page reload

        // Collect input values
        const resumeData = {
            name: (document.getElementById("name") as HTMLInputElement).value,
            email: (document.getElementById("email") as HTMLInputElement).value,
            phone: (document.getElementById("phone") as HTMLInputElement).value,
            education: (document.getElementById("education") as HTMLTextAreaElement).value,
            experience: (document.getElementById("experience") as HTMLTextAreaElement).value,
            skills: (document.getElementById("skills") as HTMLTextAreaElement).value,
            certifications: (document.getElementById("certifications") as HTMLTextAreaElement).value,
            hobbies: (document.getElementById("hobbies") as HTMLTextAreaElement).value
        };

        // Store data in localStorage
        localStorage.setItem("resumeData", JSON.stringify(resumeData));

        // Redirect to the resume page
        window.location.href = "resume.html";
    });
});
