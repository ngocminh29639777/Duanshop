import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
color: #0f73ee;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const SocialContainer = styled.div`
  display: flex;
`;

const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}

`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img`
    width: 50%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>M-FASHION</Logo>
        <Desc>
        CHÚNG TÔI XIN CAM KẾT:<br/>
Đảm bảo vải chuẩn cotton 2 chiều 100% chất lượng .<br/>
Hàng có sẵn, giao hàng ngay khi nhận được đơn đặt hàng .<br/>
Hoàn tiền 100% nếu sản phẩm lỗi, nhầm hoặc không giống với mô tả.<br/>
Giao hàng toàn quốc, thanh toán khi nhận hàng.
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405F">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>LIÊN KẾT</Title>
        <List>
          <ListItem>Shoppe</ListItem>
          <ListItem>Tiki</ListItem>
          <ListItem>Lazada</ListItem>
          <ListItem>Sendo</ListItem>
          <ListItem>FM Fashion</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Yody Style</ListItem>
          <ListItem>Men Color</ListItem>
          <ListItem>Biti's</ListItem>
        </List>
      </Center>
      <Right>
        <Title>LIÊN HỆ</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 234 Trần Cao Vân, Q. Thanh Khê, TP. Đà Nẵng
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> 0977 555 999 - 0963 222 555
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> mfashion@gmail.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
