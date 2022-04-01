import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('CompanyDisplayCreditEntry')
export class CompanyDisplayCreditEntry {
  @JsonProperty('DisplayString', String)
  public DisplayString = '';

  @JsonProperty('@language', String)
  public language?: string;
}

@JsonObject('CompanyDisplayCredit')
export default class CompanyDisplayCredit {
  @JsonProperty('DisplayString', [CompanyDisplayCredit])
  public CreditEntries: CompanyDisplayCredit[] = [];
}