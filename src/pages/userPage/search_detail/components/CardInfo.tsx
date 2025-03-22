import { useState } from "react";
import styled from "styled-components";
import Typography from "@components/Typography/typography";
import { useNavigate } from "react-router-dom";

interface CardInfoProps {
  title: string;
  author: string;
  publisher: string;
  publishYear?: string;
  genre?: string;
  id: string;
  currentstate?: boolean;
}

const CardInfo: React.FC<CardInfoProps> = ({
  title,
  author,
  publisher,
  publishYear,
  genre,
  id,
  currentstate,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookLocations, setBookLocations] = useState<
    { id: string; available: boolean; bookLocation: { row: number; column: number } }[]
  >([]);
  const navigate = useNavigate();

  const handleDetailClick = () => {
    navigate(`/search/${id}`); // 상세 페이지 이동
  };

  const handleStateIndicatorClick = () => {
    setIsModalOpen(true); // 모달 열기

    // 더미 데이터 활용 <- 이거부터 수정해야함!!!!
    const mockData = [
      { id: "smallbook1", available: false, bookLocation: { row: 1, column: 1 } },
      { id: "smallbook2", available: true, bookLocation: { row: 1, column: 2 } },
      { id: "smallbook3", available: false, bookLocation: { row: 1, column: 3 } },
      { id: "mediumbook1", available: true, bookLocation: { row: 2, column: 1 } },
      { id: "largebook1", available: false, bookLocation: { row: 3, column: 1 } },
    ];
    setBookLocations(mockData);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const smallBooks = bookLocations.filter((book) => book.id.startsWith("smallbook"));
  const mediumBooks = bookLocations.filter((book) => book.id.startsWith("mediumbook"));
  const largeBooks = bookLocations.filter((book) => book.id.startsWith("largebook"));

  return (
    <>
      <Container>
        <TitleWrapper>
          <Typography variant="titleXxxSmall">{title}</Typography>
          <StateIndicator state={currentstate} onClick={handleStateIndicatorClick}>
            {currentstate ? "✓ 도서 확인 가능" : "X 도서 확인 불가"}
          </StateIndicator>
        </TitleWrapper>

        <Line />

        <Details>
          <Typography variant="captionDefault">
            <DetailLabel>지은이: {author}</DetailLabel>
          </Typography>
          <Typography variant="captionDefault">
            <DetailLabel>출판사: {publisher}</DetailLabel>
            <DetailLabel>출판연도: {publishYear || "N/A"}</DetailLabel>
          </Typography>
          <Typography variant="captionDefault">
            <DetailLabel>분류: {genre || "미분류"}</DetailLabel>
            <DetailLabel>청구기호: {id}</DetailLabel>
          </Typography>
        </Details>

        <Line />

        <Button onClick={handleDetailClick}>도서 상세 페이지</Button>
      </Container>

      {/* 모달 렌더링 */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <Typography variant="titleXSmall">도서 위치 정보</Typography>

            {/* Small Books Grid */}
            <BookGrid columns={6}>
              {smallBooks.map((book) => (
                <BookBox key={book.id} available={book.available}>
                  {book.bookLocation.row}.{book.bookLocation.column}
                </BookBox>
              ))}
            </BookGrid>

            {/* Medium Books Grid */}
            <BookGrid columns={4}>
              {mediumBooks.map((book) => (
                <BookBox key={book.id} available={book.available}>
                  {book.bookLocation.row}.{book.bookLocation.column}
                </BookBox>
              ))}
            </BookGrid>

            {/* Large Books Grid */}
            <BookGrid columns={2}>
              {largeBooks.map((book) => (
                <BookBox key={book.id} available={book.available}>
                  {book.bookLocation.row}.{book.bookLocation.column}
                </BookBox>
              ))}
            </BookGrid>

            <CloseButton onClick={handleCloseModal}>닫기</CloseButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default CardInfo;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  padding: 6px;
  gap: 10px;
  border: none;
  border-radius: 8px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StateIndicator = styled.button<{ state?: boolean }>`
  font-weight: bold;
  font-size: 14px;
  min-width: 136px;
  background-color: #e0e0e0;
  border-radius: 100px;
  border: none;
  padding: 8px 16px;
  color: ${({ state }) => (state ? "#0470D6" : "#D92124")};

  &:hover {
    background-color: #c3c3c3;
  }
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #1b8c76;
  color: white;
  border: none;
  border-radius: 100px;
  padding: 8px 16px;
  cursor: pointer;

  &:hover {
    background-color: #157a63;
  }
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
  font-weight: bold;
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

const BookBox = styled.div<{ available: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${({ available }) => (available ? "#1b8c76" : "#ddd")};
  color: ${({ available }) => (available ? "white" : "black")};
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
