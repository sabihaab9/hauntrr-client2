import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function HouseCard({ house }) {
 
  const [ghostIcon, setGhostIcon] = useState({icon: "👻", color: ""})

  function toggleGhost(){

    if(likeList.includes(user.name)){
      setHeart({icon:"👻", color: "green"})
    }
    if(!likeList.includes(user.name)){
      setHeart({icon:"👻", color: ""})
    }
  }

  // add distance, description and location to 'Card'
  return (
    <div>
      <br/>
      <div className='card-container'>

      <Card style={{ width: '28rem' }}>
        <Card.Img variant="top" src={house.picUrl}/>
        <Card.Body>
          <div>
        <Card.Subtitle >Haunted by: {house.ghosts.filter(ghost=>ghost.name).join(", ").toString()}</Card.Subtitle>
        <Card.Subtitle id="ghost-icon" onClick={handleClick} style={{color: ghostIcon.color}}>{ghostIcon.icon}</Card.Subtitle>
          <Card.Text>
            <b>{house.name}</b>
            {house.location}
            {house.description}
            <br/>
            {}
          </Card.Text>
          </div>
        </Card.Body>
      </Card>
      </div>
      <br/>
    </div>
  );
}

export default HouseCard;

//should have a list of all the ghosts haunting it atm -> put inside a containter 