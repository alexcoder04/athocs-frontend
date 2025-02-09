import { DEPLOYMENT_IP, DEPLOYMENT_PORT } from "./index.js";

export async function loadStations() {
  try {
    const response = await fetch(
      `http://${DEPLOYMENT_IP}:${DEPLOYMENT_PORT}/api/stations`
    );
    if (!response.ok) {
      console.error(response.statusText);
      return null;
    }

    const text = await response.text();
    return parseCSV(text);
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function parseCSV(csvText) {
  const lines = csvText
    .split("\n")
    .map((line) => line.trim())
    .filter((line) => line.length > 0);
  if (lines.length < 2) return [];

  const headers = lines[0].split(",").map((header) => header.trim());
  return await lines.slice(1).map((line) => {
    const values = line.split(",").map((value) => value.trim());
    let obj = {};
    headers.forEach((header, index) => {
      obj[header] = values[index] || "";
    });
    return obj;
  });
}
