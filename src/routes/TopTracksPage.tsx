

import { useSelector } from 'react-redux';
import lastfmApi from '../api/data-service'
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';
import Track from '../components/Track';

function TopTracksPage() {
    const userName = useSelector((state: RootState) => state.user.name);
    const navigate = useNavigate();
    const { data } = lastfmApi.useGetTopTracksForUserQuery(userName);

    function renderTracks() {
        if (userName === "") {
            navigate("/")
        }
        if (data === undefined) {
            return <h1>Loading data...</h1>;
        } else {
            return (
                <>
                    <h1>Top Tracks last year</h1>
                    {data?.toptracks.track.map((t) => (
                        <Track key={t.url} track={t}></Track>
                    ))}
                </>
            );
        }
    }

    return (
        <>
            {renderTracks()}
            <button onClick={() => { navigate("/albums") }}>Back</button>
            <button onClick={() => { navigate("/genres") }}>Next</button>
        </>);
}

export default TopTracksPage
