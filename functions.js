document.addEventListener('DOMContentLoaded', () => {
    fetch('/api/assignments')
        .then(response => response.json())
        .then(assignments => {
            const assignmentList = document.getElementById('assignment-list');
            assignments.forEach(assignment => {
                const assignmentDiv = document.createElement('div');
                assignmentDiv.className = 'assignment';
                assignmentDiv.innerHTML = `
                    <h2>${assignment.title}</h2>
                    <p>${assignment.description}</p>
                    <p>Due Date: ${new Date(assignment.dueDate).toLocaleDateString()}</p>
                `;
                assignmentList.appendChild(assignmentDiv);
            });
        });
});
