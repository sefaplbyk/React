import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { pokeName } from '../store/pokeSlice'

export default function Card({ pokeData }) {
  const dispatch = useDispatch()

  function handleSubmit(item, e) {
    e.preventDefault()

    dispatch(pokeName(item.name))
  }

  return (
    <div className="lg:w-[100%] grid  md:grid-cols-2 lg:grid-cols-3 justify-self-center  gap-4 mt-5">
      {pokeData.map((item, key) => (
        <div
          className=" grid relative  justify-self-center w-[80%] "
          key={key}
          onClick={(e) => handleSubmit(item, e)}
        >
          <Link
            to={`pokemon/${item.name}`}
            className="flex flex-col justify-around items-center bg-yellow-100 border rounded-lg shadow-md md:flex-row md:max-w-xl  dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 "
          >
            <img
              className="object-cover w-full rounded-t-lg h-96 md:h-auto  w-[150px] h-[150px]     md:rounded-none md:rounded-l-lg"
              src={item.sprites.front_default}
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                <span>
                  {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                </span>
              </h5>
              <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.types.map((a, i) => (
                  <span
                    key={i}
                    className="flex justify-center rounded bg-red-200 mb-1 hover:bg-red-400"
                  >
                    {a.type.name}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}
