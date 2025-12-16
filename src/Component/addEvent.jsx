import { useState } from "react";
function AddEvent(props){
    const [title,setTitle] = useState("")
    const [date,setDate] = useState("")
    const [location,setLocation] = useState("")
    const [type,setType] = useState("Conférence")
    const [description,setDescription] = useState("")

    const [show,setShow] = useState(true)

    function onchangetitle(e){
        setTitle(e.target.value)
    }

    function onchangeDate(e){
        setDate(e.target.value)
    }

    function onchangeLieu(e){
        setLocation(e.target.value)
    }

    function onchangeType(e){
        setType(e.target.value)
    }

    function onchangeDescription(e){
        setDescription(e.target.value)
    }

    function Enregistrer(){
    const nouveauEvenement = {    
            id :Math.random(),   
            title,
            date,
            location, 
            type,
            description,  
        };
        props.ajoute && props.ajoute(nouveauEvenement);
        alert("ajouter avec succes!")

        setTitle("");
        setDate("");
        setLocation("");
        setType("Conférence");
        setDescription("");

    setShow(false)
    }

    
    let div1={
        width: "400px",
        padding: "20px",
        margin: "20px auto",
        borderRadius: "15px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        backgroundColor: "#f9f9f9",
        fontFamily: "Arial, sans-serif"

    }

    let input ={
        width:"95%",
        padding:"8px", 
        marginTop:"5px", 
        borderRadius:"5px", 
        border:"1px solid #ccc"
    }

    let btn1 ={
        background:"#0077ffff", 
        color:"white", 
        border:"none", 
        borderRadius:"5px", 
        padding:"8px 12px", 
        cursor:"pointer",
        width:"95%",
    }


    return(
        <div> 
            
            {show && (
                <div style={div1}>
                <div>
            <input type="text" value={title} onChange={onchangetitle} placeholder="Titre" style={input}/>
            <br /><br />
            <input type="date" value={date} onChange={onchangeDate} style={input}/>
            <br /><br />
            <input type="text" value={location} onChange={onchangeLieu} placeholder="Lieu" style={input}/>
            <br /><br />
            <select value={type} onChange={onchangeType} style={input}>
                <option value="Conférence">Conférence</option>
                <option value="Atelier">Atelier</option>
            </select>
            <br /><br />
            <textarea value={description} onChange={onchangeDescription} placeholder="Description" style={input}></textarea>
            <br /><br />
            <button onClick={Enregistrer} style={btn1}>Enregistrer</button>
                </div>
                </div>
            )}
        
        </div>
    )
    
}
export default AddEvent;