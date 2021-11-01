export function getProjects() {
  const response = fetch(`https://chandan-api.herokuapp.com/projects`);

  return response;
}

export function createNewProject(name) {
  const response = fetch("https://chandan-api.herokuapp.com/projects", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  });
  return response;
}

export function fetchStudents(projectId) {
  const response = fetch(
    `https://chandan-api.herokuapp.com/projects/${projectId}/students`
  );
  return response;
}
