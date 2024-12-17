import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Ingredient } from "./ingredient.entity";
import { IngredientService } from "./ingredient.service";

@Module({
    imports: [TypeOrmModule.forFeature([Ingredient])],
    controllers: [],
    providers: [IngredientService]
})
export class IngredientModule {}