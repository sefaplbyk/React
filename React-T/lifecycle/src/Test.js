import {useEffect, useState} from "react"

function Test () {

    const [postID,setpostID] = useState(1)
    const [post,setPost] =useState(false)
    useEffect(()=>{
        console.log("Component ilk yüklendiğinde çalışır")
        
        //setInterval kullandığımız zaman component silinse  bile arkada çalışmaya devam eder bunu engellemek için fonksiyonu bir değişkene atadık ve clearInterval komutuyla component silindiği anda temizleme işlemi yaptık
        let interval =setInterval(()=>console.log('interval Çalıştı!'),1000)
        return () => {
            console.log('Component destroyed')
            clearInterval(interval)
        }
    },[])

    useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${postID}`)
    .then(res => res.json())
    .then(data => setPost(data))


    console.log('Bağımlılık arrayi(Post) değiştiği için component render edildi')
    },[postID])


    useEffect(()=>{
        console.log('component herhangi bir sebepten dolayı render oldu')
        
    })
    

    return(
        <div>
            <h3>
                {post && JSON.stringify(post)}
            </h3>
            <button onClick={() => setpostID(postID => postID+1)}>
                Sonraki konu
            </button>
            <hr></hr>
            Test Componenti
        </div>
    )
}

export default Test