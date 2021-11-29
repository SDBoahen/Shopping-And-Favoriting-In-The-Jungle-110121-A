import ItemCard from "./ItemCard"




const ShoppingCartList =(props)=>{

    //////// js

    function renderingAsAFunction(){
  
        return(
  
          props.itemsArrayFromApp.map( 
      
            (eachItem)=>{  
              
              console.log("eachItem -> ", eachItem)  //
      
      
              // "Do Something"
              return(<ItemCard 

                    key={eachItem.id}  // for React
                    eachItem={eachItem} // for Us

                    // notifyItemsListThatIHaveBeenClicked={ringTheBell}

                />)
      
              // return(eachItem.name)
          
            } 
          
          )
          // console.log(dataFromDotMap)
          
        )
  
    }

    //////// js








    return(<>
    
        <h2> 🛒 CART 🛒 </h2>

        🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒
        <br></br><br></br><br></br><br></br>


        {/* {renderingAsAFunction()} */}
        {
            props.itemsArrayFromApp.map( 
        
                (eachItem)=>{  
                    
                    console.log("eachItem -> ", eachItem)  //


                    // "Do Something"
                    return(<ItemCard 

                        key={eachItem.id}  // for React
                        eachItem={eachItem} // for Us

                        // notifyItemsListThatIHaveBeenClicked={ringTheBell}

                    />)

                // return(eachItem.name)
            
                } 
        
            )
        }



        🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒🛒
        <br></br><br></br><br></br><br></br>

    </>)

}
export default ShoppingCartList