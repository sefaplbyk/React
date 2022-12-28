import { Link } from 'react-router-dom'
export default function Page404() {
 
    return (
      <div className='w-[100%] h-[100vh]  flex flex-col justify-center items-center'>
        <h1>Sayfa bulunamadı</h1>
        <Link className="underline" to="/">
          Anasayfaya dön
        </Link>
      </div>
    )
}
