import { useEffect, useState } from "react"
// create your App component here
function App() {
    const [img, setImg] = useState(null)
    function handleImg(imgSrc){
        setImg(imgSrc)
    }

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(json => handleImg(json.message))
    }, [])

    return (
        <div>
            {img ? <img src={img} alt="A Random Dog"/> : <p>Loading...</p>}
        </div>
    )
}

export default App;