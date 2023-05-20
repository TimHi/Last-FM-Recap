export interface RootTracks {
    toptracks: Toptracks
}

export interface Toptracks {
    track: TrackModel[]
    "@attr": Attr2
}

export interface TrackModel {
    streamable: Streamable
    mbid: string
    name: string
    image: Image[]
    artist: Artist
    url: string
    duration: string
    "@attr": Attr
    playcount: string
}

export interface Streamable {
    fulltrack: string
    "#text": string
}

export interface Image {
    size: string
    "#text": string
}

export interface Artist {
    url: string
    name: string
    mbid: string
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
