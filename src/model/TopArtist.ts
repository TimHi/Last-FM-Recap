export interface RootArtist {
    topartists: Topartists
}

export interface Topartists {
    artist: ArtistModel[]
    "@attr": Attr2
}

export interface ArtistModel {
    streamable: string
    image: Image[]
    mbid: string
    url: string
    playcount: string
    "@attr": Attr
    name: string
    realImage: string
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
