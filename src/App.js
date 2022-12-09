import SearchBar from "./compontents/SearchBar"
import ImageList from "./compontents/ImageList"
import searchImages from './api'
import { useState } from "react"

export default function App() {
  let [images, setImages] = useState([])

  const handleSubmit = async (term) => {
    let result = await searchImages(term)
    setImages(result)
  }

  return ( 
    <div>
      <SearchBar onSubmit={handleSubmit}/>
      <ImageList images={images} />
    </div>
  )
}