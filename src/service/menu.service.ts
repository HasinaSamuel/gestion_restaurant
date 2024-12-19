import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Composition } from "src/entity/composition.entity";
import { Repository } from "typeorm";
import { Menu } from "../entity/menu.entity";

@Injectable()
export class MenuService {
    constructor(
        @InjectRepository(Menu)
        private menuRepository: Repository<Menu>,

        @InjectRepository(Composition)
        private compositionRepository: Repository<Composition>
    ){}

    findAll(): Promise<Menu[]>{
        return this.menuRepository.find();
    }

    findCompositionByIdMeny(id: number): Promise<any>{
        return this.compositionRepository.find({where: {menu:{id:id}}, relations: {
            ingredient: true
        }})
    }

    findOn(id: number): Promise<Menu>{
        return this.menuRepository.findOneBy({id:id})
    }

    create(nom: string): Promise<Menu> {
        const menu = new Menu();
        menu.nom = nom;
        const menuCreate = this.menuRepository.create(menu);
        return this.menuRepository.save(menuCreate);
    }
}