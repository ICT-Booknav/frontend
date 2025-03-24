import { useState } from "react";
import styled from "styled-components";
import Typography from "@components/Typography/typography";

interface CardInfoProps {
  title: string;
  author: string;
  publisher: string;
  publishYear?: string;
  genre?: string;
  id: string;
  location: number[];
  bookSize: number;
  currentState?: boolean;
}

const CardInfo: React.FC<CardInfoProps> = ({
  title,
  author,
  publisher,
  publishYear,
  genre,
  id,
  location,
  bookSize, 
  currentState,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStateIndicatorClick = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const generateEmptyBooks = (count: number, bookSize: number) =>
    Array.from({ length: count }, (_, index) => ({
      id: `${bookSize}-${index + 1}`,
      bookSize: bookSize,
      available: false,
      bookLocation: {
        row: Math.floor(index / 6) + 1, // 행 계산
        column: (index % 6) + 1, // 열 계산
      },
    }));
  
  // 각 bookSize에 따라 빈 배열 생성
  const smallBooks = generateEmptyBooks(6, 1); // bookSize: 1인 6개 데이터
  const mediumBooks = generateEmptyBooks(4, 2); // bookSize: 2인 4개 데이터
  const largeBooks = generateEmptyBooks(2, 3); // bookSize: 3인 2개 데이터

  return (
    <Container>
      <TitleWrapper>
        <Typography variant="titleXxSmall">{title}</Typography>
        <StateIndicator availability={currentState} onClick={handleStateIndicatorClick}>
          {currentState ? "✓ 도서 확인 가능" : "X 도서 확인 불가"}
        </StateIndicator>
      </TitleWrapper>

      <Line />

      <Details>
        <Typography variant="bodyXSmall">
          <DetailLabel>지은이: {author}</DetailLabel>
        </Typography>
        <Typography variant="bodyXSmall">
          <DetailLabel>출판사: {publisher}</DetailLabel>
        </Typography>
        <Typography variant="bodyXSmall">
          <DetailLabel>출판연도: {publishYear || "N/A"}</DetailLabel>
        </Typography>
        <Typography variant="bodyXSmall">
          <DetailLabel>분류: {genre || "미분류"}</DetailLabel>
        </Typography>
        <Typography variant="bodyXSmall">
          <DetailLabel>청구기호: {id}</DetailLabel>
        </Typography>
      </Details>

      <Line />

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <Typography variant="titleXSmall">도서 정보</Typography>

            <BookGrid columns={6}> 
              {smallBooks.map((book, index) => ( 
                <BookBox 
                  key={book.id} 
                  available={book.available} 
                  highlighted={bookSize === 1 && location.includes(index + 1)}
                > 
                  S.{book.bookLocation.column} 
                </BookBox> 
              ))} 
            </BookGrid> 
            
            <BookGrid columns={4}> 
              {mediumBooks.map((book, index) => ( 
                <BookBox 
                  key={book.id} 
                  available={book.available} 
                  highlighted={bookSize === 2 && location.includes(index + 1)}
                > 
                  M.{book.bookLocation.column} 
                </BookBox> 
              ))}
            </BookGrid> 
            
            <BookGrid columns={2}> 
              {largeBooks.map((book, index) => ( 
                <BookBox 
                  key={book.id} 
                  available={book.available} 
                  highlighted={bookSize === 3 && location.includes(index + 1)}
                > 
                  L.{book.bookLocation.column} 
                </BookBox> 
              ))} 
            </BookGrid>
            
            <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default CardInfo;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 6px;
  gap: 16px;
  border: none;
  border-radius: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StateIndicator = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "availability",
})<{ availability?: boolean }>`
  font-weight: bold;
  font-size: 14px;
  min-width: 136px;
  background-color: #e0e0e0;
  border-radius: 100px;
  border: none;
  padding: 8px 16px;
  color: ${({ availability }) => (availability ? "#0470D6" : "#D92124")};

  &:hover {
    background-color: #c3c3c3;
  }
  cursor: pointer;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 7px;
`;

const DetailLabel = styled.span`
  font-weight: semibold;
  margin-right: 40px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 430px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const BookGrid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  margin: 20px 0;
`;

const BookBox = styled.div<{ available: boolean; highlighted?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${({ available, highlighted }) =>
    highlighted ? "#1b8c76" : available ? "#1b8c76" : "#ddd"};
  color: ${({ available, highlighted }) =>
    highlighted ? "black" : available ? "white" : "black"};
  border-radius: 5px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #d92124;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #b81c1d;
  }
`;

