import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PetService } from '../services/pet.service';
import { Pet } from '../entities/pet.entity';

@Controller('/pet')
export class PetController {
  constructor(private readonly petService: PetService) {}
  @Get()
  public async getPets(): Promise<Pet[]> {
    return await this.petService.getPets();
  }

  @Post()
  public async addPet(@Body() pet: Pet): Promise<Pet> {
    return await this.petService.addPet(pet);
  }

  @Delete('/:id')
  public async deletePet(@Param('id') id: number) {
    return await this.petService.deletePet(id);
  }

  @Put('/:id')
  public async updatePet(@Param('id') id: number, @Body() pet: Pet) {
    return await this.petService.updatePet(id, pet);
  }
}
