import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class GetTechnologyRequest {
  @Field(() => Int)
  id: number;
}
