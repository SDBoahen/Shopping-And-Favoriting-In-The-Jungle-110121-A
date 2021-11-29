import ItemCard from "./ItemCard"


function ItemsList(props){
// function ItemsList( { itemsArrayFromApp, notifyAppThatAItemCardHasBeenClicked } ){

    console.log("props in ItemsList: ", props.itemsArrayFromAppFromApp)
    // comeback to destructuring with renaming



    // ( {} )


    //// js
        console.log("props.itemsArrayFromApp: ", props.itemsArrayFromApp)  //
        
        
        
        
        
        // props.notifyItemsListThatIHaveBeenClicked(  props.eachItem  )
        const ringTheBell =(  dataFromItemCard  )=>{
            
            console.log("dataFromItemCard: ", dataFromItemCard)  //

                props.notifyAppThatAItemCardHasBeenClicked( dataFromItemCard )
            
            // console.log("Hey! A ItemCard Has Been Clicked On!🔔🎶")  //

        }




        let dataFromDotMap = props.itemsArrayFromApp.map( 
    
            (eachItem)=>{  
            
            // console.log("eachItem -> ", eachItem)  //
    
    
            // "Do Something"
            return(
                <h3>{eachItem.name}</h3>
            )
    
            // return(eachItem.name)
        
            } 
      
      )
      console.log(dataFromDotMap)  //
  
  


      function renderingAsAFunction(){
  
        return(
  
          props.itemsArrayFromApp.map( 
      
            (eachItem)=>{  
              
              console.log("eachItem -> ", eachItem)  //
      
      
              // "Do Something"
              return(<ItemCard 

                    key={eachItem.id}  // for React
                    eachItem={eachItem} // for Us

                    notifyItemsListThatIHaveBeenClicked={ringTheBell}

                />)
      
              // return(eachItem.name)
          
            } 
          
          )
          // console.log(dataFromDotMap)
          
        )
  
      }

    //// js


    return(<>

            <h2> ✨ITEMS LIST✨ </h2>

            ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
            <br></br><br></br><br></br><br></br>

            {/* 
                    <h3>{props.itemsArrayFromApp[0].name}</h3>
                        <img />
                    <h3>{props.itemsArrayFromApp[1].name}</h3> 
                        <img />
                    <h3>{props.itemsArrayFromApp[2].name}</h3> 
                        <img />
                    */}

            { //// js

            //// writting .map directly into return

            // props.itemsArrayFromApp.map( 
                
            //   (eachItem)=>{  
                
            //     console.log("eachItem -> ", eachItem)  //


            //     // "Do Something"
            //     return(<h3>{eachItem.name}</h3>)

            //     // return(eachItem.name)

            //   } 

            // )


            //// absrract as a variable -> call in Component Return
            // dataFromDotMap

            }
            {
                //// abstract process as a function -> invoke thar function
                renderingAsAFunction()
            }




            {/* [ {} {} eachItem:{} ]  <- .map(  (eachItem)=>{ doSomethingTo >>> eachItem }  ) */}

            {/* .map() == f() */}
            {/* .map( ()=>{} ) */}
            {/* array <- .map() */}
            {/* .map() will:  { doSomething }  as many times as the length of the array */}
            {/* .map() will:  return a new Array */}


            ✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨
            <br></br>


    </>)
// --------------- THE END
}
export default ItemsList