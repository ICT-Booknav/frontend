import { styled } from "styled-components";
import BookSection from "./BookSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "../search_detail/components/Skeleton";
import { books } from "@apis/SearchApi"; // fetchBookDetail 및 books 타입 가져오기
import { fetchBookDetail } from "@apis/getDetailApi"; // API 함수 가져오기

const BookDetailPage: React.FC = () => {
  const { title } = useParams<{ title: string }>(); // URL 경로에서 제목 추출
  const decodedTitle = decodeURIComponent(title || ""); // URL 디코딩
  const [book, setBook] = useState<books>(); // 선택된 책 상태
  const [loading, setLoading] = useState<boolean>(true); // 로딩 상태 관리

  useEffect(() => {
    if (!decodedTitle) {
      console.error("도서 제목 정보가 제공되지 않았습니다.");
      return;
    }

    const loadBookDetail = async () => {
      try {
        const bookData = await fetchBookDetail(decodedTitle); // API 호출
        console.log(bookData);
        console.log("Decoded Title:", decodedTitle);
        console.log("Fetched Book Title:", bookData.title);
        setBook(bookData); // API 결과를 상태에 저장
      } catch (error) {
        console.error("도서 데이터를 가져오는 중 오류 발생:", error);
        //setBook(null); // 오류 발생 시 null 설정
      } finally {
        setLoading(false); // 로딩 상태 종료
      }
      console.log(book?.title);
    };
    
    console.log(book);
    loadBookDetail(); // 데이터 로드
  }, [decodedTitle]);

  return (
    <Container>
      {loading ? (
        <Skeleton /> // 로딩 중 Skeleton 표시
      ) : book ? (
        <>
          {/* 책 정보 */}
          <BookSection
            coverImage={book?.coverImage || "@assets/book.jpg"}
            title={book?.title || "제목 없음"}
            author={book?.author || "저자 없음"}
            publisher={book?.publisher || "출판사 없음"}
            publishYear={book?.publishYear || "정보 없음"}
            genre={book?.genre || "장르 없음"}
            id={book?.id || "정보 없음"}
            location={book?.location || [0, 0]}
            bookSize={book?.bookSize || 0}
            currentstate={book?.currentstate || false}
          />

          {/* 책 소개 */}
          <BookDetail>
            <Title>책 소개</Title>
            <Line />
            <Content>{book?.summary || "요약 정보가 없습니다."}</Content>
          </BookDetail>

          {/* 책 목차 */}
          <BookDetail>
            <Title>책 목차</Title>
            <Line />
            <Content>{book?.tableOfContents || "목차 정보가 없습니다."}</Content>
          </BookDetail>
        </>
      ) : (
        <div>도서 데이터를 찾을 수 없습니다.</div> // 책 데이터를 찾을 수 없는 경우 메시지 표시
      )}
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
`;

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
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #ddd;
`;

const Title = styled.div`
  color: var(--Text-black, #121212);
  text-align: left;
  font-family: Pretendard;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.36px;
`;

const Content = styled.div`
  color: var(--Text-black, #121212);
  text-align: left;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.3px;
`;