import styled from 'styled-components';
import SendIcon from '@assets/send.png';

interface SearchInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onSend: () => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ inputValue, setInputValue, onSend }) => (
  <SearchBox>
    <Input
      placeholder="궁금한 점을 입력해주세요!"
      value={inputValue}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
      onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && onSend()} // 엔터 키 입력 시 전송
    />
    <StyledSendIcon
      src={SendIcon}
      alt="Send Icon"
      disabled={inputValue.trim().length === 0}
      onClick={inputValue.trim().length > 0 ? onSend : undefined} // 클릭 방지
    />
  </SearchBox>
);

export default SearchInput;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  border: 2px solid gray;
  border-radius: 20px;
  padding: 12px 32px;
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 5px;
  border-radius: 20px;
`;

const StyledSendIcon = styled.img<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: opacity 0.3s ease, cursor 0.3s ease;
  width: 24px;
  height: 24px;
`;
