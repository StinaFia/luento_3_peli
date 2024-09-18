import { useEffect, useState } from "react"

export function useResize() {
    // etsi tämän hetkinen näyttöikkunan koko
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeigth] = useState(window.innerHeight)
  
    useEffect(()=>{
  
      function handleResize() {
        setWidth(window.innerWidth)
        setHeigth(window.innerHeight)
      }
  
      window.addEventListener("resize", handleResize) 
  
      return ()=>{
        window.removeEventListener("resize", handleResize)
      }
    
    }, [])
  
    return {width: width, height: height}
  
  }
  
  