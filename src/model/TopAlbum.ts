export interface RootAlbum {
    topalbums: Topalbums
}

export interface Topalbums {
    album: AlbumModel[]
    "@attr": Attr2
}

export interface AlbumModel {
    artist: Artist
    image: Image[]
    mbid: string
    url: string
    playcount: string
    "@attr": Attr
    name: string
}

export interface Artist {
    url: string
    name: string
    mbid: string
}

export interface Image {
    size: string
    "#text": string
}

export interface Attr {
    rank: string
}

export interface Attr2 {
    user: string
    totalPages: string
    page: string
    perPage: string
    total: string
}
