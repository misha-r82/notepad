import {TopicModel} from './topic.model';

export class CategoryModel
{
  public category: string;
  public topics: TopicModel[];
  public constructor(name)
  {
    this.category = name;
  }
}
