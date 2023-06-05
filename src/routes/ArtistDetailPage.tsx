import { useParams } from "react-router-dom";

import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { selectArtistById } from '../store/artistSlice';
import localBackend from "../api/local-backend";
import { skipToken } from "@reduxjs/toolkit/dist/query";

function ArtistDetailPage() {
    const { id } = useParams();
    const artist = useSelector(
        (state: RootState) => selectArtistById(state, id ?? ""),
        shallowEqual
    );
    const { data } = localBackend.useScrapeImageQuery(encodeURIComponent(artist?.url ?? '') ?? skipToken)

    return (
        <div>
            <h1>{artist?.name}</h1>
            <h3>{id}</h3>
            <img src={data}></img>

        </div>
    )
}


export default ArtistDetailPage