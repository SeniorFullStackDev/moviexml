export type LocalizedInfoType = {
    '@Language':string;
    ArtReference:ArtReferenceType[];
    TitleDisplayUnlimited:string;
    Summary400:string;
    Genre:GenreType[];
    TitleDisplay19?:string;
}

export type ArtReferenceType = {
    '@resolution':string,
    '@purpose':string,
    'value':string
}

export type GenreType = {
    '@resolution':string,
    '@purpose':string,
    'value':string
}