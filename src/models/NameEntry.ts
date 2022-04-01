import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('NameEntry')
export default class NameEntry {
  @JsonProperty('@language')
  public language?: string;

  @JsonProperty('@Value', String)
  public Value: string;

  constructor (val: string, lang?: string) {
    this.language = lang;
    this.Value = val;
  }
}