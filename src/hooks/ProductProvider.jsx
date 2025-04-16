import { useContext, createContext, useState } from 'react';

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(null);

    const value = {
        product,
        setProduct
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductProvider;

export const useProduct = () => {
    return useContext(ProductContext);
}