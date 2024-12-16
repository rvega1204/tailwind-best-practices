import { VideoGame } from "../models/video-game"; // Importing the VideoGame model interface

// Define the GameItem component
// Accepts all properties from VideoGame except "id" using the Omit utility type
const GameItem = (game: Omit<VideoGame, "id">) => {
  return (
    <div className="card">
      {/* Container for the game card */}
      <div className="card-image-container h-48">
        {/* Image section */}
        <img
          src={game.image} // Game image source
          alt={game.title} // Game title used as the image alt text
          className="w-full h-full object-cover" // Makes the image cover the container
        />
        {/* Overlay section for the game icon */}
        <div className="card-overlay">
          <p className="card-icon">🎮</p> {/* Gamepad icon */}
        </div>
      </div>
      <div className="card-content">
        {/* Card content section */}
        <h3 className="title title-md text-primary">{game.title}</h3> {/* Game title */}
        <h4 className="subtitle text-secondary-100">{game.subtitle}</h4> {/* Game subtitle */}
        <p className="description">{game.description}</p> {/* Game description */}
      </div>
    </div>
  );
};

export default GameItem; // Export the component as default