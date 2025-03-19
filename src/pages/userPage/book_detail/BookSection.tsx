import { useState } from 'react';
import styled from 'styled-components';
import CardInfo from './CardInfo';
import BookImg from "@assets/book.jpg";

interface CardProps {
  image: string;
  title: string;
  author: string;
  published: string;
  date: string;
  genre: string;
  id: string;
  currentstate: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const BookSection: React.FC<CardProps> = ({
  image,
  title,
  author,
  published,
  date,
  genre,
  id,
  currentstate,
  onClick
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOutBookClick = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const handleConfirm = () => {
    // 알림 확인 이후 동작
    alert("주문하신 책 나왔습니다.");
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <>
      <CardContainer onClick={onClick}>
        <CardImageWrapper>
          <CardImage src={image} alt={title} />
        </CardImageWrapper>
        <CardInfo
          title={title}
          author={author}
          published={published}
          date={date}
          genre={genre}
          id={id}
          currentstate={currentstate}
        />
        <OutBook onClick={handleOutBookClick}>책 꺼내기</OutBook>
      </CardContainer>

      {/* 모달 표시 */}
      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <Book>
              <img src={BookImg} alt="book"/>
              <BookDetail>
                <Title>{title}</Title>
                <Author>지은이 | {author}</Author>
                <Published>출판사 | {published}</Published>
              </BookDetail>
            </Book>
            <ModalText>이 책이 맞습니까?</ModalText>
            <ButtonContainer>
              <ModalButton onClick={handleConfirm}>예</ModalButton>
              <ModalButton onClick={handleCloseModal}>아니요</ModalButton>
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
  width: 800px;
  padding: 15px;
  align-items: center;
  gap: 37px;
  border-radius: 30px;
  border: none;
  outline: 0.5px solid #000;
  box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.25);
`;

const CardImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;

const CardImage = styled.img`
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
`;

const OutBook = styled.button`
  width: 157px;
  height: 157px;
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
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 400px;
  gap: 10px;
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
`

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
    height: 210px; /* 고정된 높이 */
    object-fit: cover; /* 비율을 유지하면서 이미지 영역 채움 */
    border-radius: 10px; /* 이미지를 살짝 둥글게 */
  }
`

const BookDetail = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
`

const Title = styled.div`
  color: var(--Text-black, #121212);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`

const Author = styled.div`
  color: var(--Text-black, #121212);
  text-align: center;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`

const Published = styled.div`
  color: var(--Text-black, #121212);
  text-align: center;
  font-family: Pretendard;
  font-size: 11px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`