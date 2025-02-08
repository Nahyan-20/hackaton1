const form = document.getElementById("resume-form") as HTMLFormElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // Prevent page reload

    // Collect input values
    const resumeData = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        phone: (document.getElementById('phone') as HTMLInputElement).value,
        education: (document.getElementById('education') as HTMLTextAreaElement).value,
        experience: (document.getElementById('experience') as HTMLTextAreaElement).value,
        skills: (document.getElementById('skills') as HTMLTextAreaElement).value
    };

    // Store data in localStorage
    localStorage.setItem("resumeData", JSON.stringify(resumeData));

    // Redirect to the resume page
    window.location.href = "resume.html";
});
