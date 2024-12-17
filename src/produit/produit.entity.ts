import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('produit')
export class Produit {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nom: string;

    @Column()
    quantiteEnStock: number;

    @Column()
    dateCreation: Date;
}