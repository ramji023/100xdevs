import { useState, createContext, useContext } from "react"

// <------- context api  ---------->
const BulbContext = createContext();  // create the context

function BulbProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);

  return <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
    {children}
  </BulbContext.Provider>
}

function App() {
  // const [bulbOn, setBulbOn] = useState(true)
  return (
    <>
      {/* <BulbContext.Provider value={
        {
          bulbOn: bulbOn,
          setBulbOn: setBulbOn
        }
      }>
        <LightBulb />
      </BulbContext.Provider> */}
      <BulbProvider>
        <LightBulb />
      </BulbProvider>

    </>
  )
}

function LightBulb() {

  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}

function BulbState() {
  const { bulbOn } = useContext(BulbContext)
  return <div>
    {bulbOn ? "Bulb On" : "Bulb Off"}
  </div>
}
function ToggleBulbState() {
  const { setBulbOn } = useContext(BulbContext);
  return <div>
    <button onClick={() => setBulbOn(curr => !curr)}>Toggle Bulb</button>
  </div>
}
export default App