import { Ingredient } from "src/entity/ingredient.entity";
import { Column, Entity,OneToMany,PrimaryGeneratedColumn } from "typeorm";

@Entity('menu')
export class Menu {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column({default: 'creer'})
    statut: string;
}