import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipeList = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  const allRecipes = await res.json();
  await new Promise((resolve, rej) =>
    setTimeout(() => {
      resolve();
    }, 3000)
  );
  return (
    <>
      {allRecipes.recipes.map((recipe) => (
        <div className="col" key={recipe.id}>
          <div className="card">
            <Image
              src={recipe.image}
              width={400}
              height={400}
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{recipe.name}</h5>
              <p className="card-text">{recipe.rating}$</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecipeList;
