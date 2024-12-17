import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProduitController } from "./produit.controller";
import { Produit } from "./produit.entity";
import { ProduitService } from "./produit.service";


@Module({
    imports: [TypeOrmModule.forFeature([Produit])],
    controllers: [ProduitController],
    providers: [ProduitService]
})
export class ProduitModule {}