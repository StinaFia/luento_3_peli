import { useState } from "react"

// TEHTÄVÄ 2: Lasketaan käyttäjän räjäyttämiä palloja & RESET nappi pelin nollaamista varten
// Valitsin nämä ominaisuudet jotta voidaan seurata räjäytettyjen pallojen määrää 
// & käyttäjä voi nollata pelin aloittaakseen alusta

// Luodaan GameState funktio jolla voidaan seurata pelin tilaa
export function GameState() {

    // Alustetaan useState seuraamaan räjähtäneitä palloja
    const [explodedBalls, setExplodedBalls] = useState(0)
        
    // Tapahtumankäsittelijä laskemaan räjähtäneitä palloja
    const handleExplode = () => {
    setExplodedBalls(explodedBalls + 1)
    }

    // Pelin nollaus
    const resetGame = () => {
        setExplodedBalls(0)
    }
    
    return { explodedBalls, handleExplode, resetGame };
}
