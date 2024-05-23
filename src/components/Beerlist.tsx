import React, { useEffect, useState } from "react";

type Props = {};

export default function Beerlist({}: Props) {
  const [beers, setBeers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/products").then((res) =>
      res.json().then((data) => {
        setBeers(data);
      })
    );
  }, []);
  return (
    <div>
      <h1>Beers</h1>
      <div>
        {beers.map((beer: any) => (
          <div>{beer.name}</div>
        ))}
      </div>
    </div>
  );
}
