import type { NextApiRequest, NextApiResponse } from "next";

// API URLs
import { SEARCH_BASE_URL, POPULAR_BASE_URL } from "@/config";
// Basic Fetch
import { basicFetch } from "@/moviedb-api/fetchFunctions";
// Custom Types
import type { Movies } from "@/moviedb-api/types";
import type { Movie } from "@/moviedb-api/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movies>
) {
  // Grab search params
  const { page, search } = req.query;
  // Get endpoint
  const endpoint = search
    ? `${SEARCH_BASE_URL}${search}&page=${page}`
    : `${POPULAR_BASE_URL}&page=${page}`;

  const data = await basicFetch<Movies>(endpoint);

  res.status(200).json(data)
}
