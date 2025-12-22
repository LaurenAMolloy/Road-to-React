export default function Card({ ponyList}) {
  console.log(ponyList)
  //id
  //name
  //url
  //kind
  const renderedPonies = ponyList.map((pony) => {
    return <div key={pony.id}>
      <h1>{pony.name}</h1>
    </div>
  })

  return (
    <div>
      {renderedPonies}
    </div>
  )
}
