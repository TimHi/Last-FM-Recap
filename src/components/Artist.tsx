
import { useNavigate } from "react-router-dom";
import localBackend from "../api/local-backend";
import { ArtistModel } from "../model/TopArtist";
import style from "./Artist.module.css";

interface ArtistProps {
    artist: ArtistModel;

}

function Artist({ artist }: ArtistProps) {
    const navigate = useNavigate();


    function onClickHandler(): void {
        navigate(`/artists/${artist.mbid}`);
    }

    const { data } = localBackend.useScrapeImageQuery(encodeURIComponent(artist.url))
    if (!data) {
        console.log("No data");
        return (<></>)
    } else {


        return (
            <div className={style.container} onClick={onClickHandler}>
                <img className={style.image} src={data}></img>
                <h2>{artist.name}</h2>
                <p>{artist.playcount} scrobbles</p>
                <p>{artist.realImage}</p>
            </div>
        )
    }
}

export default Artist