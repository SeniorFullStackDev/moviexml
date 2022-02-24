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

export type ReleaseType = {
    ReleaseType:string;
    DistrTerritory : {
        country:string;
    };
    Date:string;
}

export type AltIdentifierType = {
    Namespace:string;
    Identifier:string;
}

export type CompatibilityType = {
    SpecVersion:string;
    Profile:string;
}

export type InventoryType = {
    Videos:VideoType[];
    Audios:AudioType[];
    Subtitles:SubtitleType[];
}

export type TrackReferenceType = {
    VideoTrackReference: {
        VideoTrackReference?:{
            VideoTrackID:string;
        };
        AudioTrackReference?:{
            AudioTrackID:string;
        };
        SubtitleTrackReference?: {
            SubtitleTrackID:string;
        }
    }
}

export type PresentationType = {
    '@PresentationID':string;
    TrackMetadata:{
        TrackSelectionNumber:number;
        TrackReferences:TrackReferenceType[];
    }
}

export type PresentationsType = {
    Presentation:PresentationType
}

export type PlayableSequenceType = {
    '@PlayableSequenceID':string;
    Clip: {
        '@sequence':string
        PresentationID:string
    }
}
export type PlayableSequencesType = {
    PlayableSequences:PlayableSequenceType[]
}

export type ExperienceType = {
    '@ExperienceID':string;
    '@version':string;
    Audiovisual: {
        Type:string;
        SubType:string;
        PlayableSequenceID:string;
    }
}

export type ExperiencesType = {
    Experience:ExperienceType[]
}
export type ALIDExperienceMapType = {
    ALID:string;
    ExperienceID:string;
}
export type ALIDExperienceMapsType = {
    ALIDExperienceMaps:ALIDExperienceMapType[]
}

export type VideoType = {
    '@VideoTrackID':string;
    Type:string;
    Picture:PictureType
    Language:string;
    ContainerReference:{
        ContainerLocation:string
    };
}

export type XYType = {
    ChromaticityCIEx:string;
    ChromaticityCIEy:string;
}

export type MasteredColorVolumeType = {
    PrimaryRChromaticity:XYType;
    PrimaryGChromaticity:XYType;
    PrimaryBChromaticity:XYType;
    WhitePointChromaticity:XYType;
    LuminanceMin:string;
    LuminanceMax:string;
}

export type LightLevelType = {
    ContentMax:string;
    FrameAverageMax:string;
}
 
export type PictureType = {
    AspectRatio:string;
    WidthPixels:string;
    HeightPixels:string;
    MasteredColorVolume:MasteredColorVolumeType;
    LightLevel:LightLevelType;
}

export type AudioType = {
    '@AudioTrackID':string;
    Type:string;
    Language:string;
    ContainerReference: {
        ContainerLocation:string;
    }
}

export type FrameRateType = {
    '@multiplier':string;
    timecode:string;
    value:number;
}

export type SubtitleType = {
    '@SubtitleTrackID':string;
    Format:string;
    Type:string;
    Language:string;
    Encoding:{
        FrameRate:FrameRateType
    };
    ContainerReference:{
        ContainerLocation:string;
    }
}