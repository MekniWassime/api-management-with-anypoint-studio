import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pet')
export class Pet {
  @PrimaryGeneratedColumn('increment')
  id?: number;
  @Column({
    type: String,
    name: 'Name',
    nullable: false,
  })
  name?: string;
  @Column({
    type: String,
    name: 'FamilyName',
    nullable: false,
  })
  familyName?: string;
  @Column({
    type: Number,
    name: 'Salary',
    nullable: false,
  })
  salary?: number;
}
