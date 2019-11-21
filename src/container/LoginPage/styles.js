import styled from 'styled-components'

export const WrapperLoginPage = styled.div`
  .login-container {
      text-align: center;
  }
  
  
  .login-content {
      background: #fff;
      box-shadow: 0 1px 11px rgba(0, 0, 0, 0.27);
      border-radius: 2px;
      width: 500px;
      display: inline-block;
      margin-top: 30px;
      vertical-align: middle;
      position: relative;    
      padding: 35px;
  }
  
  .social-btn {
      margin-bottom: 15px;
      font-weight: 400;
      font-size: 16px;
  }
  
  .social-btn img {
      height: 32px;
      float: left;
      margin-top: 10px;
  }
  
  .social-btn.google {
      margin-top: 7px;
  }
  
  .social-btn.facebook img {
      height: 24px;
      margin-left: 3px;
  }
  
  .social-btn.github img {
      height: 24px;
      margin-left: 3px;
  }
  
  .signup-link {
      color: rgba(0, 0, 0, 0.65);
      font-size: 14px;
  }
  
  .login-title {
      font-size: 1.5em;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 30px;
      color: rgba(0, 0, 0, 0.65);
  }
`;

export const SocialLogin = styled.div``;
export const LoginForm = styled.div``;