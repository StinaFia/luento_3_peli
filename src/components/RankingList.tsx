import { useEffect, useState } from "react"
import { supabase } from "../supabase"

// testaa supabasen toimivuus
interface RankingItem {
    id: number
    created_at: string
    nickname: string
    points: number
  }

export function RankingList(){

    const [list, setList] = useState<RankingItem[]>([])
  
    // ei käytetä useEffectin kanssa async/await avainsanoja vaan .then
    useEffect(()=>{
      supabase.from('ranking').select("*").limit(10).then(({data, error})=>{
        console.log(data, error)
        if(data){
          setList(data)
        }
      })
    },[])
    
    const rankingListItems = list.map((item,i) => <div key={i}> {item.nickname}: {item.points}p </div>)
  
  return <>{rankingListItems}</>
    //return <>{JSON.stringify(list)}</>
  }