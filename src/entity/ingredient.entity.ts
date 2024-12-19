
import { Column, Entity,PrimaryGeneratedColumn } from "typeorm";

@Entity('ingrediant')
export class Ingredient{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    quantiteEnStock: number;
}