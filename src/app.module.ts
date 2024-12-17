import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientModule } from './ingredient/ingredient.module';
import { MenuModule } from './menu/menu.module';
import { ProduitModule } from './produit/produit.module';

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
  }),ProduitModule, MenuModule, IngredientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
