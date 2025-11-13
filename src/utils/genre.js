console.log("genre js is linked");

import { genres } from "../../data.js";

export function getGenreNames(ids) {
  return ids
    .map((id) => {
      const genre = genres.find((g) => g.id === id);
      return genre ? genre.title : "Unknown";
    })
    .join(", ");
}
