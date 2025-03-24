import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchSection from "@pages/userPage/main/components/search/SearchSection";
import SearchTitle from "./SearchTitle";
import styled from "styled-components";
import BookSection from "./components/BookSection";
import Skeleton from "./components/Skeleton"; // 스켈레톤 컴포넌트 추가
import { fetchBooks, books } from "@apis/SearchApi"; // API 함수 및 데이터 타입 가져오기

const SearchDetailPage: React.FC = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState<string>(""); // 검색어 상태
  const [bookList, setBookList] = useState<books[]>([]); // API에서 가져온 책 데이터
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태

  useEffect(() => {
    // URL에서 검색어(query) 값 가져오기
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query") || ""; // 검색어 없을 시 빈 문자열 반환
    setSearchValue(query); // 검색어 설정
  }, [location.search]);

  // API 호출 함수
  const loadBooks = async () => {
    try {
      setLoading(true); // 로딩 상태 시작
      const data = await fetchBooks(searchValue); // API 호출
      setBookList(data); // API 결과 상태 업데이트
    } catch (error) {
      console.error("책 데이터를 불러오는 중 오류 발생:", error);
    } finally {
      setLoading(false); // 로딩 상태 종료
    }
  };

  useEffect(() => {
    if (searchValue) {
      loadBooks(); // 검색어가 변경될 때 API 호출
    }
  }, [searchValue]);

  // 검색 동작 처리
  const handleSearch = (value: string) => {
    setSearchValue(value); // 검색어 상태 업데이트
    setBookList([]); // 기존 데이터 초기화
  };

  return (
    <Container>
      <Title>
        <SearchTitle highlight={searchValue} backText="에 대한 검색 결과입니다" />
        <SearchSection onSearch={handleSearch} />
      </Title>

      {/* 책 데이터 렌더링 */}
      {loading ? (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      ) : (
        bookList.map((book, index) => (
          <BookSection
            key={index}
            coverImage={book.coverImage || "@assets/book.jpg"}
            title={book.title}
            author={book.author}
            publisher={book.publisher}
            genre={book.genre}
            id={book.id}
            location={book.location || [0, 0]} // location이 없을 경우 기본값 설정
            bookSize={book.bookSize}
            currentstate={book.currentstate || true} // currentstate 없을 경우 기본값 설정
          />
        ))
      )}
    </Container>
  );
};

export default SearchDetailPage;

const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin-bottom: 12px;
`;