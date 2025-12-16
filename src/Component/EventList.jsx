import { useState } from "react";
import Header from "./Header";
import EventItem from "./EventItem";
import AddEvent from "./addEvent";
import SearcheEvent from "./SearcheEvent";
function EventList(){
    const [evenementOriginal] = useState([
        {id: 1, title: "Photographie", description:"", date: "2024/12/19", location:"Tanger", type: "Atelier"},
        {id: 2, title : "Machine Learning", description: " Learning machine",date: "2025/12/27", location: "à distance", type: "Conférence"}
    ])
    const [evenement,setEvenement] = useState(evenementOriginal)

    let NbrEvent = evenement.length;

    function supprimer(id){
        const supp = evenement.filter((even) => (even.id !== id))
        setEvenement(supp)
    }

    const [favorite,setFavorite] = useState([])

    function Favoriter(index){
        const item = evenement[index]
        const filtre = favorite.some((even) => even.id === item.id);
        if(filtre){
            setFavorite(favorite.filter((even) => even.id !== item.id))
        }
        else{
           setFavorite([...favorite,item]) 
        }  
    }

    let NbrFavorite = favorite.length

    function ajouter(nouveauEvenement){
        setEvenement([...evenement, nouveauEvenement]);  
    };

    const [show,setShow] = useState(false)

    function shows(){
        setShow(!show)
    }
    
    let btn = {
        display:"flex",
        gap:"20px",
        marginLeft :"450px"
    }

    let btnAjoute= {
        width:"150px",
        borderRadius: "6px",
        border : "1px solid rgba(0, 149, 255, 1)",
        backgroundColor:"white",
        color:"rgba(0, 149, 255, 1)"
    }
    return(
        <div>
            <Header event={NbrEvent} favoirs={NbrFavorite}/>
            <br />
            <div style={btn}>
            <SearcheEvent Event={evenementOriginal} setEvent={setEvenement}/>
            <button onClick={shows} style={btnAjoute}>Ajouter un evenement</button>
            </div>
            <div>
                {evenement.map((even,index) => (
                    <EventItem key={index} 
                    id={even.id}
                    titre={even.title}
                    date={even.date}
                    lieu={even.location}
                    description={even.description}
                    type={even.type}
                    supprime={supprimer}
                    favorite={()=>Favoriter(index)}/>
                ))}
            </div>
            {show && (
                <div>
                <AddEvent ajoute={ajouter}/>
            </div>
            )}
        </div>
    )
}
export default EventList;