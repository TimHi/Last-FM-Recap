

import { useSelector } from 'react-redux';
import lastfmApi from '../api/data-service'

import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';
import Album from '../components/Album';

function TopAlbumsPage() {
    const userName = useSelector((state: RootState) => state.user.name);
    const navigate = useNavigate();
    const { data } = lastfmApi.useGetTopAlbumsForUserQuery(userName);

    function renderAlbums() {
        if (userName === "") {
            navigate("/")
        }
        if (data === undefined) {
            return <h1>Loading data...</h1>;
        } else {
            return (
                <>
                    <h1>Top albums last year</h1>
                    {data.topalbums.album.map((a) => (
                        <Album key={a.name} album={a} />
                    ))}
                </>
            );
        }
    }

    return (
        <>
            {renderAlbums()}
            <button onClick={() => { navigate("/artists") }}>Back</button>
            <button onClick={() => { navigate("/tracks") }}>Next</button>
        </>);
}

export default TopAlbumsPage
