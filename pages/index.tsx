import Head from "next/head";
import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Card from "@/components/Card";
import React, { useState } from "react";
import { useFetchMovies } from "@/moviedb-api/fetchHooks";
import Search from "@/components/Search";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "@/config";
import Link from "next/link";
// import Image from "next/image";
// import { Inter } from "@next/font/google";
// import styles from "@/styles/Home.module.css";

export default function Home() {
  const [query, setQuery] = useState("");

  const { data, fetchNextPage, isLoading, isFetching, error } =
    useFetchMovies(query);

  const handleScroll = (e: React.UIEvent<HTMLElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      fetchNextPage();
    }
  };

  if (error) {
    return (
      <div className="text-center font-semibold my-4 text-lg">
        Oh no! Something went wrong. Try again later.
      </div>
    );
  }

  return (
    <main
      className="relative h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
      <Header setQuery={setQuery} />
      {!query && data && data.pages ? (
        <Hero
          imgUrl={
            data?.pages[0].results[0]?.backdrop_path
              ? IMAGE_BASE_URL +
                BACKDROP_SIZE +
                data?.pages[0].results[0]?.backdrop_path
              : "/no-image.jpg"
          }
          title={data?.pages[0]?.results[0]?.title}
          text={data?.pages[0]?.results[0]?.overview}
        />
      ) : null}

      <Grid
        className={"p-4 max-w-7xl m-auto"}
        title={
          query
            ? `Search Results: ${
                data?.pages[0]?.total_results
                  ? data?.pages[0]?.total_results
                  : "0"
              } Found`
            : `Popular Movies`
        }
      >
        {data && data?.pages
          ? data?.pages?.map((page) =>
              page.results.map((movie) => (
                <Link href={`/${movie.id}`} key={movie?.id}>
                  <div className="cursor-pointer hover:opacity-80 hover:-translate-y-2 linear duration-300 transition">
                    <Card
                      imgUrl={
                        movie?.poster_path
                          ? IMAGE_BASE_URL + POSTER_SIZE + movie?.poster_path
                          : "/no_image.jpg"
                      }
                      title={movie?.title}
                    />
                  </div>
                </Link>
              ))
            )
          : null}
      </Grid>

      {isLoading || isFetching ? <Spinner /> : null}
    </main>
  );
}
