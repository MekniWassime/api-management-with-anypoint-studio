import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { Pet } from '../entities/pet.entity';

@Injectable()
export class PetService {
  constructor(
    @InjectRepository(Pet) private readonly repository: Repository<Pet>,
  ) {}

  public async addPet(pet: Pet): Promise<Pet> {
    return await this.repository.save(pet);
  }

  public async getPets(): Promise<Pet[]> {
    return await this.repository.find();
  }

  public async deletePet(id: number): Promise<DeleteResult> {
    return await this.repository.delete(id);
  }

  public async updatePet(id: number, pet: Pet): Promise<UpdateResult> {
    return await this.repository.update(id, pet);
  }
}
