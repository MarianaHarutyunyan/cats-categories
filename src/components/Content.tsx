import { FC, useState, useEffect, useCallback } from "react";
import { fetchData } from "../utils.ts/fetchData";
import styled from "styled-components";
import { CategoryData } from "../utils.ts/types";

const Container = styled.div`
  margin-top: 50px;
`;

const ImgBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Image = styled.img`
  width: 250px;
  height: 230px;
`;

const Button = styled.button`
  background-color: #008CBA;
  border: none;
  color: white;
  padding: 15px 32px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 3px;
`;

interface ContentProps {
  categoryData: CategoryData[];
}

export const Content: FC<ContentProps> = ({ categoryData }) => {
  const [images, setImages] = useState<CategoryData[]>([]);
  const [pageIndex, setPageIndex] = useState<number>(1);
  const perPageCount = 10;

  useEffect(() => {
    const limit = pageIndex * perPageCount;
    fetchData(`https://api.thecatapi.com/v1/images/search?limit=${limit}`).then((data) => {
      if (data != null) {
        setImages((prevImages) => (prevImages.length === 0 ? data : [...prevImages, ...data]));
      }
    });
  }, [pageIndex]);

  const loadMoreHandler = useCallback(() => {
    setPageIndex((prevPageIndex) => prevPageIndex + 1);
  }, []);

  return (
    <div>
      <Container>
        {!categoryData.length && <Button onClick={loadMoreHandler}>Load More</Button>}

        <ImgBox>
          {(categoryData.length ? categoryData : images)?.map((image: CategoryData) => (
            <div key={image.id}>
              <Image src={image.url} alt={`Cat ${image.id}`} />
            </div>
          ))}
        </ImgBox>
      </Container>
    </div>
  );
};
