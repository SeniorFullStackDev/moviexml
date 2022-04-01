import { JsonObject, JsonProperty } from 'json2typescript';
import NameEntry from './NameEntry';

@JsonObject('Name')
export default class Name {
  @JsonProperty('DisplayName', [NameEntry])
  public DisplayName: NameEntry[];

  @JsonProperty('ShortName', [NameEntry])
  public ShortName?: NameEntry[];

  @JsonProperty('FirstGivenName', String)
  public FirstGivenName?: string;
  
  @JsonProperty('SecondGivenName', String)
  public SecondGivenName?: string;

  @JsonProperty('FamilyName', String)
  public FamilyName?: string;

  @JsonProperty('Suffix', String)
  public Suffix?: string;

  @JsonProperty('Moniker', String)
  public Moniker?: string;

  constructor(name: NameEntry[]) {
    this.DisplayName = name;
  }
}