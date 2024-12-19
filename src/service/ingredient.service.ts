import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository} from "typeorm";
import { IngrediantDto } from "../dto/ingrediant.dto";
import { Ingredient } from "../entity/ingredient.entity";

@Injectable()
export class IngredientService{
    constructor(  
        @InjectRepository(Ingredient)
        private ingrediantRepository: Repository<Ingredient>
    ){}

    findAll(): Promise<Ingredient[]> {
        return this.ingrediantRepository.find();
    }

   findOne(id: number): Promise<Ingredient> {
       return this.ingrediantRepository.findOneBy({id:id})
   }

   create(input: IngrediantDto): Promise<Ingredient> {
       const ingrediant = new Ingredient();
       ingrediant.nom = input.nom;
       ingrediant.quantiteEnStock = input.quantite;
       const creationIngrediant = this.ingrediantRepository.create(ingrediant);
       return this.ingrediantRepository.save(creationIngrediant);
   }

   async update(id: number, data: Partial<IngrediantDto>): Promise<Ingredient> {
         await this.ingrediantRepository.update(id, data);
       return this.ingrediantRepository.findOneBy({id:id})
   }

   async diminuQuantiteStock(id: number, quantite: number): Promise<void>{
       const ingrediant = await this.findOne(id);
       ingrediant.quantiteEnStock = (ingrediant.quantiteEnStock - quantite);
       this.ingrediantRepository.save(ingrediant);
   }

   async remove(id: number): Promise<void> {
      await this.ingrediantRepository.delete(id);
   }
}