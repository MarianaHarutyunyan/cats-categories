import { FC, useState, useEffect } from "react";
import { CategoryList } from "./CategoryList";
import styled from "styled-components";
import { fetchData } from "../utils.ts/fetchData";

const SidebarContainer = styled.div`
  flex: 0 0 12%;
  padding: 20px;
  background-color: #f0f0f0;
  margin-right: 7%;
  `;

const SidebarTitle = styled.h2`
  font-size: 25px;
  font-weight: bold;
  text-align: center;
`;

interface LeftSidebarProps {
    categoryClickHandler(id: number): void;
}

export const LeftSidebar: FC<LeftSidebarProps> = ({ categoryClickHandler }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetchData("https://api.thecatapi.com/v1/categories").then((categories) => {
            if (categories) {
                setCategories(categories);
            }
        });
    }, []);

    return (
        <SidebarContainer>
            <SidebarTitle>Categories</SidebarTitle>
            <CategoryList categories={categories} categoryClickHandler={categoryClickHandler} />
        </SidebarContainer>
    )
}