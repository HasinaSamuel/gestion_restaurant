export class ItemIngrediant {
    ingrediant: number;
    quantite: number
}

export class CreationMenuDto{
    nom: string;
    ingredients: ItemIngrediant[];
}