import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('SequenceInfo')
export default class SequenceInfo {
  
  @JsonProperty('Number', Number)
  public Number: number;

  constructor(num: number) {
    this.Number = num;
  }
}