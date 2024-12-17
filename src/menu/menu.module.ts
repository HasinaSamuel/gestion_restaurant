import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Menu } from "./menu.entity";
import { MenuService } from "./menu.service";

@Module({
    imports: [TypeOrmModule.forFeature([Menu])],
    controllers: [],
    providers : [MenuService]
})
export class MenuModule {}