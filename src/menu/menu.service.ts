import { Injectable } from "@nestjs/common";
import { DataSource } from "typeorm";
import { Menu } from "./menu.entity";

@Injectable()
export class MenuService {
    constructor(
        private dataSource: DataSource
    ){}

    findAll(): Promise<any>{
        return this.dataSource.manager.find(Menu);
    }
}