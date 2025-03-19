import styled from "styled-components";

interface SimpleBookProps {
  book: {
    coverImage?: string;
    title: string;
    author: string;
    publisher: string;
    id: string;
  };
  onClick: () => void;
}

const SimpleBook: React.FC<SimpleBookProps> = ({ book, onClick }) => {
  const { coverImage, title, author, publisher } = book;

  return (
    <Book onClick={onClick}>
      <img src={coverImage || "@assets/book.jpg"} alt={title} />
      <Title>{title}</Title>
      <Author>지은이 | {author}</Author>
      <Published>출판사 | {publisher}</Published>
    </Book>
  );
};

export default SimpleBook;

const Book = styled.div`
  display: flex;
  width: 226px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 7px;
  border-radius: 20px;
  border: 1px solid #000;
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  cursor: pointer;

  img {
    height: 210px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Title = styled.div`
  font-size: 14px;
  font-weight: 500;
`;

const Author = styled.div`
  font-size: 11px;
  color: #121212;
`;

const Published = styled.div`
  font-size: 11px;
  color: #121212;
`;
