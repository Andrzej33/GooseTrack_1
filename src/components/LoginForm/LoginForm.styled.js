import {  Form as FormikForm,
  ErrorMessage as FormikErrorMessage,
  Field as FormikField,} from 'formik';
import styled from 'styled-components';
import { ReactComponent as Icon} from 'images/svg/buttonLogReg.svg';

export const FormContainer = styled.div`
min-height: 100vh;
background: #dcebf7;
position: relative;

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding-top: 20px;
padding-bottom: 20px;
 

  & > a {
    position: relative;
    display: block;
    font-family: 'InterSemiBolt', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 0.75rem;
    line-height: 0.875rem;
    color: ${props => props.theme.accentColor};

    &:before {
      position: absolute;
      bottom: 0;
      left: 0;

      content: '';
      width: 100%;
      height: 1px;
      
    }
  }
`;

export const Form = styled(FormikForm)`
max-width: 335px;
  height: 408px;

  background-color:  ${props => props.theme.mainBackgroundColor};
  border-radius: 8px;
  padding: 40px 24px;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    width: 480px;
    height: 472px;
    margin-bottom: 14px;
  }

`;

export const FormTitle = styled.h1`
font-family: 'InterSemiBolt', sans-serif;
font-weight: 600;
font-size: 18px;
line-height: 1.3;
color: ${props => props.theme.accentColor};

@media (min-width: 768px) {
  font-size: 24px;
}
`;

export const Field = styled(FormikField)`
font-family: 'InterRegular', sans-serif;
font-weight: 400;
width: 100%;
display: block;
outline: none;
padding: 14px;
border: 1px solid rgba(220, 227, 229, 0.6);
border-radius: 8px;
position: relative;
margin-top: 10px;

:hover,
:focus {
  border-color: #290b78;
}
`;

export const FormField = styled.label`
display: block;
font-family: 'InterSemiBolt', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 12px;
line-height: 1.25;

color:  ${props => props.theme.mainTextColor};
margin-top: 24px;
margin-bottom: 8px;

@media (min-width: 768px) {
  font-size: 14px;
  margin-top: 18px;
}
`;

export const ButtonIcon = styled(Icon)`
fill: transparent;
stroke: #ffffff;
width: 13px;
height: 13px;
margin-left: 13px;

@keyframes scale-up-hor-left {
  0% {
    -webkit-transform: scaleX(0.4);
    transform: scaleX(0.4);
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
  }
  100% {
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
    -webkit-transform-origin: 0% 0%;
    transform-origin: 0% 0%;
  }
}
`; 

export const SubmitBtn = styled.button`
border: transparent;
cursor: pointer;
width: 100%;

display: flex;
align-items: center;
justify-content: center;

font-family: 'InterSemiBolt', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 1.3;
background: ${props => props.theme.accentColor};
box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
border-radius: 16px;
color: ${props => props.theme.secondaryTextColor};

padding: 14px;
margin-top: 32px;

:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

@media (min-width: 768px) {
  margin-top: 48px;
}

&:hover ${ButtonIcon} {
  animation: scale-up-hor-left 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
}
}
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 4px;
  font-size: 14px;
  color: red;
  max-width: 400px;
`;

export const GooseIMG = styled.img`
  display: none;

  @media (min-width: 1280px) {
    position: fixed;
    width: 368px;
    height: 521px;
    right: 60px;
    bottom: 19px;
    display: block;
  }
`;