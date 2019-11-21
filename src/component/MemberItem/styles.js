import styled from 'styled-components'

export const MemberItemWrapper = styled.div`
  .MemberItem {
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 5px 10px;
      height: 40px;
  }
  
  .MemberItem:hover {
      background-color: #fafafa;
  }
  
  .MemberItem img {
      width: 30px;
  }
  
  .MemberItem span {
      padding-left: 10px;
      font-weight: bold;
  }
  .MemberItem .online {
      color:rgb(27, 216, 83);
  }
`;

