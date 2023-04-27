import Pokemon from "../models/pokemon";

export const createPokemon = (poke: any) => {
    const {
        id,
        abilities,
        name,
        base_experience,
        sprites : { back_default, other : {dream_world : { front_default }}},
        types,
        stats : estadisticas,
        weight} = poke;
    let tipos = types.map((type: any) => type.type.name);
    let abs = abilities.map((ab: any) => ab.ability.name)
    let stats = estadisticas.map((st: any) => ({name: st.stat.name, value: st.base_stat})); 
    const newPokemon = new Pokemon(id, name, base_experience, [back_default, front_default], tipos, abs, stats, weight);    
    return newPokemon;
}