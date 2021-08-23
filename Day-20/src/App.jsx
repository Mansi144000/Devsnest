import React, { useState } from "react";
import "./App.css";


const Card = ({card, cards, setCards, index}) => {
  
  return <div className="app">
                  
    <div className="card">
    
                <button 
      onClick={()=> {
      console.log("Delete = ", card);
      const newCards = cards.filter((el, i) => i !== index);
      setCards(newCards);
      
      }}> Delete</button>
    <div className="mm">{card}</div>
    </div>
      
    
  </div>
}
function App(props){
  const [cards, setCards] = useState([<h3>Pizza <br></br> <br></br> <p>You have consumed 56 cals today.</p></h3> ,
  <h3>Burger<br></br> <br></br> <p>You have consumed 69 cals today.</p></h3>, <h3>Coke <br></br> <br></br> <p>You have consumed 500 cals today.</p></h3>, <h3>Browne <br></br><br></br><p>You have consumed 180 cals today.</p></h3>,<h3>Fried <br></br><br></br> <p>You have consumed 200 cals today.</p></h3>,<h3>Lassagna <br></br> <br></br><p>You have consumed 600 cals today.</p></h3>, <h3>Pani Puri <br></br> <br></br> <p>You have consumed 10 cals today.</p></h3>]);
  return <div className="App">
     
     {cards.map((card, index) => (
     <Card key={index} card={card} cards={cards} setCards={setCards} index={index} />

     
     ))}
  </div>
}

export default App;
