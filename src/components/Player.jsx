import { useState } from "react";

export default function Player({ initialName, symbol }) {
  //Using states to c'heck whether user is in editing' mode and 'updating the name'
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);

  //function to handle the click action on Edit button
  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }
  //function to handle the name change of the player
  function handleNameChange(event) {
    setPlayerName(event.target.value);
  }
  //Setting the initial player name before editing
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  //Updating the player name based on if the user is in edit mode
  if (isEditing) {
    editablePlayerName = <input type="text" required value={playerName} onChange={handleNameChange} />;
  }

  //Using the player name and also updating the button based on user editing the name
  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button> 
    </li>
  );
}
