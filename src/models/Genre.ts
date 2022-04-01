import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Genre')
export default class Genre {

  @JsonProperty('@ID', String)
  public ID: string;

  @JsonProperty('@level', Number)
  public level?: number;

  @JsonProperty('@source', String)
  public source?: string;

  constructor(id: string) {
    this.ID = id;
  }
}