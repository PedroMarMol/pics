import SearchBar from "./compontents/SearchBar"
import searchImages from './api'

export default function App() {
  const handleSubmit = async (term) => {
    let result = await searchImages(term)
    console.log(result)
  }

  return ( 
    <div>
      <SearchBar onSubmit={handleSubmit}/>
    </div>
  )
}