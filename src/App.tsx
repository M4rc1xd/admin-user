import { useState, useEffect } from 'react'
import type {Ital} from './components/italok.ts'
import ItalListazas from './components/kiiras.tsx'

function App() {

  const [italok, setItalok] = useState<Ital[]>([])
  const [oldal, setOldal] = useState<"user" | "moderator" | "admin">("user")
  useEffect (() => {
    async function betolt() {
      try{
        const response = await fetch('italok.json')
        const data = await response.json()
        setItalok(data.italok)
      } catch (error) {
        console.error('Hiba történt az adatok betöltésekor:', error)
      }
    }
    betolt()
  })


  return (
    <>
      <button onClick={(() => {
        setOldal("moderator")
      })}>kovetkezo oldal</button>
      <h1>Italok</h1>
      <h2>{oldal} oldal</h2>
      <ItalListazas oldal={oldal} italok={italok} />
    </>
  )
}

export default App
