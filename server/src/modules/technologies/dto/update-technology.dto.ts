import { Field, InputType, Int, PartialType } from '@nestjs/graphql';
import { CreateTechnologyRequest } from './create-technology.dto';

@InputType()
export class UpdateTechnologyRequest extends PartialType(
  CreateTechnologyRequest,
) {
  @Field(() => Int)
  id: number;
}
