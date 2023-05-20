export interface TopAlbumTagsModel {
    toptags: Toptags
}

export interface Toptags {
    tag: Tag[]
    "@attr": Attr
}

export interface Tag {
    count: number
    name: string
    url: string
}

export interface Attr {
    artist: string
    album: string
}
