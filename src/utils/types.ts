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
    '@source':string,
    '@id':string,
    '@level':string
}

export type FormType = {
    parentKey:string;
}

export type RatingType = {
    Region: { country:string };
    System: string;
    Value: string;
}
export type RatingSetType = {
    ratings: RatingType[];
}

export type PeopleType = {
    Job:{
        JobFunction:string;
        BillingBlockOrder:number;
    },
    Name: {
        '@language':string;
        DisplayName:string;
    },
}