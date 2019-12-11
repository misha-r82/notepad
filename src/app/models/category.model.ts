import {TopicModel} from './topic.model';

export class CategoryModel
{
  public category: string;
  public topics: TopicModel[];
  public constructor(name, topics:TopicModel[])
  {
    this.category = name;
    this.topics = topics || [];
  }
}
