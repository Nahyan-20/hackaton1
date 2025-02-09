document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement | null;

    if (!form) {
        console.error("Form not found!");
        return;
    }

    // Load saved data (including username)
    const savedData = localStorage.getItem("resumeData");
    if (savedData) {
        const data = JSON.parse(savedData);
        (document.getElementById("username") as HTMLInputElement).value = data.username || ""; // Added username
        (document.getElementById("name") as HTMLInputElement).value = data.name || "";
        (document.getElementById("email") as HTMLInputElement).value = data.email || "";
        (document.getElementById("phone") as HTMLInputElement).value = data.phone || "";
        (document.getElementById("education") as HTMLTextAreaElement).value = data.education || "";
        (document.getElementById("experience") as HTMLTextAreaElement).value = data.experience || "";
        (document.getElementById("skills") as HTMLTextAreaElement).value = data.skills || "";
        (document.getElementById("certifications") as HTMLTextAreaElement).value = data.certifications || "";
        (document.getElementById("hobbies") as HTMLTextAreaElement).value = data.hobbies || "";
    }

    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        const resumeData = {
            username: (document.getElementById("username") as HTMLInputElement).value, // Get username
            name: (document.getElementById("name") as HTMLInputElement).value,
            email: (document.getElementById("email") as HTMLInputElement).value,
            phone: (document.getElementById("phone") as HTMLInputElement).value,
            education: (document.getElementById("education") as HTMLTextAreaElement).value,
            experience: (document.getElementById("experience") as HTMLTextAreaElement).value,
            skills: (document.getElementById("skills") as HTMLTextAreaElement).value,
            certifications: (document.getElementById("certifications") as HTMLTextAreaElement).value,
            hobbies: (document.getElementById("hobbies") as HTMLTextAreaElement).value,
        };

        localStorage.setItem("resumeData", JSON.stringify(resumeData));
        window.location.href = "resume.html";
    });
});