const researchAssistantsList = document.getElementById('research-assistants-list');

const researchAssistantsData = [
    { name: 'John Doe', role: 'Security Analyst' },
    { name: 'Jane Smith', role: 'Cybersecurity Researcher' },
    // Add more research assistants as needed
];

researchAssistantsData.forEach(assistant => {
    const assistantDiv = document.createElement('div');
    assistantDiv.innerHTML = `<p><strong>${assistant.name}</strong> - ${assistant.role}</p>`;
    researchAssistantsList.appendChild(assistantDiv);
});