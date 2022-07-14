import React,{useState} from "react";
import styled from "styled-components"
import axios from 'axios'

const Container = styled.div`
  margin-top: 300px;
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

const Selector = styled.select`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 40px;
  margin: 0 0 8px;
  padding: 5px 39px 5px 11px;
  border: solid 1px #dadada;
  background: #fff;
  box-sizing: border-box;   
`

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
  background-color: #0067a3;
  ${({ disabled }) =>
    disabled &&
    `
    background-color: #efefef;
  `}
`;

const Register = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [dept,setDept] = useState('');

    const getEmailValue = (e) => {
        setEmail(e.target.value)
    }
    const getPasswordValue = (e) => {
        setPassword(e.target.value)
    }
    const getNameValue = (e) => {
        setName(e.target.value)
    }
    const getDeptValue = (e) => {
        setDept(e.target.value)
    }


    const onSubmitAccount = ({history}) => {      
        axios.post('/api/user/register',JSON.stringify({
            Email :email,
            Password : password,
            Name : name,
            Dept : dept
        })).then(response => {
            switch(response.status) {
                case 200 : history.push("/"); break;
            }
        })
    }
    return(
        <Container>
            <Input
                id = "email"
                type="email"
                placeholder = "이메일을 입력해주세요"
                onChange={getEmailValue}></Input>
            <Input
                id = "password"
                type = "password"
                placeholder = "비밀번호를 입력해주세요"
                onChange={getPasswordValue}
            ></Input>
            <Input
                id = "name"
                placeholder = "이름을 입력해주세요"
                onChange={getNameValue}
            ></Input>
            <Selector onChange={getDeptValue}>
                <option value="영아부">영아부</option>
                <option value="유치부">유치부</option>
                <option value="아동부">아동부</option>
                <option value="중고등부">중고등부</option>
                <option value="청년부">청년부</option>
            </Selector>
            <Button onClick={onSubmitAccount}>회원가입</Button>
        </Container>
    )
}

export default Register