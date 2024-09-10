import React from "react";

type ProductProps = {
  data: {
    id: number;
    name: string;
    price: number;
  };
};

function Product({ data }: ProductProps) {
  return (
    <>
      <h2>{data.name}</h2>
      <p>{data.price}</p>
      <p>{data.id}</p>
    </>
  );
}

export default Product;
