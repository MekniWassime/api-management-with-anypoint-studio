import { PetsCalculatorService } from '../pets-calculator/pets-calculator.service';
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
import { get } from 'http';

@Controller('/employees')
export class PetController {
  constructor(
    private readonly petService: PetService,
    private readonly calcService: PetsCalculatorService,
  ) {}
  @Get()
  public async getall(): Promise<Pet[]> {
    return await this.petService.getPets();
  }

  @Post()
  public async add(@Body() pet: Pet): Promise<Pet> {
    return await this.petService.addPet(pet);
  }

  @Delete('/:id')
  public async delete(@Param('id') id: number) {
    return await this.petService.deletePet(id);
  }

  @Put('/:id')
  public async update(@Param('id') id: number, @Body() pet: Pet) {
    return await this.petService.updatePet(id, pet);
  }

  @Get('/salary/eu')
  public async salaryEu() {
    return await this.calcService.getTotalSalary();
  }

  @Get('/salary/ds')
  public async salaryDs() {
    return (await this.calcService.getTotalSalary()) * 1.7;
  }
}
