import styled from "styled-components";

interface SearchTitleProps {
  frontText?: string;
  highlight?: string;
  backText?: string;
}

const SearchTitle: React.FC<SearchTitleProps> = ({ frontText, highlight, backText }) => {
  return (
    <Container>
      {frontText} <h2 style={{ color: "#1b8c76", fontSize: "24px", fontWeight: "bold" }}>{highlight}</h2> <h3>{backText}</h3>
    </Container>
  );
};

export default SearchTitle;

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 32px;
  margin-bottom: 12px;
`