/* eslint-disable @next/next/no-async-client-component */
"use client";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { getAllProducts } from "../_productfetch/products";
import Image from "next/image";
import Loading from "../loading";
// ssr

const metadata = {
  title: "Products Page",
};
export default function Products() {
  const [allProducts, setAllProducts] = useState([]);
  async function fetchData() {
    let data = await getAllProducts();
    setAllProducts(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <h1>Here is our Products</h1>
      <h2>New Income</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Suspense fallback={<p>Loading feed...</p>}>
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
      </div>
    </>
  );
}
