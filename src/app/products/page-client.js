/* eslint-disable @next/next/no-async-client-component */
"use client"
// CSR
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const allProducts = await res.json();
  console.log(allProducts);
  return (
    <>
      {allProducts.map((prod) => (
        <Card style={{ width: "18rem" }} key={prod.id}>
          <Card.Img variant="top" src={prod.image} />
          <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
            <Card.Text>{prod.price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
}
