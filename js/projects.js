async function loadProjects() {
  const container = document.getElementById("project-list");

  const projectFiles = ["project1.json", "project2.json"];

  for (let file of projectFiles) {
    const data = await fetch("projects/" + file).then(r => r.json());

    container.innerHTML += `
      <div class="project-card">
        <h2>${data.name}</h2>
        <p>${data.summary}</p>
        <a href="viewer.html?project=${file}">View Project</a>
      </div>
    `;
  }
}

loadProjects();
