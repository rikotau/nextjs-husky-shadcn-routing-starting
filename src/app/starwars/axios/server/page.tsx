import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StarwarsData, StarwarsCharacters } from "@/interfaces";
import { api } from "@/configs/axios.config";

const getStarWars = async (): Promise<StarwarsData> => {
  const res = await api.get<StarwarsData>("/characters");
  return res.data;
};

const StarWarAxiosServerPage = async () => {
  const data: StarwarsData = await getStarWars();

  return (
    <>
      <h1 className="text-4xl font-bold text-gray-900 m4">
        Star Wars Characters - Axios Server
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

export default StarWarAxiosServerPage;
