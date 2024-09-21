import styled from "styled-components"


export const Layout = styled.div`
background-color: darkkhaki;
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
gap: 10px;
position: relative;
`

// Navigaatio palkin tyyli toimii "containerina" jonka sisään voidaan lisätä elementtejä
// Esimerkiksi kotinappi, pisteet, nollaus
export const Navigation = styled.nav`
width: 100%;
height: 80px;
background-color: bisque;
display: flex;
justify-content: flex-start;
align-items: center;
padding: 10px;
`

export const HomeButton = styled.button`
margin-left: 20px;
`

// Luodaan pallo johon kerätään tulospisteet
// TEHTÄVÄ 2: Määritellään fontin tyylit -> määritellään teksti keskelle palloa
export const Points = styled.div`
width: 50px;
height: 50px;
border-radius: 50%;
background-color: black;
margin-right: 20px;
margin-left: 20px;

font-size: 16px;
font-weight: bold;
color: white;

display: flex;
justify-content: center;
align-items: center;
`

// TEHTÄVÄ 2: Luodaan tyyli Reset-napille
export const ResetButton = styled.button`
padding: 5px 10px;
background-color: #000000; 
color: white;
border: none;
border-radius: 5px;
font-size: 16px;
font-weight: bold;
`

