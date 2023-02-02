import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://firebasestorage.googleapis.com/v0/b/shop-f3941.appspot.com/o/16645653314866.jpg?alt=media&token=ecc28428-3198-4ed3-bbad-5e8daad4ad85")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #0f73ee;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>TẠO TÀI KHOẢN</Title>
        <Form>
          <Input placeholder="Tên" />
          <Input placeholder="Họ" />
          <Input placeholder="Tên đăng nhập" />
          <Input placeholder="Email" />
          <Input placeholder="Mật khẩu" />
          <Input placeholder="Nhập lại mật khẩu" />
          <Agreement>
          Bằng cách tạo tài khoản, tôi đồng ý với việc xử lý dữ liệu cá nhân của mình theo <b>CHÍNH SÁCH BẢO MẬT</b>
          </Agreement>
          <Button>TẠO TÀI KHOẢN</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
