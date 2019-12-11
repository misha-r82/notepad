import {CategoryModel} from "./category.model";

export class TopicModel
{
  public header: string;
  public text: string;
  public category: CategoryModel;
  public constructor(header: string, text:string, category: CategoryModel)
  {
    this.header = header;
    this.text = text;
    this.category = category;
  }
}
