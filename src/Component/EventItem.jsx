import { useState } from "react";
function EventItem(props){
    const [favorite,setFavorite] = useState(true)

    function favoriter(){
        props.favorite()
        setFavorite(!favorite)
    }

    function supprimer(){
        props.supprime(props.id)
    }

    let styleA ={
        width:"100%",
        backgroundColor:"rgba(255, 41, 41, 0.47)",
        border :"2px solid red",
        borderRadius: "6px",
        marginLeft :"55px"
    }

    let styleB ={
        width:"100%",
        backgroundColor:"white",
        border : "1.5px solid rgba(0, 0, 0, 1)",
        borderRadius: "6px",
        marginLeft :"55px"
    }

    let card ={
        width:"95%",
        display:"flex",
        justifyContent:"space-around",
        marginTop:"20px",
        marginBottom :"40px"
    }
    let h1 ={
        textAlign:"left",
        marginLeft:"15px",
    }
    let p ={
        textAlign:"left",
        marginLeft:"15px",
    }

    let btn ={
        float:"right",
        marginRight :"15px",
    }

    let btn1 ={
        fontSize: "20px",
        border:"none",
        backgroundColor: "transparent"
    }
    let btn2 ={
        fontSize: "20px",
        backgroundColor:"none",
        border:"none",
        backgroundColor: "transparent"
    }
    let btn3 ={
        fontSize: "20px",
        backgroundColor:"none",
        border:"none",
        backgroundColor: "transparent"
    }
    return(
        <div style={card}>
        <div style={new Date(props.date) < new Date ? styleA : styleB}>
            <h1 style={h1}>{props.titre}</h1>
            <div style={{display:"flex",gap:"10px",marginTop:"-15px",}}>
            <p style={h1}>{props.date}</p>
            <p>{props.lieu}</p>
            </div>
            <p style={p}>{props.description}</p>
            <div style={btn}>
            </div>
        <div >
            <div style={{float:'right',marginRight:"15px",marginTop:"-120px"}}>
            <button onClick={favoriter} style={btn1}>{favorite ? " ☆" : " ★"}</button>
            <button style={btn2}>✏️</button>
            <button onClick={supprimer} style={btn3}>✖</button>
            </div>
        </div>
        </div>
        </div>
        
    )
}
export default EventItem;