import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import WhiteArrow from "@assets/Arrowwhite.png";
import GreenArrow from "@assets/Arrowgreen.png";

const MainPage = () => {

  const navigate = useNavigate();

  const handleUserRootClick = () => {
    navigate("/search");
  }

  const handleAdminRootClick = () => {
    navigate("/admin");
  }

  return (
    <Container>
      <Title>
        <span className="book">Book</span>
        <span className="nav">Nav</span>
      </Title>
      <UserRoot 
        onClick={handleUserRootClick}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
          const img = e.currentTarget.querySelector(".img");
          const userDiv = e.currentTarget.querySelector(".user");
          img?.classList.add("hover");
          userDiv?.classList.add("hover");
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
          const img = e.currentTarget.querySelector(".img");
          const userDiv = e.currentTarget.querySelector(".user");
          img?.classList.remove("hover");
          userDiv?.classList.remove("hover");
        }}
      >
        <div className="user">User</div>
        <img src={WhiteArrow} alt="Arrow White" className="img"/>
      </UserRoot>
      <AdminRoot 
        onClick={handleAdminRootClick}
        onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
          const img = e.currentTarget.querySelector(".img");
          const adminDiv = e.currentTarget.querySelector(".admin");
          img?.classList.add("hover");
          adminDiv?.classList.add("hover");
        }}
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
          const img = e.currentTarget.querySelector(".img");
          const adminDiv = e.currentTarget.querySelector(".admin");
          img?.classList.remove("hover");
          adminDiv?.classList.remove("hover");
        }}
      >
        <div className="admin">Admin</div>
        <img src={GreenArrow} alt="Arrow Green" className="img"/>
      </AdminRoot>
    </Container>
  );
};

export default MainPage;
  
const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  background: #f4f4f4;
`

const Title = styled.div`
  position: absolute;
  top: 27%;
  left: 48.5%;
  transform: translate(-50%, -50%);
  color: #EAEAEA;
  text-align: center;
  font-family: Pretendard;
  font-size: 120px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  .book {
    color: #eaeaea;
  }
  .nav {
    color: #053643;
  }
`

const UserRoot = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: var(--5, #053643);
  cursor: pointer;

  .user{
    margin-bottom: 100px;
    color: #EAEAEA;
    text-align: center;
    font-family: Pretendard;
    font-size: 80px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    transition: transform 0.3s ease;

    &.hover {
      transform: scale(1.2);
    }
  }

  .img{
    width: 25%;
    margin-bottom: 200px;
    transition: transform 0.3s ease;

    &.hover {
      transform: scale(1.2);
    }
  }
`

const AdminRoot = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  background: #EAEAEA;
  cursor: pointer;

  .admin{
    margin-bottom: 100px;
    color: #053643;
    text-align: center;
    font-family: Pretendard;
    font-size: 80px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    transition: transform 0.3s ease;

    &.hover {
      transform: scale(1.2);
    }
  }

  .img{
    width: 25%;
    margin-bottom: 200px;
    transition: transform 0.3s ease;

    &.hover {
      transform: scale(1.2);
    }
  }
`