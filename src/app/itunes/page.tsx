"use client"

import { debounce } from "@/app/utils/debounce";
import { useState } from "react";
import Image from "next/image";

import { getItems, type ITunesItem } from "./api/itunes";
import Container from "./components/Container";
import ItemCard from "./components/ItemCard";
import SearchField from "./components/SearchField";


export default function ITunes() {
  const [searchResults, setSearchResults] = useState<ITunesItem[]>([]);
  const [isSearchEmpty, setIsSearchEmpty] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getContents = async (search?: string) => {
    if (search?.trim()) {
      try {
        setIsLoading(true);
        const results = await getItems(search || "");

        setSearchResults(results)
      } catch (e) {
        console.log(e)
      } finally {
        setIsLoading(false);
        setIsSearchEmpty(false);
      }
    } else {
      setIsSearchEmpty(true);
      setSearchResults([]);
    }
  }

  const handleSearchChange = debounce(getContents);

  return (
    <div
      className="flex flex-col self-center justify-self-center w-full p-20"
      style={isLoading ? { opacity: 0.4 } : { opacity: 1 }}
    >
      {isLoading && <Image
        className="absolute h-[15%] w-[15%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
        src="/itunes.svg"
        alt="ITunes"
      />}
      <SearchField handleSearchChange={handleSearchChange} />
      <Container isEmptyResult={!isLoading && !searchResults.length && !isSearchEmpty} isSearchEmpty={isSearchEmpty}>
        {!!searchResults.length && searchResults.map((item, index) => (
          <ItemCard
            key={index}
            item={item}
          />
        ))}
      </Container>
    </div>
  );
}
