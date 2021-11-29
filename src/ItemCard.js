

// const ItemCard =( props ={ eachItem } )=>{ 
const ItemCard =( { eachItem } )=>{ 
    //// js
    
    //// js

    return(<>
    
        --------------------------------------------------------
        <h3>{eachItem.name}</h3>
        <img src={eachItem.imageURL} />
        --------------------------------------------------------
        <br></br>
        <br></br>
        <br></br>
        <br></br>

    </>) 


}
export default ItemCard