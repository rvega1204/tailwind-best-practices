import { VideoGame } from "../models/video-game"; // Importing the VideoGame model interface
import GameItem from "./GameItem"; // Importing the GameItem component

// Define the props interface for the component
interface Props {
    videoGames: VideoGame[]; // Array of VideoGame objects passed as a prop
}

// Define the VideoGameGrid component
const VideoGrameGrid = ({ videoGames }: Props) => {
    return (
        <div className="page-container">
            {/* Wrapper container for the page */}
            <div className="page-content">
                {/* Section title */}
                <h1 className="title">Featured Games</h1>
                <div className="grid-container">
                    {/* Map through the videoGames array to render GameItem components */}
                    {videoGames.map((game) => (
                        <GameItem key={game.id} {...game} /> // Pass game properties as props to GameItem
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoGrameGrid; // Export the component as default