import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('AssociatedOrg')
export default class AssociatedOrg {
  @JsonProperty('@organizationalID', String)
  public organizationalID: string;

  @JsonProperty('@idType', String)
  public idType?: string;

  @JsonProperty('@role', String)
  public role: string;

  constructor(orgID: string, role: string) {
    this.organizationalID = orgID;
    this.role = role;
  }
}