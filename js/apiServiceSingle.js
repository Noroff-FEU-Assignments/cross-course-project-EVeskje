import { url } from "./apiService.js";
import { id } from "./const.js";

const ProdUrl = url + id;

export async function getMovie() {
  try {
    const answer = await fetch(ProdUrl);
    const result = await answer.json();
    return result;
  } catch (error) {
    console.log("Oops! An error occurred...", error);
    throw new Error(error);
  }
}

getMovie();


