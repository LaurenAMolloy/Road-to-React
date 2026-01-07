export default function BeerCard({ beerList }) {
  
  const renderedBeers = beerList.map((beer) => {
    const imgUrl = `https://punkapi-alxiw.amvera.io/v3/images/${beer.image}`

    return <div className="bg-slate-200 p-3 rounded shadow flex flex-col items-center gap-2" key={beer.id}>
      <h1 className="font-extrabold text-1xl">{beer.name}</h1>
      <img width={50} height={100} src={imgUrl}></img>
      <p>{beer.tagline}</p>
    </div>
  })
  //Grid to display cards
  return (
    <div className="grid grid-cols-2 gap-2 mx-4 my-4">
      {renderedBeers}
    </div>
  )
}
