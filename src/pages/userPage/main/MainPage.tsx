import SearchSection from './components/search/SearchSection';
import RecommendList from './components/RecommendList';
import { styled } from 'styled-components';

const SearchPage: React.FC = () => {

  return (
    <Container>
      <Title>BookNav</Title>
      <SearchSection/>
      <RecommendList/>
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  width: 100%;
  height: 100vh;
  background: #f4f4f4;
`

const Title = styled.div`
  color: var(--5, #053643);
  text-align: center;
  font-family: Pretendard;
  font-size: 100px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 120px;
  margin-bottom: -10px;
`