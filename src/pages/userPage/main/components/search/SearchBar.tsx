import { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@assets/search.png';

interface SearchBarProps {
  placeholder?: string;
  onSearch?: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder = '검색어를 입력하세요', onSearch }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(inputValue);
      // window.location.reload();
    }
  };

  const handleIconClick = () => {
    if (onSearch) {
      onSearch(inputValue);
      // window.location.reload();
    }
  };

  return (
    <SearchBarContainer>
      <SearchIconDiv onClick={handleIconClick}>
        <img src={SearchIcon} alt="Search Icon" />
      </SearchIconDiv>
      <SearchInput
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SearchInput = styled.input`
  width: 80%;
  padding: 12px;
  padding-left: 65px;
  font-size: 16px;
  border: none;
  border-radius: 100px;
  outline: 1.5px solid #2d2d2d;
  background: #f4f4f4;
`

const SearchIconDiv = styled.div`
  position: absolute;
  left: 11%;
  top: 23%;
  font-size: 30px;
  cursor: pointer;
  &:hover {
    color: rgba(0, 0, 0, 0.5);
  }
`
