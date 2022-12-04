import styled from 'styled-components';

export const RegisterForm = styled.form`
  flex-direction: column;
  height: 120px;
  padding: 10px;
  margin-bottom: 40px;
  display: flex;
`;

export const RegWrapper = styled.div`
  height: 400px;
  padding: 20px;
  border: 1px solid black;
  border-radius: 4px;
  background: linear-gradient(90deg, #cfecd0, #ffc5ca);
`;

export const RegTitle = styled.h1`
  margin-bottom: 6px;
  font-size: 28px;
  text-align: center;
  color: #0000FF;
`;

export const ErrorText = styled.p`
  margin-bottom: 20px;
  font-size: 16px;
  text-align: center;
  color: #0000FF;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  font-weight: 500px;
  font-size: 16px;
  line-height: 1.16;
  letter-spacing: 0.01em;
  color: #0000FF;
`;

export const FormInput = styled.input`
  display: block;
  margin: 0;
  padding: 10px 42px;
  font: inherit;
  font-size: 18px;
  outline: none;
  border-radius: 4px;
  border: 1px solid rgba(45, 18, 18, 0.2);
  color: #ff7a05;
`;

export const SubmitBtn = styled.button`
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
  width: 100px;
  font-size: 8px;
  text-decoration: none;
  display: inline-block;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  background-image: linear-gradient(
    to right,
    #9eefe1 0%,
    #4830f0 51%,
    #9eefe1 100%
  );
  background-size: 200% auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  transition: 0.5s;
  &:hover {
    background-position: right center;
  }
`;
