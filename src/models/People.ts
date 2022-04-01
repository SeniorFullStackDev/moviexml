import { JsonObject, JsonProperty } from 'json2typescript';
import Job from './Job';
import Name from './Name';

@JsonObject('People')
export default class People {

  @JsonProperty('Job', Job)
  public Job: Job;

  @JsonProperty('Name', Name)
  public Name: Name;

  constructor(name: Name, job: Job) {
    this.Name = name;
    this.Job = job;
  }
}