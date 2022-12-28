import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './pokeCard'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { pokeUrlData,getUrl } from '../store/pokeSlice'

function Home() {
  const dispatch = useDispatch()
  const [pokeData, setPokeData] = useState([])
  //reduxToolkit tarafından prevUrl ve nextUrl çekiyoruz
  const { url,prevUrl, nextUrl } = useSelector((state) => state.poke)

  const pokeDatas = async () => {
    const res = await axios.get(url)
    // dispatch ile urlden dönen değeri reduxtoolkit tarafında pokeUrlData statesine yolluyoruz
    dispatch(pokeUrlData(res))
    getPokemon(res.data.results)
  }
  const getPokemon = async (results) => {
    results.map(async (item) => {
      const result = await axios.get(item.url)
      //prevState ile önceki state değerini aliyoruz istediğimiz değeri verebiliriz oraya a da diyebilirdik sonrasında prevState'in tamamını ...prevState şeklinde alıp result.datayı ekliyoruz sonrasında prevStateyi sortluyoruz idye göre ve prevStateyi PokeDataya setliyoruz
      setPokeData((prevState) => {
        prevState = [...prevState, result.data]
        prevState.sort((a, b) => (a.id > b.id ? 1 : -1))
        return prevState
      })
    })
  }
  
  //url değiştikce yeniden verileri çekiyoruz
  useEffect(() => {
    setPokeData([])
    pokeDatas()
  }, [url])
  return (
    <>
      <div className="text-center">Click card for Pokemon details...</div>
      <Card pokeData={pokeData} />

      <div className="text-center mt-2">
        {prevUrl && (
          <button
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-24"
            onClick={() => {
              setPokeData([])
              dispatch(getUrl(prevUrl))
            }}
          >
            Previous
          </button>
        )}

        {nextUrl && (
          <button
            className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900 w-24"
            onClick={() => {
              setPokeData([])
              dispatch(getUrl(nextUrl))
            }}
          >
            Next
          </button>
        )}
      </div>
    </>
  )
}

export default Home
