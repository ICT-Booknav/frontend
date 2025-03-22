import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchSection from "@pages/userPage/main/components/search/SearchSection";
import SearchTitle from "./SearchTitle";
import styled from "styled-components";
import BookSection from "./components/BookSection";
import Skeleton from "./components/Skeleton"; // 스켈레톤 컴포넌트 추가
import { BookLists } from "@assets/dummydata/dummybook"; // 더미 데이터 가져오기

const SearchDetailPage: React.FC = () => {
  const location = useLocation();
  const [searchValue, setSearchValue] = useState<string>("");
  const [books, setBooks] = useState<any[]>([]); // 데이터 배열
  const [loading, setLoading] = useState<boolean>(false); // 로딩 상태
  const [page, setPage] = useState<number>(1); // 페이지 번호

  useEffect(() => {
    // URL에서 query 값을 가져오기
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query") || ""; // 쿼리가 없으면 빈 문자열로
    setSearchValue(query); // 초기값 설정
  }, [location.search]);

  const fetchBooks = () => {
    setLoading(true);

    // 페이지당 5개의 책 데이터를 가져오는 로직
    const startIndex = (page - 1) * 5; // 시작 인덱스
    const endIndex = startIndex + 5; // 끝 인덱스
    const newBooks = BookLists.books.slice(startIndex, endIndex); // 더미 데이터에서 슬라이스

    // 로딩 시간을 시뮬레이션하기 위해 타이머 사용
    setTimeout(() => {
      setBooks((prev) => [...prev, ...newBooks]); // 이전 데이터에 추가
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    fetchBooks();
  }, [page]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.offsetHeight - 50
    ) {
      setPage((prev) => prev + 1); // 페이지 증가
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSearch = (value: string) => {
    setSearchValue(value); // 상태 업데이트
    setPage(1); // 페이지 초기화
    setBooks([]); // 책 목록 초기화
  };

  return (
    <Container>
      <Title>
        <SearchTitle highlight={searchValue} backText="에 대한 검색 결과입니다" />
        <SearchSection onSearch={handleSearch} />
      </Title>

      {/* BookSection 렌더링 */}
      {books.map((book, index) => (
        <BookSection
          key={index}
          coverImage={book.coverImage || "@assets/book.jpg"}
          title={book.title}
          author={book.author}
          publisher={book.publisher}
          genre={book.genre}
          id={book.id}
          location={book.location}
          bookSize={book.bookSize}
          currentstate={book.currentstate}
        />
      ))}

      {/* 로딩 상태일 때 스켈레톤 표시 */}
      {loading && (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
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
