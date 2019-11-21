import styled from 'styled-components'

export const SendMessageFormWrapper = styled.div`
  .SendMessageForm{
    background: #eee;
    height: 60px;
    display: flex;
}
  .SendMessageForm form {
      width: 100%;
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: stretch;
  }
  .SendMessageForm input[type=text]{
      border-radius: 4px;
      border: 1px solid #ccc;
      flex: 1;
      margin: 10px;
  }
  .SendMessageForm button{
      background: #267af8;
      padding: 0 15px;
      border-radius: 4px; 
      border: 0;
      color: #fff;
      font-weight: bold;
      margin: 10px 10px 10px 0;
  }
  .SendMessageForm button:hover{
      background: #1b5bbb;
  }
  .SendMessageForm button:disabled{
      background-color: #a6b8d3;
  }
`;
