import { InjectRepository } from "@nestjs/typeorm";
import { Ingredient } from "src/entity/ingredient.entity";
import { Menu } from "src/entity/menu.entity";
import { Repository } from "typeorm";
import { CompositionDto } from "../dto/composition.dto";
import { Composition } from "../entity/composition.entity";

export class CompositionService {
    constructor(

        @InjectRepository(Ingredient)
        private ingredientRepository: Repository<Ingredient>,

        @InjectRepository(Composition)
        private compositionRepository: Repository<Composition>,

        @InjectRepository(Menu)
        private menuRepository: Repository<Menu>
    ){}

    async create(data: CompositionDto):Promise<Composition> {
        const composition = new Composition();
        composition.quantite = data.quantite;
        composition.ingredient = await this.ingredientRepository.findOneBy({id:data.ingredient})
        composition.menu = await this.menuRepository.findOneBy({id:data.menu})
        const creationComposition = this.compositionRepository.create(composition);
        return this.compositionRepository.save(creationComposition);
    }
}