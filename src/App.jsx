import Fares from "./components/Fares"

const App = () => {
  const fares = [
    [0,15,60,0,1],
    [1,7,30,0,2],
    [2,4,15,0,3],
    [3,2,60,0,3]
  ]

  return(
    <div className="container mx-auto mt-20">
      <Fares fares={fares}  />
    </div>
  )
}

export default App;