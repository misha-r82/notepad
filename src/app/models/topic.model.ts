import {CategoryModel} from "./category.model";

export class TopicModel
{
  public header: string;
  public text: string;
  private isActive: boolean;
  public category: CategoryModel;
  public constructor(header: string, text:string, category: CategoryModel)
  {
    this.header = header;
    this.text = text;
    this.category = category;
    this.isActive = false;
  }
  get IsActive (): boolean
  {
    return this.isActive;
  }
  set IsActive(value: boolean)
  {
    if (value === true)
      this.category.topics.forEach(t=>t.isActive = false);
    this.isActive = value;
  }
}
