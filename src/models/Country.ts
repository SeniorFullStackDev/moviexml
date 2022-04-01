import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Country')
export default class Country {
  @JsonProperty('country', String)
  public Code = '';
  public Name = '';
}