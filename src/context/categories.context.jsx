import { createContext, useState, useEffect } from "react";
// import SHOP_DATA from "../shop-data/shop-data";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase-auth";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase-auth";

export const CategoriesContext = createContext({
    categoriesMap: {}
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('collections');
            setCategoriesMap(categoryMap);
        };

        getCategoriesMap();
    }, []);
    // useEffect(() => {
    //   addCollectionAndDocuments('collections', SHOP_DATA);
    // }, []);
    const value = { categoriesMap }
    return (
        <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
    )
}
