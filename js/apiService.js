export const baseApiUrl = "https://api.noroff.dev/api/v1";
export const endpointApiUrl = "/square-eyes";
const baseUrl = `https://api.noroff.dev/api/v1`;
export const url = `${baseUrl}/square-eyes/`;

export async function getData(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();

    if (json) {
      return json;
    }
  } catch (error) {
    console.log("Ooops! An error occurred...", error);
    throw new Error(error);
  }
}

