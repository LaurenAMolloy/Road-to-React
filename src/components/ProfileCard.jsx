import React from 'react'

export default function ProfileCard(props) {
    const{ name, ingredients, img, alt } = props;

    const splitName = name.split(" ");
    const caps = splitName.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    })

    const capsJoin = caps.join(" ")

    //map over array of ingredients
    const ingredientsList = ingredients.map((ingredient) => {
            return <p key={ingredient} className='bg-slate-200 text-[10px] py-1 px-1 rounded text-center wrap-break-word max-w-full'>{ingredient}</p>
    });

  return (
    <div className="flex flex-col items-center bg-pink-200 py-3 px-3 h-72 w-2/3 sm:w-full rounded shadow">
        <h1 className="font-bold pb-3 text-slate-600">{capsJoin}</h1>
        <img src={img} height={100} width={100} alt={alt}></img>
        <h3 className="text-slate-500 font-bold pt-3">Ingredients</h3>
        <div className='flex items-stretch flex-wrap gap-2 mt-3 justify-start'>{ingredientsList}</div>
    </div>
  )
}


