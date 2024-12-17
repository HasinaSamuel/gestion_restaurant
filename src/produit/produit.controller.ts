import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ProduitDto } from "./produit.dto";
import { Produit } from "./produit.entity";
import { ProduitService } from "./produit.service";

@Controller('produit')
export class ProduitController{
    constructor(private produitService: ProduitService){}

    @Get()
    findAll(): Promise<Produit[]>{
        return this.produitService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number): Promise<Produit> {
        return this.produitService.findOne(id);
    }
    
    @Post()
    create(@Body()data : ProduitDto): Promise<Produit> {
        return this.produitService.create(data);
    }
}