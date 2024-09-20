import { useState, CSSProperties, useEffect } from "react"
import { randomInteger } from "../tools/common"

// TEHTÄVÄ 2: Lisää pallon propsiin exploded callback
type BallProps = {
    x: number
    y: number
    exploded: () => void
  }
  
export function Ball({x,y, exploded}:BallProps) {
  
    const [maxPoints, setMaxPoints] = useState(1)
    // määrittele lähtöarvo
    const [points, setPoints] = useState(0)
    const [isAlive, setIsAlive] = useState(true)
    
    const style: CSSProperties = {
      position: "absolute",
      left: "0px",
      top: "0px",
      backgroundColor: `rgb(${randomInteger(1,255)}, ${randomInteger(1,255)}, ${randomInteger(1,255)})`,
      width: (5*maxPoints + 40) + "px",
      height: (5*maxPoints + 40) + "px",
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
      color: "white",
      userSelect: "none",
      transform: `translate(${x}px, ${y}px)`,
      zIndex: maxPoints
    }
  
    useEffect(() => {
      const max = randomInteger(1,10)
      console.log(max)
      setMaxPoints(max)
    }, [])
    
    // kun max pisteet tulee täyteen pallo poksahtaa
    useEffect(()=>{
      if(points >= maxPoints){
        setIsAlive(false)
        exploded()
      }
    },[points])
  
    if(!isAlive){
      return <div style={{transform: `translate(${x}px, ${y}px)`, 
      position: "absolute",
      width: "50px",
      height: "50px",}}>X</div>
    }
  
    // onClick ottaa funktion (setPoints) joka suoritetaan kun diviä klikataan
    return <div onClick={() => setPoints(points + 1) } style={style}>
      {points} / {maxPoints}
    </div>

  }