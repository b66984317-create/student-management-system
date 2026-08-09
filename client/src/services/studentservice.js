const API_BASE_URL = "http://localhost:5000/api/students";

export async function getAllStudents() {
  const response = await fetch(API_BASE_URL);
  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to fetch students");
  }

  return result.data;
}

export async function createStudent(studentData) {
  const response = await fetch(API_BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.message || "Failed to create student");
  }

  return result.data;
}