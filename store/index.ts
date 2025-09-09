import { createContext, useContext } from 'react';
import SearchStore from './stores/searchStore';
import CommonStore from './stores/commonStore';
import WikiPageStore from './stores/wikiPageStore';
import SearchBooksStore from './stores/searchBooksStore';
import WikiBookStore from './stores/wikiBookStore';

interface Store {
    commonStore: CommonStore;
    searchStore: SearchStore;
    searchBooksStore: SearchBooksStore;
    wikiBookStore: WikiBookStore;
    wikiPageStore: WikiPageStore;
}

export const store: Store ={
    commonStore: new CommonStore(),
    searchStore: new SearchStore(),
    searchBooksStore: new SearchBooksStore(),
    wikiBookStore: new WikiBookStore(),
    wikiPageStore: new WikiPageStore(),
}

export const StoreContext = createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
