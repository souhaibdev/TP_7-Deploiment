import { useState } from "react";

function SearcheEvent(props){
    const [type,setType] = useState("")
    const [date,setDate] = useState(true)

    function filtrer(e){
        const value = e.target.value;
        setType(e.target.value)

        if(value === "Tous"){
            props.setEvent(props.Event)
            return;
        }
        const filtr = props.Event.filter((even) => (
            even.type.includes(value)
        ))
        props.setEvent(filtr)
    }

    function trier(){
        const sorter = props.Event.slice().sort((a,b) => (
            date === true ? new Date(a.date)  -  new Date(b.date) :  new Date(b.date) -  new Date(a.date)
        ))
        props.setEvent(sorter)
        setDate(!date)
    }

    let btn= {
        height:"25px",
        borderRadius: "6px",
        border : "none",
        backgroundColor:"rgba(0, 149, 255, 1)",
        color:"white"
    }

    return(
        <div>
            <select value={type} onChange={filtrer} style={{width:"100px",marginRight:"20px",}}>
                <option value="Tous">Tous</option>
                <option value="Conférence">Conférence</option>
                <option value="Atelier">Atelier</option>
            </select>
            <button onClick={trier} style={btn}>Trier par date</button>
        </div>
    )
}

export default SearcheEvent;