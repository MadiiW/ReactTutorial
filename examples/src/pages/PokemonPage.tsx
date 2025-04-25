import { useEffect, useState } from "react";

interface PokemonSprites {
  front_default: string;
}

interface PokemonData {
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
}

export default function PokemonPage() {
  const [pokemon, setPokemon] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/2")
      .then((res) => res.json())
      .then((data: PokemonData) => {
        setPokemon(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Fehler beim Laden des Pokémon:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="text-center mt-8 text-gray-500">Lade Pokémon...</p>;
  }

  if (!pokemon) {
    return <p className="text-center mt-8 text-red-500">Fehler beim Laden</p>;
  }

  return (
    <div className="mx-auto p-6 bg-white rounded-xl shadow-md text-center">
      <h2 className="text-2xl font-bold uppercase mb-4">{pokemon.name}</h2>
      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
        className="mx-8 w-40 h-40"
      />
      <p className="mt-2 text-gray-700">
        Höhe: {pokemon.height / 10} m<br />
        Gewicht: {pokemon.weight / 10} kg
      </p>
    </div>
  );
}
