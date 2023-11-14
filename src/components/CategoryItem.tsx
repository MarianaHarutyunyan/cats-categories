import { FC } from "react";
import styled from "styled-components";

const CategoryTitle = styled.div`
  padding-top: 25px;
  font-size: 20px;
  text-align: center;
  cursor: pointer;
`;

interface CategoryItemProps {
    id: number;
    name: string;
    categoryClickHandler(categoryId: number): void;
}


export const CategoryItem: FC<CategoryItemProps> = ({ id, name, categoryClickHandler }) => {

    return (
        <div>
            <CategoryTitle onClick={() => categoryClickHandler(id)}>
                {name}
            </CategoryTitle>
        </div>
    )
}