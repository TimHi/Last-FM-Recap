import { ArtistModel } from "../model/TopArtist";

interface ArtistProps {
    artist: ArtistModel
}

function Artist({ artist }: ArtistProps) {
    return (
        <div>
            <h2>{artist.name}</h2>
            <p>{artist.playcount} scrobbles</p>
        </div>
    )
}

export default Artist