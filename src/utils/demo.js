export const mec = {
  'BasicMetadata-type': {
    '@ContentID': 'md:cid:org:amzn_studios_example:HighCastle1_1',
    'LocalizedInfo': {
      '@Language': 'en-US',
      'ArtReference': {
        '@resolution':'2560x1920',
        '@purpose':'boxart',
        'value':'TheGreatMovie-US-4x3.jpg'
      },
      'TitleDisplayUnlimited': 'The New World d',
      'Summary400': 'It\'s 1962, America has lost WWII; the east is the Greater Nazi Reich and the west, the Japanese Pacific States. Amidst this oppression there is new hope - films that seem to show a different world. When her sister gives her a film and is then murdered, a woman comes to believe the films hold the key to freedom and becomes obsessed with finding their mysterious guardian, The Man in the High Castle.',
      'Genre': {
        '@ID': 'av_genre_drama'
      },
      'TitleDisplay19': ''
    },
    'ReleaseHistory': {
      'ReleaseType': 'SVOD',
      'DistrTerritory': {
        'country': 'US'
      },
      'Date': '2015-01-15'
    },
    'WorkType': 'episode',
    'AltIdentifier': {
      'Namespace': 'ORG',
      'Identifier': 'HighCastle1_1'
    },
    'RatingSet': {
      'Rating': {
        'Region': {
          'Country': 'US'
        },
        'System': 'TVPG',
        'Value': 'TV-MA'
      }
    },
    'People': {
      'Job': {
        'JobFunction': 'Actor',
        'BillingBlockOrder': '1'
      }
    },
    'OriginalLanguage': 'en-US',
    'AssociatedOrg': {
      '@organizationID': 'prodtest',
      '@role': 'licensor'
    },
    'SequenceInfo': {
      'Number': '1'
    },
    'Parent': {
      '@relationshipType': 'isepisodeof',
      'ParentContentID': 'md:cid:org:amzn_studios_example:HighCastle1'
    }
  },
  'TitleDisplayUnlimited': 'TitleDisplayUnlimited',
  '@Resolution': '2560x1920',
  '@Purpose': 'boxart',
  'Summary190': '',
  'DisplayName': 'Alexa Davalos',
  '@language': 'en-US',
  'CompanyDisplayCredit': {
    'DisplayString': {
      'value': 'Amazon Studios',
      '@language': 'en-US'
    }
  }
}

export const mmc = {
  'Compatibility': {
    'SpecVersion': '1.5',
    'Profile': 'MMC-1'
  },
  'Inventory': {
    'Audio': {
      '@AudioTrackID': 'md:vidtrackid:org:amazon_studios:MIHC_101_STM:episode.video.HDR',
      'Type': 'primary',
      'Language': 'en-US',
      'ContainerReference': {
        'ContainerLocation': 'file://MIHC-101-HDR.mov'
      }
    },
    'Video': {
      '@VideoTrackID': 'md:vidtrackid:org:amazon_studios:MIHC_101_STM:episode.video.HDR',
      'Type': 'primary',
      'Picture': {
        'AspectRatio': '16:9',
        'WidthPixels': '3840',
        'HeightPixels': '2160',
        'MasteredColorVolume': {
          'PrimaryRChromaticity': {
            'ChromaticityCIEx': '0.680',
            'ChromaticityCIEy': '0.320'
          },
          'PrimaryGChromaticity': {
            'ChromaticityCIEx': '0.265',
            'ChromaticityCIEy': '0.690'
          },
          'PrimaryBChromaticity': {
            'ChromaticityCIEx': '0.150',
            'ChromaticityCIEy': '0.060'
          },
          'WhitePointChromaticity': {
            'ChromaticityCIEx': '0.3127',
            'ChromaticityCIEy': '0.3290'
          },
          'LuminanceMin': '0.0001',
          'LuminanceMax': '1000'
        },
        'LightLevel': {
          'ContentMax': '1000',
          'FrameAverageMax': '820'
        }
      },
      'Language': 'en-US',
      'ContainerReference': {
        'ContainerLocation': 'file://MIHC-101-HDR.mov'
      }
    },
    'Subtitle': {
      '@SubtitleTrackID': 'md:subtrackid:org:amazon_studios:MIHC_101_STM:episode.Subtitle.pt-BR',
      'Format': 'ITT',
      'Type': 'normal',
      'Language': 'pt-BR',
      'Encoding': {
        'FrameRate': {
          '@multiplier': '1000/1001',
          '@timecode': 'NonDrop',
          'value': '24'
        }
      },
      'ContainerReference': {
        'ContainerLocation': 'file://MIHC-101-subtitle-pt-BR.itt'
      }
    },
    'Presentation': {
      '@PresentationID': 'md:presentationid:org:amazon_studios:MIHC_101_STM:episode.presentation',
      'TrackMetadata': {
        'TrackSelectionNumber': '0',
        'VideoTrackReference': {
          'VideoTrackID': 'md:vidtrackid:org:amazon_studios:MIHC_101_STM:episode.video.HDR'
        },
        'AudioTrackReference': {
          'AudioTrackID': 'md:vidtrackid:org:amazon_studios:MIHC_101_STM:episode.video.HDR'
        },
        'SubtitleTrackReference': {
          'SubtitleTrackID': 'md:subtrackid:org:amazon_studios:MIHC_101_STM:episode.Subtitle.pt-BR'
        }
      }
    },
    'PlayableSequences': {
      'PlayableSequence': {
        'PlayableSequenceID': 'md:playablesequenceid:org:amazon_studios:MIHC_101_STM:episode.US',
        'Clip': {
          '@sequence': '0',
          'PresentationID': 'md:presentationid:org:amazon_studios:MIHC_101_STM:episode.presentation'
        }
      }
    },
    'Experiences': {
      '@ExperienceID': 'md:experienceid:org:amazon_studios:MIHC_101_STM',
      '@version': '1.0',
      'Audiovisual': {
        '@ContentID': 'md:cid-s:MIHC_101_STM',
        'Type': 'Main',
        'SubType': 'Episode',
        'PlayableSequenceID': 'md:playablesequenceid:org:amazon_studios:MIHC_101_STM:episode.US'
      }
    },
    'ALIDExperienceMaps': {
      'ALIDExperienceMap': {
        'ALID': 'md:alid:org:amazon_studios:MIHC_101_STM',
        'ExperienceID': 'md:experienceid:org:amazon_studios:MIHC_101_STM'
      }
    }
  }
}