import styled from "styled-components";

const Skeleton: React.FC = () => {
  return (
    <SkeletonContainer>
      <SkeletonImage />
      <SkeletonWrapper>
        <SkeletonTitle />
        <SkeletonText />
        <SkeletonTitle />
      </SkeletonWrapper>
      <SkeletonButton />
    </SkeletonContainer>
  );
};

export default Skeleton;

// Styled Components
const SkeletonContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 800px;
  height: 190px;
  padding: 16px;
  gap: 22px;
  background-color: #f0f0f0;
  border-radius: 30px;
`;

const SkeletonImage = styled.div`
  width: 100px;
  height: 160px;
  background-color: #ddd;
  border-radius: 8px;
`;

const SkeletonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  width: 60%;
`

const SkeletonTitle = styled.div`
  width: 100%;
  height: 37px;
  background-color: #ddd;
  border-radius: 4px;
`

const SkeletonText = styled.div`
  width: 100%;
  height: 18px;
  background-color: #ddd;
  border-radius: 4px;
`

const SkeletonButton = styled.div`
  width: 160px;
  height: 160px;
  background-color: #ddd;
  border-radius: 10px;
`
