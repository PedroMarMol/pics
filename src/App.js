import SearchBar from "./compontents/SearchBar"
import searchImages from './api'

export default function App() {
  const handleSubmit = (term) => {
    searchImages(term)
  }

  return ( 
    <div>
      <SearchBar onSubmit={handleSubmit}/>
    </div>
  )
}