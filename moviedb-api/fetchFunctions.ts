import { Movies } from "./types";

export const basicFetch = async <returnType>(
  endpoint: string
): Promise<returnType> => {
  const response = await fetch(endpoint);

  if (!response.ok) throw new Error("Error with API endpoint!");

  const data = await response.json();

  return data;
};


export const fetchMovies = async (search="",page=1):Promise<Movies> => {
return await basicFetch<Movies>(`/api/movies?search=${search}&page=${page}`)

}