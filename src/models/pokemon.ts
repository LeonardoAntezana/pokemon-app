class Pokemon{
    id: number;
    name: string;
    base_experience: number;
    images: string[];
    types: string[];
    abilities: [];
    stats : [];
    weight: number;
    constructor( id: number, name: string, base_experience: number, images: string[], types: string [], abilities: [], stats : [], weight: number,) {
        this.id = id;
        this.name = name;
        this.base_experience = base_experience;
        this.images = images;
        this.types = types;
        this.abilities = abilities;
        this.stats = stats;
        this.weight = weight;
    }
} 

export default Pokemon;