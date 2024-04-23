import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { Technology } from '../entities/technology.entity';

@InputType()
export class GetTechnologiesRequest {
  @Field(() => Int)
  page: number;

  @Field(() => Int)
  limit: number;
}

@ObjectType()
export class GetTechnologiesResponse {
  @Field(() => [Technology])
  items: Technology[];

  @Field(() => Int)
  total: number;
}
