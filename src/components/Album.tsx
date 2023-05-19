import { AlbumModel } from "../model/TopAlbum"

interface AlbumProps {
    album: AlbumModel
}

function Album({ album }: AlbumProps) {
    return (
        <div>
            <h2>{album.name} - {album.artist.name}</h2>
            <p>{album.playcount} scrobbles</p>
        </div>
    )
}

export default Album