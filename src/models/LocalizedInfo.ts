import { JsonObject, JsonProperty } from 'json2typescript';
import Genre from './Genre';

@JsonObject('LocalizedInfo')
export default class LocalizedInfo {

  @JsonProperty('@Language', String)
  public Language: string;

  @JsonProperty('TitleDisplayUnlimited', String)
  public TitleDisplayUnlimited = '';

  @JsonProperty('TitleDisplay19', String)
  public TitleDisplay19?: string;

  @JsonProperty('TitleDisplay60', String)
  public TitleDisplay60?: string;

  @JsonProperty('Summary190', String)
  public Summary190?: string;

  @JsonProperty('Summary400', String)
  public Summary400 = '';

  @JsonProperty('Summary4000', String)
  public Summary4000?: string;

  @JsonProperty('Genres', [Genre])
  public Genres: Genre[] = [];

  constructor(lang: string) {
    this.Language = lang;
  }
}