import { styled } from "styled-components";
import BookSection from "./BookSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookLists } from "@assets/dummydata/dummybook";
import Skeleton from "../search_detail/components/Skeleton";

const BookDetailPage: React.FC = () => {

  const { title } = useParams<{ title: string }>(); // 경로에서 title 추출
  const decodedTitle = decodeURIComponent(title || ""); // 디코딩
  const [book, setBook] = useState<any | null>(null); // 선택된 도서 상태

  useEffect(() => {
    if (!decodedTitle) {
      console.error("정보가 제공되지 않았습니다.");
      return;
    }

    const selectedBook = BookLists.books.find((b) => b.title === String(decodedTitle));
    setBook(selectedBook || null); // 도서 데이터 설정
  }, [decodedTitle]);
  
  return (
    <Container>
      {book ? (
        <BookSection
          coverImage={book.coverImage || "@assets/book.jpg"}
          title={book.title}
          author={book.author}
          publisher={book.publisher}
          publishYear={book.publishYear}
          genre={book.genre}
          id={book.id}
          location={book.location}
          bookSize={book.bookSize}
          currentstate={book.currentstate}
        />
      ) : (
        // 로딩 중 또는 도서를 찾을 수 없을 때 메시지
        <>
          <Skeleton />
        </>
      )}

      <BookDetail>
        <Title>책 소개</Title>
        <Line />
        <Content>{book?.summary || "요약 정보가 없습니다."}</Content>
      </BookDetail>
      <BookDetail>
        <Title>책 목차</Title>
        <Line />
        <Content>{book?.tableOfContents || "목차 정보가 없습니다."}</Content>
      </BookDetail>

    </Container>
  );
};

export default BookDetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 30px;
`

const BookDetail = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 800px;
  padding: 15px;
  gap: 13px;
  border-radius: 30px;
  border: none;
  outline: 0.5px solid #000;
  box-shadow: 8px 8px 4px 0px rgba(0, 0, 0, 0.25);
`

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
`

const Title = styled.div`
  color: var(--Text-black, #121212);
  text-align: left;
  font-family: Pretendard;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`

const Content = styled.div`
  color: var(--Text-black, #121212);
  text-align: left;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`