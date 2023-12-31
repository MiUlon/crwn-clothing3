import { useParams } from 'react-router-dom';
import { Fragment, useContext, useEffect, useState } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import ProductCard from '../product-card/product-card.component';
import { CategoryContainer, CategoryTitle } from './category.styles.jsx';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return (
        <Fragment>
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            <CategoryContainer>
                {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
            </CategoryContainer>
        </Fragment>
    );
};

export default Category;