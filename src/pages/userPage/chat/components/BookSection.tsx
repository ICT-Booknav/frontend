import { useState } from "react";
import styled from "styled-components";
import CardInfo from "./CardInfo";

interface CardProps {
  coverImage?: string;
  title: string;
  author: string;
  publisher: string;
  publishYear: string;
  genre?: string;
  id: string;
  location: number[];
  bookSize: number;
  currentState?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const BookSection: React.FC<CardProps> = ({
  coverImage,
  title,
  author,
  publisher,
  publishYear,
  genre,
  id,
  location,
  bookSize,
  currentState,
  onClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리
  const [loading, setLoading] = useState(false); // 로딩 상태 관리

  const handleOutBookClick = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const handleConfirm = async () => {
    try {
        setLoading(true); // 로딩 시작
        const url = `http://localhost:3003/api/search/search/${title}`;
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log("야대답해라", response);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    } finally {
        setLoading(false); // 로딩 종료
        setIsModalOpen(false); // 모달 닫기
        alert("주문하신 책 나왔습니다.");
    }
};

  return (
    <>
      <CardContainer onClick={onClick}>
        <CardImageWrapper>
          <CardImage src={coverImage || "@assets/book.jpg"} alt={title} />
        </CardImageWrapper>
        <CardInfo
          title={title}
          author={author}
          publisher={publisher}
          publishYear={publishYear || "정보 없음"}
          genre={genre}
          id={id}
          location={location}
          bookSize={bookSize}
          currentState={currentState}
        />
        <OutBook onClick={handleOutBookClick}>책 꺼내기</OutBook>
      </CardContainer>

      {/* 모달 표시 */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <Book>
              <img src={coverImage || "@assets/book.jpg"} alt="book cover" />
              <BookDetail>
                <Title>{title}</Title>
                <Author>지은이 | {author}</Author>
                <Published>출판사 | {publisher}</Published>
              </BookDetail>
            </Book>
            <ModalText>이 책이 맞습니까?</ModalText>
            <ButtonContainer>
              <ModalButton onClick={handleConfirm} disabled={loading}>
                {loading ? "처리 중..." : "예"}
              </ModalButton>
              <ModalButton onClick={handleCloseModal} disabled={loading}>
                아니요
              </ModalButton>
            </ButtonContainer>
          </ModalContent>
        </ModalOverlay>
      )}
    </>
  );
};

export default BookSection;

// Styled Components
const CardContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  width: 500px;
  padding: 15px;
  align-items: center;
  gap: 17px;
  border-radius: 30px;
  border: none;
  outline: 0.5px solid #000;
  box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.25);
  margin-top: 20px;
`;

const CardImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const CardImage = styled.img`
  height: 120px;
  width: 100px;
  object-fit: cover;
  border-radius: 10px;
`;

const OutBook = styled.button`
  width: 107px;
  height: 107px;
  background-color: #157a63;
  border-radius: 15px;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #136f57;
  }
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
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 400px;
  gap: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const ModalText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:nth-child(1) {
    background-color: #157a63;
    color: white;

    &:hover {
      background-color: #136f57;
    }
  }

  &:nth-child(2) {
    background-color: #d92124;
    color: white;

    &:hover {
      background-color: #b81c1d;
    }
  }
`;

const Book = styled.div`
  display: flex;
  width: 300px;
  padding: 10px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  gap: 7px;
  border-radius: 20px;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  img {
    height: 210px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const BookDetail = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;

const Title = styled.div`
  color: var(--Text-black, #121212);
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
`;

const Author = styled.div`
  color: var(--Text-black, #121212);
  font-family: Pretendard;
  font-size: 11px;
`;

const Published = styled.div`
  color: var(--Text-black, #121212);
  font-family: Pretendard;
  font-size: 11px;
`;