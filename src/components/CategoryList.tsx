import { FC } from "react";
import { CategoryItem } from "./CategoryItem";


interface CategoryListProps {
    categories: { id: number, name: string }[];
    categoryClickHandler(categoryId: number): void;
}

export const CategoryList: FC<CategoryListProps> = ({ categories, categoryClickHandler }) => {

    return (
        <div>
            {categories.map((category: { id: number, name: string }) => (
                <CategoryItem
                    key={category.id}
                    id={category.id}
                    name={category.name}
                    categoryClickHandler={categoryClickHandler}
                />
            ))}
        </div>
    )
}