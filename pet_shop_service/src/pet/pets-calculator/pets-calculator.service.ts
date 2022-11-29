import { PetService } from './../services/pet.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PetsCalculatorService {
  constructor(private readonly service: PetService) {}

  getTotalSalary = async (): Promise<number> => {
    const employees = await this.service.getPets();
    let total = 0;
    employees.forEach((element) => {
      total += element.salary;
    });
    return total;
  };
}
