import Card from "../card/card.component";
import "./card-list.styles.css";
import React from "react";


const CardList = ({ monsters }) => {
 
    // console.log('render comp')
    
    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
           <Card monster={monster} key={monster.id}/>
          );
        })}
      </div>
    );
  
}
export default CardList;
