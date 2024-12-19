import { Ingredient } from "src/entity/ingredient.entity";
import { Menu } from "src/entity/menu.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('composition')
export class Composition{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantite: number;

    @ManyToOne(type => Ingredient)
    @JoinColumn({name: 'idIngredient'})
    ingredient: Ingredient;

    @ManyToOne(type => Menu)
    @JoinColumn({name: 'idMenu'})
    menu: Menu;
}