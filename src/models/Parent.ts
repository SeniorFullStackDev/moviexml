import { JsonObject, JsonProperty } from 'json2typescript';
import { RelationshipType } from 'types/enums';

@JsonObject('Parent')
export default class Parent {

  @JsonProperty('@relationshipType', RelationshipType)
  public relationshipType: RelationshipType;

  @JsonProperty('ParentContentID', String)
  public ParentContentID: string;

  constructor(type: RelationshipType, parentContentId: string) {
    this.relationshipType = type;
    this.ParentContentID = parentContentId;
  }
}