import { styled } from "styled-components";
import BookSection from "./BookSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BookLists } from "@assets/dummydata/dummybook";

const BookDetailPage: React.FC = () => {

  const { id: bookId } = useParams<{ id: string }>();
  const [book, setBook] = useState<any | null>(null); // 선택된 도서 상태

  useEffect(() => {
    if (!bookId) {
      console.error("ID가 제공되지 않았습니다.");
      return;
    }

    const selectedBook = BookLists.books.find((b) => b.id === String(bookId));
    setBook(selectedBook || null); // 도서 데이터 설정
  }, [bookId]);
  
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
        <p>도서 정보를 불러오는 중입니다...</p>
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
  margin-top: 30px;
`;