import RecipeList from "@/_components/recipesList";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";

export default async function Recipes() {

  return (
    <div className="container">
      <h2>here is List REcipes </h2>
      <p>new Income</p>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Suspense
          fallback={
            <>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </>
          }
        >
          <RecipeList />
        </Suspense>
      </div>
    </div>
  );
}
