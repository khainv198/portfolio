import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTechnologyRequest } from './dto/create-technology.dto';
import {
  GetTechnologiesRequest,
  GetTechnologiesResponse,
} from './dto/get-technologies.dto';
import { GetTechnologyRequest } from './dto/get-technology.dto';
import { UpdateTechnologyRequest } from './dto/update-technology.dto';
import { Technology } from './entities/technology.entity';

@Injectable()
export class TechnologiesService {
  constructor(
    @InjectRepository(Technology)
    private readonly technologiesRepository: Repository<Technology>,
  ) {}

  async getTechnologies({
    page,
    limit,
  }: GetTechnologiesRequest): Promise<GetTechnologiesResponse> {
    const [items, total] = await this.technologiesRepository.findAndCount({
      skip: (page - 1) * limit,
      take: limit,
    });

    return { items, total };
  }

  getTechnology({ id }: GetTechnologyRequest) {
    return this.technologiesRepository.findOneBy({ id });
  }

  createTechnologies(input: CreateTechnologyRequest) {
    return this.technologiesRepository.save(
      this.technologiesRepository.create(input),
    );
  }

  async updateTechnology({ id, name, image }: UpdateTechnologyRequest) {
    await this.technologiesRepository.update(id, { name, image });
    return await this.getTechnology({ id });
  }
}
