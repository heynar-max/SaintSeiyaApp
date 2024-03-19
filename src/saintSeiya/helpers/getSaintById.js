import { saint } from "../data/saintseiya"


export const getSaintById = ( id ) => {
    
    return saint.find(saint => saint.id === id)
}
