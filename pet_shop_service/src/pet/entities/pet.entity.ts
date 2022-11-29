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
    name: 'Kind',
    nullable: false,
  })
  kind?: string;
  @Column({
    type: Number,
    name: 'Price',
    nullable: false,
  })
  price?: number;
}
