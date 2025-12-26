import Card from '../../components/PonyCard'
import { useEffect, useState } from 'react'
export default function UseEffectPage() {
    const[ponyList, setPonyList] = useState([])
    //Grab some data from pony api
    //http://ponyapi.net/v1/character/all?limit=10
    //Limit to 10?
    //add load more?

    //async function to fetch data
    async function fetchPonies() {
        const url = "http://ponyapi.net/v1/character/all?limit=10"
        try {
            const response = await fetch(url)

            if(!response.ok){
                throw new Error
            }

            const data = await response.json()
            setPonyList(data.data)

        } catch(error) {
            console.log(error)
        }
    }

    //Run once on mount
    //Must be syncronous code in case of cleanup
    //Not promised based
    useEffect(() => {
        fetchPonies()
    },[])

  return (
    <Card ponyList={ponyList} />
  )
}
