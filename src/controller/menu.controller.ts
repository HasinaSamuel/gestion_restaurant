import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { CompositionDto } from "src/dto/composition.dto";
import { CompositionService } from "src/service/composition.service";
import { IngredientService } from "src/service/ingredient.service";
import { CreationMenuDto } from "../dto/creationMenu.dto";
import { MenuService } from "../service/menu.service";

@Controller('menu')
export class MenuController{
    constructor(
        private menuService: MenuService, 
        private compositionService: CompositionService,
        private ingediantService: IngredientService
        ){}

    @Post()
    async create(@Body() data: CreationMenuDto): Promise<string>{
        const listeIngredient = data.ingredients;
        if(listeIngredient.length > 0){
            let idMenu;
            await this.menuService.create(data.nom).then(data => {
                idMenu = data.id;
            })

            listeIngredient.forEach(item => {
                const dataInput = new CompositionDto();
                dataInput.ingredient = item.ingrediant;
                dataInput.menu = idMenu;
                dataInput.quantite = item.quantite;
                this.ingediantService.diminuQuantiteStock(item.ingrediant, item.quantite);
                this.compositionService.create(dataInput);         
            })
        }
        return "menu creer"
    }

    @Get(':id')
    getListeComposant(@Param('id') id : number): Promise<any> {
        return this.menuService.findCompositionByIdMeny(id);
    }
}