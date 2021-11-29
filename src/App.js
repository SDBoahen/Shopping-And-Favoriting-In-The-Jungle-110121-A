import logo from './logo.svg';
import './App.css';


import ItemsList from './ItemsList';


function App() {


  //////// JS




    const itemsArray = [

      { 
        name: "iPhone",
        imageURL: "http://sciencemadefun.net/blog/wp-content/uploads/2011/12/present-150291_1280-293x300.png"
      }
        ,
      { 
        name: "Android Phone",
        imageURL: "http://sciencemadefun.net/blog/wp-content/uploads/2011/12/present-150291_1280-293x300.png"
      }        
        ,
      { 
        name: "Google Phone",
        imageURL: "http://sciencemadefun.net/blog/wp-content/uploads/2011/12/present-150291_1280-293x300.png"
      }


    ]
    console.log("itemsArray: ", itemsArray)  //




  //////// JS
  
  


  //// < App /> 's Return
  return (
    <div className="App">
      <div className="App-header">

        <img src={logo} className="App-logo" alt="logo" />


        <ItemsList itemsArrayFromApp={itemsArray} />
        {/* function ItemsList() */}

        
      </div>
    </div>
  );

  //?

}
export default App;


/*

                                      < App />
                                        L> < ItemsList /> 
       
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