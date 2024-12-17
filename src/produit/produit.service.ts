import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProduitDto } from "./produit.dto";
import { Produit } from "./produit.entity";

@Injectable()
export class ProduitService {
    constructor(
        @InjectRepository(Produit)
        private produitRepository: Repository<Produit>
    ){}

    findAll(): Promise<Produit[]> {
        return this.produitRepository.find();
    }

    findOne(id: number): Promise<Produit> {
        return this.produitRepository.findOneBy( {id: id});
    }

    create(data: ProduitDto): Promise<Produit> {
       const produit = new Produit();
       produit.nom = data.nom;
       produit.quantiteEnStock = data.quantiteEnStock;
       produit.dateCreation = new Date();

       const produitCreate = this.produitRepository.create(produit);

        return this.produitRepository.save(produitCreate)
    }
}