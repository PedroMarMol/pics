export default function SearchBar({ onSubmit }) {
  const handleClick = () => {
    onSubmit('cars'); //hardcoded for now
  }    

  return(
    <div>
      <input />
      <button onClick={handleClick}>Click me!</button>
    </div>
  )
  }