import Fares from "./components/Fares"

const App = () => {
  const fares = [
    [0,15,60,1,1],
    [1,7,30,5,2],
    [2,4,15,1,3],
    [3,2,60,1,3]
  ]

  return(
    <div className="container mx-auto mt-20">
      <Fares fares={fares}  />
    </div>
  )
}

export default App;