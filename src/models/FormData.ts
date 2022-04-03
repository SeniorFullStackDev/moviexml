type FormType = 'form'|'text-field'|'select'|'date-fielld'|'array';

export default class FormData {
  order?:number;
  name:string;
  parentName?:string;
  label:string;
  type:FormType;
  required: boolean;
  children?: FormData[]
  constructor(_label:string, _name:string, _type:FormType, _required:boolean, _children?:FormData[], _order?:number){
    this.name = _name;
    this.type = _type;
    this.required = _required;
    this.children = _children;
    this.order = _order;
    this.label = _label;
  }
  addChildForm(form:FormData){
    form.parentName = this.name;
    if(this.children) {
      form.order = this.children.length;
      this.children.push(form);
    }else{  
      form.order = 0;
      this.children = [form];
    }
  }
}