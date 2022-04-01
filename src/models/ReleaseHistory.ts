import { JsonObject, JsonProperty } from 'json2typescript';
import { ReleaseType } from 'types/enums';
import Country from './Country';

@JsonObject('ReleaseHistory')
export default class ReleaseHistory {
  @JsonProperty('ReleaseType', ReleaseType)
  public ReleaseType: ReleaseType = ReleaseType.SVOD;

  @JsonProperty('DistrTerritory', Country)
  public DistrTerritory: Country;

  @JsonProperty('Date', String)
  public Date = '';

  constructor (distrTerritory: Country) {
    this.DistrTerritory = distrTerritory;
  }
}