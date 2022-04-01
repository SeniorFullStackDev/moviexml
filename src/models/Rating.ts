import { JsonObject, JsonProperty } from 'json2typescript';
import Country from './Country';

@JsonObject('Rating')
export default class Rating {

  @JsonProperty('Region', Country)
  public Region: Country;

  @JsonProperty('System', String)
  public System: string;

  @JsonProperty('Value', String)
  public Value: string;

  @JsonProperty('Reason', String)
  public Reason?: string;

  constructor(region: Country, system: string, value: string, reason?: string) {
    this.Region = region;
    this.System = system;
    this.Value = value;
    this.Reason = reason;
  }
}