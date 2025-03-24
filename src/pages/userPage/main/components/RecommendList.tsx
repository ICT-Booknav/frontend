import styled from "styled-components";
import SimpleBook from "./SimpleBook";
import { useNavigate } from "react-router-dom";
import { BookLists } from "@assets/dummydata/dummybook";

const RecommendList: React.FC = () => {
  const navigate = useNavigate();

  const handleBookClick = (title: string) => {
    navigate(`/search/${encodeURIComponent(title)}`);
  };

  return (
    <Container>
      {/* 책 데이터 4개만 slice로 가져오기 */}
      {BookLists.books.slice(0, 4).map((book) => (
        <SimpleBook
          key={book.id}
          book={book}
          onClick={() => handleBookClick(book.title)}
        />
      ))}
    </Container>
  );
};

export default RecommendList;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;
