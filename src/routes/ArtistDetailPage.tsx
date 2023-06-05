import { useParams } from "react-router-dom";

function ArtistDetailPage() {
    const { id } = useParams();

    return (
        <div>
            <h1>{id}</h1>
        </div>
    )
}


export default ArtistDetailPage