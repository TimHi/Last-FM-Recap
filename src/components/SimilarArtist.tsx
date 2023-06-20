
import style from "./Artist.module.css";
import { RootSimilarartists } from "../model/SimilarArtist";

interface SimilarArtistProps {
    artists: RootSimilarartists | undefined;

}

function SimilarArtist({ artists }: SimilarArtistProps) {
    if (artists === undefined) {
        return <></>;
    } else {
        return (
            <div className={style.container}>
                {artists.similarartists.artist.map((a) => {
                    return (<h1>{a.name}</h1>)
                })
                }
            </div>
        )
    }
}

export default SimilarArtist;
