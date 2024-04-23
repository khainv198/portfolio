import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateTechnologyRequest {
  @Field()
  name: string;

  @Field()
  image: string;
}
