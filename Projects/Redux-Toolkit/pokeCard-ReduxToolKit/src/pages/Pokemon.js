import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation,Link } from 'react-router-dom'
import './style.css'

function Pokemon() {
  const [pokeImg, setImgDetails] = useState('')
  const [pokeAbility, setPokeAbility] = useState([])
  const [pokeStats, setPokeStats] = useState([])
  const [pokeTypes, setPokeTypes] = useState([])
  const [checkPath, setCheckPath] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const location = useLocation()
  const locationpokename =
    location.pathname.slice(9)[0].toLowerCase() + location.pathname.slice(10)
  const pnd = useSelector((state) => state.poke.pokeNameData)
 
  const pokeNameData = pnd ? pnd : locationpokename
  const getPoke = async () => {
    const result = await axios.get(
      pokeNameData
        ? `https://pokeapi.co/api/v2/pokemon/${pokeNameData}`
        : `https://pokeapi.co/api/v2${locationpokename}`,
    )
    setImgDetails(result.data.sprites.front_default)
    setPokeAbility(result.data.abilities)
    setPokeStats(result.data.stats)
    setPokeTypes(result.data.types)
    setCheckPath(result.data.name)
    setWeight(result.data.weight)
    setHeight(result.data.height)
  }
  useEffect(() => {
    getPoke()
  }, [])
    
   return (
    <>
      {((pokeNameData === checkPath ))? (
        <div className="flex justify-center">
          <div className="w-[70%] mt-16 h-[50%] grid  md:grid-cols-2 sm:grid-cols-1  bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 fr ">
            <div className="  flex flex-col items-center   pb-10 mt-16">
              <h5 className="mb-3 text-xl font-medium text-gray-900 dark:text-white">
                {pokeNameData
                  ? pokeNameData[0].toUpperCase() + pokeNameData.slice(1)
                  : location.pathname.slice(9)[0].toUpperCase() +
                    location.pathname.slice(10)}
              </h5>

              <img
                className="mb-3 w-28  rounded-full shadow-lg 
    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-200 bg-yellow-100 duration-300"
                src={pokeImg}
                alt={pokeNameData + ' imgages'}
              />

              <div>
                <div className="mt-3">
                  <span>Ability:</span>
                  {pokeAbility.map((item, key) => (
                    <span
                      key={key}
                      className=" sm:w-full bg-yellow-200 rounded mx-1 mt-1 p-1  italic"
                    >
                      {item.ability.name[0].toUpperCase() +
                        item.ability.name.slice(1)}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  <span>Types:</span>
                  {pokeTypes.map((item, key) => (
                    <span
                      key={key}
                      className="bg-yellow-200 rounded mx-1 mt-1 p-1  italic"
                    >
                      {item.type.name[0].toUpperCase() +
                        item.type.name.slice(1)}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center bg-gray-100 rounded my-3 mx-3 flex-col">
              <ul>
                {pokeStats.map((item, key) => (
                  <li
                    className="p-1  rounded mb-2 mt-1  border-gray-400"
                    key={key}
                  >
                    {item.stat.name[0].toUpperCase() + item.stat.name.slice(1)}:{' '}
                    {item.base_stat}
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
                      <div
                        className="bg-yellow-400 h-2.5 rounded-full"
                        style={{ width: `${item.base_stat}%` }}
                      ></div>
                    </div>
                  </li>
                ))}
                <li className="p-1  rounded mb-2 mt-1  border-gray-400">
                  Weight: {weight / 10} kg
                </li>
                <li className="p-1  rounded mb-2 mt-1  border-gray-400">
                  Height: {height * 10} Cm
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : <div className='w-[100%] h-[100vh]  flex flex-col justify-center items-center'>
      <h1>Sayfa bulunamadı</h1> 
      <Link className="underline" to="/">
        Anasayfaya dön
      </Link>
    </div>
      }
    </>
  )
}

export default Pokemon
