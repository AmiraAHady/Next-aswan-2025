
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const allProducts = await res.json();
  
  return (
    <>
      <h1>Here is our Products</h1>
      <h2>New Income</h2>
      <Suspense fallback={<h1>Loading Data........</h1>}>
        {allProducts.map((prod) => (
          <Link
            key={prod.id}
            href={`/products/${prod.id}`}
            style={{ textDecoration: "none" }}
          >
            <div className="col">
              <div className="card">
                <Image
                  src={prod.image}
                  width={400}
                  height={400}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{prod.title}</h5>
                  <p className="card-text">{prod.price}$</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Suspense>
    </>
  );
}
