import { getProductById } from "@/app/_productfetch/products";
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
// import flower from '/flower.jpg'

export async function generateMetadata({ params }) {
  // const { id } = await params
  const product = await getProductById(params.id);
  return {
    title: product.title,
  };
}

export default async function ProductDetails({ params }) {
  let product;
  try {
    product = await getProductById(params.id);
  } catch (error) {
    notFound();
  }

  return (
    <>
      <div>
        ProductDetails
        <h2>{product.title}</h2>
        <Image
          src={product.image}
          width={400}
          height={400}
          alt="productIamge"
        ></Image>
        {/* <img src={product.image} width={400} height={400}/> */}
        {/* <img src='/flower.jpg' width={400} height={400}/> */}
        {/* <Image src='/flower.jpg' width={200} height={200} alt='floweImage'></Image> */}
      </div>
    </>
  );
}
