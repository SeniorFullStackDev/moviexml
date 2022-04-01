import { JsonObject, JsonProperty } from 'json2typescript';
import { WorkType } from 'types/enums';
import AssociatedOrg from './AssociatedOrg';
import LocalizedInfo from './LocalizedInfo';
import Parent from './Parent';
import Rating from './Rating';
import ReleaseHistory from './ReleaseHistory';
import SequenceInfo from './SequenceInfo';

@JsonObject('BasicMetadata-type')
export default class MECBasicMetadata {  

  @JsonProperty('@ContentID', String)
  public ContentID: string;

  @JsonProperty('LocalizedInfo', [LocalizedInfo])
  public LocalizedInfos: LocalizedInfo[] = [];

  @JsonProperty('ReleaseYear', String)
  public ReleaseYear = '';

  @JsonProperty('ReleaseDate', String)
  public ReleaseDate = '';

  @JsonProperty('ReleaseHistory', ReleaseHistory)
  public ReleaseHistory?: ReleaseHistory;

  @JsonProperty('WorkType', WorkType)
  public WorkType: WorkType = WorkType.EPISODE;

  @JsonProperty('RatingSet', [Rating])
  public RatingSet: Rating[] = [];

  @JsonProperty('OriginalLanguage', String)
  public OriginalLanguage: string;
  
  @JsonProperty('AssociatedOrg')
  public AssociatedOrg: AssociatedOrg;

  @JsonProperty('SequenceInfo')
  public SequenceInfo?: SequenceInfo;

  @JsonProperty('Parent', Parent)
  public Parent?: Parent;

  constructor(contentID: string, originalLanguage: string, associatedOrg: AssociatedOrg) {
    this.ContentID = contentID;
    this.OriginalLanguage = originalLanguage;
    this.AssociatedOrg = associatedOrg;
  }
}