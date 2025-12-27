import BeerCard from '../../components/BeerCard'
import { useEffect, useState } from 'react'

export default function UseEffectPage() {
    const[beerList, setBeerList] = useState([])
    

    //async function to fetch data
    async function fetchBeer() {
        const url = "https://punkapi-alxiw.amvera.io/v3/beers?page=1&per_page=10"
        try {
            const response = await fetch(url)

            if(!response.ok){
                throw new Error
            }

            const data = await response.json()
            console.log(data)
            setBeerList(data)

        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchBeer()
    },[])

  return (
    <BeerCard beerList={beerList}  />
  )
}
