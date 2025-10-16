const BASE_URL = "http://localhost:8000"; // Change if backend is deployed

export async function extractSymptoms(text) {
  const res = await fetch(`${BASE_URL}/extract`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  if (!res.ok) throw new Error("Failed to extract symptoms");
  return res.json();
}

export async function predictCondition(age, gender, symptoms) {
  const res = await fetch(`${BASE_URL}/predict`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ age, gender, symptoms }),
  });
  if (!res.ok) throw new Error("Failed to predict condition");
  return res.json();
}
