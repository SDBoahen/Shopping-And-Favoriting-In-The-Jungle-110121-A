import logo from './logo.svg';
import './App.css';

import { useState } from 'react';

import ItemsList from './ItemsList';
import ShoppingCartList from './ShoppingCartList';



function App() {


  //////// JS




    const itemsArray = [

      {
        id: 1, 
        name: "iPhone",
        imageURL: "http://sciencemadefun.net/blog/wp-content/uploads/2011/12/present-150291_1280-293x300.png"
      }
        ,
      {
        id: 2, 
        name: "Android Phone",
        imageURL: "http://sciencemadefun.net/blog/wp-content/uploads/2011/12/present-150291_1280-293x300.png"
      }        
        ,
      {
        id: 3, 
        name: "Google Phone",
        imageURL: "http://sciencemadefun.net/blog/wp-content/uploads/2011/12/present-150291_1280-293x300.png"
      }


    ]
    console.log("itemsArray: ", itemsArray)  //


    const [ dataForShoppingCart, updateDataInShoppingCart ] = useState( [ ] ) 
    // const [ dataForShoppingCart, updateDataInShoppingCart ] = useState( 
    //     [       
    //       {
    //         id: 3, 
    //         name: "Google Phone",
    //         imageURL: "http://sciencemadefun.net/blog/wp-content/uploads/2011/12/present-150291_1280-293x300.png"
    //       },
    //       {
    //         id: 3, 
    //         name: "Google Phone",
    //         imageURL: "http://sciencemadefun.net/blog/wp-content/uploads/2011/12/present-150291_1280-293x300.png"
    //       } 
    //   ] 
    // )
    console.log("State of dataForShoppingCart: ", dataForShoppingCart)  //





    function aItemCardHasBeenClicked(dataFromItemsList){


      console.log("dataFromItemsList: ", dataFromItemsList)  //

      // console.log("Hey! An ItemCard Has Been Clicked On!🔔🎶")  //


      updateDataInShoppingCart(  [ ...dataForShoppingCart, dataFromItemsList ]  )
      ////                       [ ].push( dataFromItemsList )
      // X //
      // updateDataInShoppingCart( [ dataFromItemsList ] )
      // updateDataInShoppingCart(   dataFromItemsList   )




    }




  //////// JS
  
  


  //// < App /> 's Return
  return (
    <div className="App">
      <div className="App-header">

        <img src={logo} className="App-logo" alt="logo" />


        <ItemsList 
          
          itemsArrayFromApp={itemsArray} 
          notifyAppThatAItemCardHasBeenClicked={aItemCardHasBeenClicked}

        />
        {/* function ItemsList() */}


        <br></br><br></br><br></br><br></br>


        <ShoppingCartList 
        
          // WeeNeedDataAsAProp
          itemsArrayFromApp={dataForShoppingCart}
        
        />

        
      </div>
    </div>
  );

  //?

}
export default App;


/*

                                    =========


                                    < App /> [ { itemObj }  ](dataForShoppingCart)
                                    
                                    
                                    L> < ItemsList />  < ShoppingCartList />
                                    
                                    L> < ItemCard />       < ItemCard /> 
                                    { itemObj } 
                                    

                                      ////   <App />   ->->->->->->V
                                      ////   V    /\               V
                                      //// <ItemsList />     < ShoppingCartList />
                                      ////   V    /\
                                      //// < ItemCard f() />     < ItemCard /> 

                                    ========




                                    < App />
                                    L> < ItemsList />  *< ShoppingCartList />
                                        L> < ItemCard />   *< ShoppingCartList />
                                        *< ShoppingCartList />

       
                 < ShoppingCartList />   < ItemCard />



            





          


            //// Naming/Organization Conventions

            < ItemsContainer />  < ItemsManager />          
            < ItemsList /> < ShoppingCartList /> 
            < ItemCard />

            < Items />            
            < Item /> < ShoppingCart/> 











>>>> Do a create-react-app


>>>> I need y’all to create a Shopping or Favoriting App


>>>> When the user clicks on an
< Item />  OR  < CuteCritter />,
that clicked Component should go into the
< ShoppingCart />  OR  <Favorites />


>>>> Feel free to either have an array of items or cuteCritters objects either

>> Directly inside of  < App />
OR
>> As an array in a separate Js file, imported into  < App />
OR
>> As a db.json file and fetch() from it into  < App />


>>>> Somewhere in your Project, you WILL NEED 4 Components minimum to satisfy this
>>  <App />
>>  < ItemsList />  OR  < CuteCrittersList />
>>  < ShoppingCart />  OR  <Favorites />
>>  <Item />  OR  < CuteCritter />

>>>> You NEED to use State (useState())
>>>> You NEED to use props
>>>> You NEED to use events (onClick in particular at a minimum)


*/