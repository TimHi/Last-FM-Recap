import { TrackModel } from "../model/TopTracks"


interface TrackProps {
    track: TrackModel
}

function Track({ track }: TrackProps) {
    return (
        <div>
            <h2>{track.artist.name}: {track.name}</h2>
            <p>{track.playcount} scrobbles</p>
        </div>
    )
}

export default Track