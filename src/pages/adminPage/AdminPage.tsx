import { useState } from "react";
import { styled } from "styled-components";
import Sidebar from "./components/sidebar";
import { dummyShelves } from "@assets/dummydata/dummyadmin";
import Typography from "@components/Typography/typography";

type Book = {
  id: string;
  bookSize: number;
  available: boolean;
  bookLocation: {
    row: number;
    column: number;
  };
};

type RowOfBooks = Book[];
type Shelves = RowOfBooks[];

type SizeLabel = "S" | "M" | "L";

const AdminPage: React.FC = () => {

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [shelves, setShelves] = useState<Shelves>([[], [], []]);

  const generateEmptyBooks = (count: number, bookSize: number, row: number) =>
    Array.from({ length: count }, (_, index) => ({
      id: `${bookSize}-${row}-${Date.now()}-${index}`, // Sequentially ordered ID
      bookSize,
      available: false,
      bookLocation: {
        row,
        column: (index % 6) + 1,
      },
    }));

  const renderBooks = (rowBooks: RowOfBooks, sizeLabel: SizeLabel) => (
    <BookGrid columns={rowBooks.length}>
      {rowBooks.map((book) => (
        <BookBox
          key={book.id}
          available={book.available}
          highlighted={dummyShelves.some(
            (shelf) =>
              shelf.size === book.bookSize &&
              shelf.column === book.bookLocation.column &&
              shelf.bookId !== null
          )}
        >
          {`${sizeLabel}.${book.bookLocation.column}`}
        </BookBox>
      ))}
    </BookGrid>
  );

  const addBooksToShelf = (row: number, size: number) => {
    const count = size === 1 ? 6 : size === 2 ? 4 : size === 3 ? 2 : 0;
    const newBooks = generateEmptyBooks(count, size, row);

    setShelves((prevShelves) =>
      prevShelves.map((shelf, idx) =>
        idx === row - 1 ? [...shelf, ...newBooks] : shelf
      )
    );
  };

  return (
    <Container>
      <Sidebar
        onToggle={setIsSidebarOpen}
        totalBooksCount={dummyShelves.length}
        currentBooksCount={dummyShelves.filter((shelf) => shelf.bookId !== null).length}
        smallBookCount={dummyShelves.filter((shelf) => shelf.size === 1).length}
        mediumBookCount={dummyShelves.filter((shelf) => shelf.size === 2).length}
        bigBookCount={dummyShelves.filter((shelf) => shelf.size === 3).length}
        // onAddShelf={handleAddShelf}
        // availableRows={availableRows}
      />
      <ContentWrapper $isSidebarOpen={isSidebarOpen}>
      {shelves.map((row, rowIndex) => (
        <ModalContent key={rowIndex}>
          <Typography variant="titleXxSmall">책장 {rowIndex + 1}</Typography>
          {[1, 2, 3].map((size) => {
              if (size === 1) {
                return renderBooks(
                  row.filter((book) => book.bookSize === 1),
                  "S"
                );
              } else if (size === 2) {
                return renderBooks(
                  row.filter((book) => book.bookSize === 2),
                  "M"
                );
              } else if (size === 3) {
                return renderBooks(
                  row.filter((book) => book.bookSize === 3),
                  "L"
                );
              }
              return null;
            })}
          <Divider />
          <B>
            <StyledButton onClick={() => addBooksToShelf(Number(rowIndex + 1), 1)}>작은 책 추가</StyledButton>
            <StyledButton onClick={() => addBooksToShelf(Number(rowIndex + 1), 2)}>중간 책 추가</StyledButton>
            <StyledButton onClick={() => addBooksToShelf(Number(rowIndex + 1), 3)}>큰 책 추가</StyledButton>
          </B>
        </ModalContent>
      ))}
      </ContentWrapper>
    </Container>
  );
};

export default AdminPage;

const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: #fff;
  overflow: hidden;
  bottom: 100px;
`

const ContentWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$isSidebarOpen',
})<{ $isSidebarOpen: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  transition: margin-left 0.5s ease;
  margin-left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? '250px' : '0')};
  max-width: 1500px;
  box-sizing: border-box;
  padding: 20px;
  gap: 18px;
`

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  width: 430px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`

const BookGrid = styled.div<{ columns: number }>`
  display: grid;
  grid-template-columns: ${({ columns }) => `repeat(${columns}, 1fr)`};
  margin: 9px 0;
`

const BookBox = styled.div<{ available: boolean; highlighted?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  background-color: ${({ available, highlighted }) =>
    highlighted ? "#1b8c76" : available ? "#1b8c76" : "#ddd"};
  color: ${({ available, highlighted }) =>
    highlighted ? "black" : available ? "white" : "black"};
  border-radius: 5px;
  text-align: center;
  font-size: 12px;
  font-weight: bold;
`

const B = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 15px;
`

const StyledButton = styled.button`
  margin-top: 5px;
  padding: 5px 15px;
  background-color: #1b8c76;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #146953;
  }
`

const Divider = styled.hr`
  height: 1px;
  background-color: rgb(0, 0, 0);
  margin-top: 4px;
  margin-bottom: 6px;
`