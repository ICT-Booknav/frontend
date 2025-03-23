import { useState, useEffect } from 'react';
import styled from 'styled-components';
import ArrowIcon from '@assets/right_arrow.png';
import Typography from '@components/Typography/typography';

interface SidebarProps {
  onToggle: (isOpen: boolean) => void;
  totalBooksCount: number;
  currentBooksCount: number;
  smallBookCount: number;
  mediumBookCount: number;
  bigBookCount: number;
  // onAddShelf: (size: number, row: number) => void;
  // availableRows: number[];
}

const Sidebar: React.FC<SidebarProps> = ({
  onToggle,
  totalBooksCount,
  currentBooksCount,
  smallBookCount,
  mediumBookCount,
  bigBookCount,
  // onAddShelf,
  // availableRows, 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  // const [selectedSize, setSelectedSize] = useState<number | null>(null);
  // const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => setShowContent(true), 200);
  };

  const handleClose = () => {
    setShowContent(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  useEffect(() => {
    onToggle(isOpen);
  }, [isOpen, onToggle]);

  // const handleAddShelf = () => {
  //   if (selectedSize && selectedRow) {
  //     onAddShelf(selectedSize, selectedRow);
  //     setSelectedSize(null);
  //   }
  // };

  return (
    <SidebarWrapper>
      <SidebarButton $isOpen={isOpen} onClick={isOpen ? handleClose : handleOpen}>
        {!isOpen && <img src={ArrowIcon} alt='arrowicon' />}
      </SidebarButton>
      <SidebarContent $isOpen={isOpen}>
        <ContentWrapper $isVisible={showContent}>
          <Header>
            <Typography variant="headingXxSmall">현재 도서 상태</Typography>
            <CloseButton onClick={handleClose}>✕</CloseButton>
          </Header>
          <Divider />
          <Group>
            <Content>
              전체 책의 수: {totalBooksCount}권
            </Content>
            <Content>
              현재 꽂혀있는 책의 수: {currentBooksCount}권
            </Content>
          </Group>
          <Group>
            <Content>
              작은 크기 책의 개수: {smallBookCount}권
            </Content>
            <Content>
              중간 크기 책의 개수: {mediumBookCount}권
            </Content>
            <Content>
              큰 크기 책의 개수: {bigBookCount}권
            </Content>
          </Group>
          <Divider />
          {/* <AddShelfWrapper>
            <StyledSelect
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedRow(Number(e.target.value))}
              value={selectedRow || ""}
            >
              <option value="">책장 번호 선택</option>
              {availableRows.map((row) => (
                <option key={row} value={row}>
                  책장 {row}
                </option>
              ))}
            </StyledSelect>
            <StyledSelect
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelectedSize(Number(e.target.value))}
              value={selectedSize || ""}
            >
              <option value="">크기 선택</option>
              <option value="1">작은 책장</option>
              <option value="2">중간 책장</option>
              <option value="3">큰 책장</option>
            </StyledSelect>
            <StyledButton onClick={handleAddShelf} disabled={!selectedSize}>
              추가
            </StyledButton>
          </AddShelfWrapper> */}
        </ContentWrapper>
      </SidebarContent>
    </SidebarWrapper>
  );
};

export default Sidebar;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 70px;
  bottom: 140px;
  left: -10px;
  height: 82.5vh;
  display: flex;
  align-items: stretch;
  z-index: 2000;
`

const SidebarButton = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$isOpen',
})<{ $isOpen: boolean }>`
  width: ${({ $isOpen }) => ($isOpen ? '300px' : '60px')};
  height: 100%;
  border-radius: 0 10px 10px 0;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary[3]};
  box-shadow: ${({ $isOpen }) =>
    $isOpen ? 'none' : '0px 4px 6px rgba(0, 0, 0, 0.1)'};
  transition:
    width 0.8s ease,
    transform 0.8s ease,
    background-color 0.6s ease;
    box-shadow 0.6s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  &:hover {
    transform: ${({ $isOpen }) => ($isOpen ? 'none' : 'translateX(10px)')};
    background-color: ${({ theme }) => theme.colors.primary[4]};
    box-shadow: ${({ $isOpen }) =>
      $isOpen ? 'none' : '0px 6px 12px rgba(0, 0, 0, 0.2)'};
  }
`

const SidebarContent = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$isOpen',
})<{ $isOpen: boolean }>`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: ${({ $isOpen }) => ($isOpen ? '360px' : '0')};
  background-color: ${({ theme }) => theme.colors.primary[5]};
  color: white;
  padding: ${({ $isOpen }) => ($isOpen ? '30px' : '0')};
  opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
  overflow: hidden;
  transition:
    width 0.8s ease,
    padding 0.6s ease,
    opacity 0.6s ease,
    background-color 0.6s ease;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-sizing: border-box;
  border-radius: 0 10px 10px 0;
`

const ContentWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$isVisible',
})<{ $isVisible: boolean }>`
  opacity: ${({ $isVisible }) => ($isVisible ? '1' : '0')};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateX(0)' : 'translateX(-20px)')};
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.primary[1]};
  }
`

const CloseButton = styled.div`
  cursor: pointer;
  font-size: 1.5rem;
  padding: 5px;
  color: white;
  transition: color 0.3s ease;
  &:hover {
    color: ${({ theme }) => theme.colors.primary[4]};
  }
`

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.3);
  margin-top: 16px;
  margin-bottom: 24px;
`

const Group = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 18px;
`

const Content = styled.div`
  margin-bottom: 16px;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary[3]};
    transform: translateX(5px);
  }
`

// const StyledButton = styled.button`
//   background-color: #1b8c76;
//   color: white;
//   font-size: 14px;
//   font-weight: bold;
//   padding: 8px 16px;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #156956;
//   }

//   &:disabled {
//     background-color: #ccc;
//     cursor: not-allowed;
//   }
// `;

// const StyledSelect = styled.select`
//   padding: 8px;
//   font-size: 14px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   background-color: #fff;
//   margin-right: 8px;
//   transition: border-color 0.3s;

//   &:focus {
//     outline: none;
//     border-color: #1b8c76;
//   }
// `;

// const AddShelfWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 8px;
//   margin-top: 16px;
// `;
