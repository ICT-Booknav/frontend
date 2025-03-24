import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
interface SearchSectionProps {
  highlight?: string;
  frontText?: string;
  backText?: string;
  onSearch?: (value: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({
  onSearch,
}) => {
  const navigate = useNavigate();
const handleSearch = (value: string) => {
  if (onSearch) {
    onSearch(value); // 상위 컴포넌트로 값 전달
  }
  navigate(`/searchdetail?query=${value}`); // URL 파라미터로 전달
};

  
  return (
    <>
      <SearchBar onSearch={handleSearch}/>
    </>
  );
};

export default SearchSection;