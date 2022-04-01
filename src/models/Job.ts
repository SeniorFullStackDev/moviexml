import { JsonObject, JsonProperty } from 'json2typescript';
import { JobFunction } from 'types/enums';

@JsonObject('Job')
export default class Job {
  @JsonProperty('JobFunction', JobFunction)
  public JobFunction: JobFunction;

  @JsonProperty('BillingBlockOrder', Number)
  public BillingBlockOrder?: number;

  constructor(JobFunction: JobFunction) {
    this.JobFunction = JobFunction;
  }
}