export interface RootSimilarartists {
    similarartists: Similarartists
}

export interface Similarartists {
    artist: Artist[]
    "@attr": Attr
}

export interface Artist {
    name: string
    mbid: string
    match: string
    url: string
    image: Image[]
    streamable: string
}

export interface Image {
    "#text": string
    size: string
}

export interface Attr {
    artist: string
}
