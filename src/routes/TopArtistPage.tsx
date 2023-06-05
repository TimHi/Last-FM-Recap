import { useSelector } from 'react-redux';
import lastfmApi from '../api/data-service';
import Artist from '../components/Artist';
import { RootState } from '../store/store';
import { useNavigate } from 'react-router-dom';
import style from "./TopArtistpage.module.css";

function TopArtistPage() {
    const userName = useSelector((state: RootState) => state.user.name);
    const navigate = useNavigate();

    const { data: dataR, isError } = lastfmApi.useGetTopArtistForUserQuery(userName);

    function renderArtist() {
        if (userName === "") {
            navigate("/");
        }
        if (!dataR) {
            return <h1>Loading data...</h1>;
        } else if (isError) {
            return (<h1>Error fetching data</h1>)
        }
        else {
            const artists = dataR.topartists.artist.slice(0, 10);
            return (
                <>
                    <h1>Top artists last year</h1>
                    <div className={style.container}>
                        {artists.map((a) => (
                            <Artist key={a.name} artist={a} />
                        ))}
                    </div>
                </>
            );
        }
    }

    return (
        <>
            {renderArtist()}
            <button onClick={() => { navigate("/albums") }}>Next!</button>
        </>
    );
}

export default TopArtistPage;
