import { FC, useState, useCallback } from "react";
import { fetchData } from "../utils.ts/fetchData";
import { Content } from "./Content";
import { LeftSidebar } from "./LeftSidebar";
import styled from "styled-components";

const MainWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
`

export const Main: FC = () => {
    const [categoryData, setCategoryData] = useState([]);

    const categoryClickHandler = useCallback((categoryId: number) => {
        const apiUrl = `https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${categoryId}`;

        fetchData(apiUrl).then((data) => {
            if (data) {
                setCategoryData(data);
            }
        });
    }, []);

    return (
        <MainWrapper>
            <LeftSidebar categoryClickHandler={categoryClickHandler} />
            <Content categoryData={categoryData} />
        </MainWrapper>
    )
}

