import localBackend from "../api/local-backend";
import { ArtistModel } from "../model/TopArtist";
import style from "./Artist.module.css";

interface ArtistProps {
    artist: ArtistModel
}

function Artist({ artist }: ArtistProps) {
    const { data } = localBackend.useScrapeImageQuery(encodeURIComponent(artist.url))
    if (!data) {
        return (
            <div>
                <h2>{artist.name}</h2>
                <p>{artist.playcount} scrobbles</p>
                <p>{artist.realImage}</p>
            </div>
        )
    } else {
        return (
            <div className={style.container}>
                <img className={style.image} src={data}></img>
                <h2>{artist.name}</h2>
                <p>{artist.playcount} scrobbles</p>
                <p>{artist.realImage}</p>
            </div>
        )
    }
}

export default Artist