import { useNavigate, useParams } from "react-router-dom";

import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { selectArtistById } from '../store/artistSlice';
import localBackend from "../api/local-backend";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import style from './ArtistDetailPage.module.css';
import lastfmApi from "../api/data-service";
import SimilarArtist from "../components/SimilarArtist";
function ArtistDetailPage() {
    const { id } = useParams();
    const { name } = useParams();
    const navigate = useNavigate();
    console.log("DETAIL");
    console.log(id);
    console.log(name);
    const artist = useSelector(
        (state: RootState) => selectArtistById(state, id ?? "" + name ?? ""),
        shallowEqual
    );

    const { data } = localBackend.useScrapeImageQuery(encodeURIComponent(artist?.url ?? '') ?? skipToken);
    const { data: similarArtists, isError } = lastfmApi.useGetSimilarArtistsQuery(artist?.name ?? '' ?? skipToken);
    if (isError || data === undefined) {
        return (
            <div>
                <h1>{artist?.name}</h1>
                <div className={style.container}>
                    <div>
                        <img src={data} className={style.image}></img>
                    </div>
                </div>
                <button onClick={() => { navigate(-1) }}>Back</button>
            </div>
        )
    } else {
        return (
            <div>
                <h1>{artist?.name}</h1>
                <div className={style.container}>
                    <div>
                        <img src={data} className={style.image}></img>
                    </div>
                    <div className={style.simContainer}>
                        <SimilarArtist artists={similarArtists} />
                    </div>
                </div>
                <button onClick={() => { navigate(-1) }}>Back</button>
            </div>
        )
    }
}


export default ArtistDetailPage