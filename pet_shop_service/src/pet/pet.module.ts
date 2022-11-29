import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PetController } from './controller/pet.controller';
import { Pet } from './entities/pet.entity';
import { PetService } from './services/pet.service';
import { PetsCalculatorService } from './pets-calculator/pets-calculator.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pet])],
  providers: [PetService, PetsCalculatorService],
  controllers: [PetController],
})
export class PetModule {}
