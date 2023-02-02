import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #FF2300;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return <Container>Combo khuyến mãi mua 2 tặng 1</Container>;
};

export default Announcement;
