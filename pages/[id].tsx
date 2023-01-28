import React from "react";
import {
  movieUrl,
  creditsUrl,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
} from "@/config";
import { basicFetch } from "@/moviedb-api/fetchFunctions";
import { GetStaticProps, GetStaticPaths, NextPage } from "next";

import type { Movie, Credits, Crew, Cast } from "@/moviedb-api/types";

// Import components
import Header from "@/components/Header";
import Breadcrumb from "@/components/Breadcrumb";
import Grid from "@/components/Grid";
import Card from "@/components/Card";
import MovieInfo from "@/components/MovieInfo";

type Props = {
  movie: Movie;
  directors: Crew[];
  cast: Cast[];
};

const Movie = ({ movie, directors, cast }: Props) => {
  return (
    <main>
      <Header />
      <Breadcrumb title={movie?.original_title} />
      <MovieInfo
        rating={movie?.vote_average}
        thumbUrl={
          movie.poster_path
            ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
            : "/no_image.jpg"
        }
        year={movie.release_date.split("-")[0]}
        backgroundImgUrl={
          movie.backdrop_path
            ? IMAGE_BASE_URL + BACKDROP_SIZE + movie.backdrop_path
            : "/no_image.jpg"
        }
        title={movie.original_title}
        summary={movie.overview}
        directors={directors}
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid className="p-4 max-w-7xl m-auto" title="Movie Cast :">
        {cast?.map((crewMember) => (
          <Card
            key={crewMember.credit_id}
            imgUrl={
              crewMember.profile_path
                ? IMAGE_BASE_URL + POSTER_SIZE + crewMember.profile_path
                : "/no_image.jpg"
            }
            title={crewMember.name}
            subtitle={crewMember.character}
          />
        ))}
      </Grid>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  const movieEndpoint: string = movieUrl(id);
  const creditsEndpoint: string = creditsUrl(id);

  const movie = await basicFetch<Movie>(movieEndpoint);
  const credits = await basicFetch<Credits>(creditsEndpoint);

  //   # Get Director
  const directors = credits.crew.filter((member) => member.job === "Director");

  return {
    props: {
      movie,
      directors,
      cast: credits.cast,
    },
    revalidate: 60 * 60 * 24, // Rebuilds page every 24 hours
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export default Movie;
