function Header(props){
    let header ={
        display:"flex",
        gap:"20px",
        marginLeft :"550px"
    }
    return(
        <div>
            <h1>📅 Event Planner</h1>
            <div style={header}>
            <p>{props.event} evenements</p>
            <p>{props.favoirs} favoirs</p>
            </div>
        </div>
    )
}
export default Header;