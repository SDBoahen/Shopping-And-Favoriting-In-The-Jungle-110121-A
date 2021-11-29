import { useState } from "react"




const ItemCard =( props )=>{  console.log("props:: ", props)
// const ItemCard =( 

//         // props
//         { 
            
//             eachItem,  

//             notifyItemsListThatIHaveBeenClicked,
            
//         } 
//         // props

//     )=>{ 
    



    //// js

        // console.log("WHAT IS IT?? 👀 -> ", notifyItemsListThatIHaveBeenClicked)  //

     // const [ variable, aSetterFunctionForThatVariable ] = useState( defaultState )
        const [ cardHasBeenClicked, toggleStateOfItemCardClick ] = useState( false )
                // f()  ||  useState( somethingNew )
                //  v   =        ( > X <  ) 
        console.log("State of cardHasBeenClicked: ", cardHasBeenClicked)  //
     // const [ v, f() ] = useState( defaultState )


    //// js








    return(<div id={props.eachItem.id} 
        
            onClick={ 
        
                ()=>{

                    console.log("clickty-click -> ", props.eachItem)  //

                        //                  const ringTheBell =(  dataFromItemCard  )=>{
                        props.notifyItemsListThatIHaveBeenClicked(  props.eachItem  )
                        // Using the Function from ItemsList.js -> ringTheBell
                        //// Like a Tunnel from:
                            //// <ItemsList />
                            ////   V    /\
                            //// < ItemCard /> 
                        //// < ItemCard /> >>>> <ItemsList />

                    toggleStateOfItemCardClick( !cardHasBeenClicked )
                    // toggleStateOfItemCardClick(true)
                    // This is Going to Cause the Component to ReRender

                } 
    
            }
        
        >
        {/* .addEventListener(   "click" , ()=>{} ) */}
    
        --------------------------------------------------------
        <h3>{props.eachItem.name}</h3>
        <img src={props.eachItem.imageURL} />
        <br></br>
        --------------------------------------------------------
        <br></br>
        <br></br>
        <br></br>
        <br></br>

    </div>) 


}
export default ItemCard