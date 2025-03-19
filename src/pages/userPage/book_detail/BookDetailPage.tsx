import { styled } from "styled-components";
import BookSection from "./BookSection";
import BookImg from "@assets/book.jpg";

const BookDetailPage: React.FC = () => {
  const books = Array(5)
    .fill(null)
    .map((_, index) => ({
      image: BookImg,
      title: `책 제목 ${page}-${index + 1}`,
      author: "작가",
      published: "출판사",
      date: "출판년도",
      genre: "분류",
      id: `청구기호-${page}-${index + 1}`,
      currentstate: Math.random() > 0.5, // 랜덤 상태
    }));

  return (
    <Container>
      {books.map((book, index) => (
        <BookSection
          key={index}
          image={book.image}
          title={book.title}
          author={book.author}
          published={book.published}
          date={book.date}
          genre={book.genre}
          id={book.id}
          currentstate={book.currentstate}
        />
      ))}
    </Container>
  );
};

export default BookDetailPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;