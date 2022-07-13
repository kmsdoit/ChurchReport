import React,{useState} from "react";
import styled from "styled-components"
import axios from 'axios'

const Container = styled.div`
  margin-top: 100px;
  padding: 20px;
`;

const Input = styled.input`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;
`;

const Button = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 49px;
  display: block;
  width: 100%;
  height: 49px;
  margin: 16px 0 7px;
  cursor: pointer;
  text-align: center;
  color: #fff;
  border: none;
  border-radius: 0;
  background-color: #03c75a;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

const Login = ({history}) => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const getIdValue = (e) => {
        setEmail(e.target.value);
    }

    const getPasswordValue = (e) => {
        setPassword(e.target.value);
    }

    const onSubmitAccount = () => {      
        axios.post('/api/user/login',JSON.stringify({
            Email :email,
            Password : password
        })).then(response => {
            switch(response.status) {
                case 200 : history.push("/"); break;
                case 401 : alert("비밀번호가 틀렸음"); break;
            }
        })
    }
    
    return(
        <Container>
            <Input
                id="id"
                name="id"
                placeholder="아이디를 입력해주세요"
                onChange={getIdValue}
            />
            <Input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                onChange={getPasswordValue}
            />
            <Button onClick={onSubmitAccount}>로그인</Button>
        </Container>
    )
}

export default Login