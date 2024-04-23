import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Technology } from './entities/technology.entity';

import { CreateTechnologyRequest } from './dto/create-technology.dto';
import {
  GetTechnologiesRequest,
  GetTechnologiesResponse,
} from './dto/get-technologies.dto';
import { GetTechnologyRequest } from './dto/get-technology.dto';
import { UpdateTechnologyRequest } from './dto/update-technology.dto';
import { TechnologiesService } from './technologies.service';

@Resolver(() => Technology)
export class TechnologiesResolver {
  constructor(private readonly technologiesService: TechnologiesService) {}

  @Query(() => GetTechnologiesResponse)
  async getTechnologies(@Args('input') input: GetTechnologiesRequest) {
    return await this.technologiesService.getTechnologies(input);
  }

  @Query(() => Technology)
  async getTechnology(@Args('input') input: GetTechnologyRequest) {
    return await this.technologiesService.getTechnology(input);
  }

  @Mutation(() => Technology)
  async createTechnology(@Args('input') input: CreateTechnologyRequest) {
    return this.technologiesService.createTechnologies(input);
  }

  @Mutation(() => Technology)
  async updateTechnology(@Args('input') input: UpdateTechnologyRequest) {
    return await this.technologiesService.updateTechnology(input);
  }
}
