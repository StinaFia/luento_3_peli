import { Link } from "react-router-dom"
import { Ball } from "../components/Ball"
import { Layout, Navigation, Points, ResetButton } from "../components/common"
import { useResize } from "../hooks/use_resize"
import { randomInteger } from "../tools/common"
//import { useState } from "react"
import { GameState } from "../tools/gameState"

export function Game() {
    const {width, height} = useResize()

    // TEHTÄVÄ 2: gameState filessä luotu hookki jolla seurataan räjähtäneitä palloja ja voi nollata pelin
    const { explodedBalls, handleExplode, resetGame } = GameState();

    console.log("Räjähtäneet pallot: " + explodedBalls)

    // map suorittaa arrayn jokaisen itemin erikseen
    const allBalls = Array(100).fill(null).map((_,i)=>{
  
      const x = randomInteger(50, width-50)
      const y = randomInteger(50, height-50)
  
      //console.log(x,y)  
      return <Ball x={x} y={y} key ={i} exploded={handleExplode}></Ball>
      
    })
  
    return <Layout>
      {width}px {height}px
      Räjähtäneet pallot: {explodedBalls}
      
      <Navigation>

        <Link to={"/"}>Home</Link>
      
        <Points>{explodedBalls}</Points>
        <ResetButton onClick={resetGame}>Reset Game</ResetButton>
       
      </Navigation>

      {allBalls}
      
    </Layout>

  }