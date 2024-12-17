import { type } from "os";
import { Menu } from "src/menu/menu.entity";
import { Produit } from "src/produit/produit.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('ingrediant')
export class Ingredient{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantite: number

    @ManyToOne(type => Produit)
    @JoinColumn({name: 'produit'})
    produit: Produit

    @ManyToOne(type => Menu)
    @JoinColumn({name: 'menu'})
    menu: Menu
}