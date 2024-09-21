import { useState } from "react"
import { supabase } from "./supabase"
import { HomeButton, Layout, Navigation } from "./components/common"
import { RankingList } from "./components/RankingList"
import { Link } from "react-router-dom"
import { toast, Toaster } from "sonner"


export default function App() {
  
  // inputin tila
  const[nickname, setNickname] = useState("")


  // TO DO: Katsotaan myöhemmin miten toteutetaan
  const endGame = async ()=>{

    const {data, error} = await supabase.from('ranking').insert([
      {
        nickname: nickname,
        points: 0
      }
    ]).select()

    console.log("data: ", data, "error: ", error)
  }

  return <Layout>
    <Navigation>
      <HomeButton>Home</HomeButton>
    </Navigation>
    
    <label>Nimimerkki: </label>
    {/* TEHTÄVÄ 2: määritä onKeyDown tarkkailemaan onko ENTER & käyttäjänimi
        => triggeröi toast */}
    <input value={nickname} onChange={(e)=> setNickname(e.target.value)} onKeyDown={(e) => {

       if (e.key == "Enter" && nickname) {
        toast.success(`Tervetuloa peliin ${nickname}!`)
      }}
    }></input>

    {/*<button>Peliin!</button>*/}
    
    <Link to={"/game"}>Peliin!</Link>

    <Toaster></Toaster>
    
    <RankingList></RankingList>

  </Layout>

}