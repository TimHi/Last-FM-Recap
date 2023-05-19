
import './App.css'
import lastfmApi from './api/data-service'
import Artist from './components/Artist';

function App() {
  const { data } = lastfmApi.useGetTopArtistForUserQuery("th-p");

  function renderArtist() {
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

  return <>{renderArtist()}</>;
}

export default App
