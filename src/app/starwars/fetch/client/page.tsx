"use client";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarwarsData, StarwarsCharacters } from "@/interfaces";
import { useEffect, useState } from "react";

const baseUrl = process.env.NEXT_PUBLIC_STARWARS_API;

const getStarWars = async () => {
  const res = await fetch(`${baseUrl}/characters`);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}: ${res.statusText}`);
  }
  return res.json();
};

const StarWarFetchClientPage = () => {
  const [data, setData] = useState<StarwarsData | null>(null);

  useEffect(() => {
    getStarWars().then(setData).catch(console.error);
  }, []);

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 m4">
        Star Wars Characters - Fetch Client
      </h1>

      {data?.data.map((character: StarwarsCharacters) => (
        <Card key={character._id} className="m-4">
          <CardHeader>
            <Image
              src={character.image}
              alt={character.name}
              width={200}
              height={200}
            />
          </CardHeader>
          <CardContent>
            <CardTitle>{character.name}</CardTitle>
            <p>{character.description}</p>
          </CardContent>
        </Card>
      ))}
    </>
  );
};

export default StarWarFetchClientPage;
