

import { useSelector } from 'react-redux';
import lastfmApi from '../api/data-service'
import Artist from '../components/Artist';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';

function TopArtistPage() {
    const userName = useSelector((state: RootState) => state.user.name);
    const navigate = useNavigate();
    const { data } = lastfmApi.useGetTopArtistForUserQuery(userName);

    function renderArtist() {
        if (userName === "") {
            navigate("/")
        }
        if (data === undefined) {
            return <h1>Loading data...</h1>;
        } else {
            return (
                <>
                    <h1>Top artists last year</h1>
                    {data?.topartists.artist.map((a) => (
                        <Artist key={a.name} artist={a}></Artist>
                    ))}
                </>
            );
        }
    }

    return (
        <>
            {renderArtist()}
            <button onClick={() => { navigate("/albums") }}>Next!</button>
        </>);
}

export default TopArtistPage
