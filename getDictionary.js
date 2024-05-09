

const dictionaries = {
    en :()=> import('./dictionaries/en.json').then(r=>r.default),
    ar :()=> import('./dictionaries/ar.json').then(r=>r.default),
    sp :()=> import('./dictionaries/sp.json').then(r=>r.default),
    }
    
    export const getDictionary =(lang)=>{
    return dictionaries[lang]();
    }