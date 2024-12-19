import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuController } from './controller/menu.controller';
import { Composition } from './entity/composition.entity';
import { Ingredient } from './entity/ingredient.entity';
import { Menu } from './entity/menu.entity';
import { MenuService } from './service/menu.service';
import { CompositionService } from './service/composition.service';
import { IngredientService } from './service/ingredient.service';


@Module({
  imports: [TypeOrmModule.forRoot({
    type:'mysql',
    host: 'localhost',
    port: 3306,
    username: "root",
    password: "admin",
    database: "gestion_restaurant",
    autoLoadEntities: true,
    synchronize: true
  }), TypeOrmModule.forFeature([Menu, Ingredient, Composition])],
  controllers: [AppController, MenuController],
  providers: [AppService, MenuService, IngredientService, CompositionService],
})
export class AppModule {}
