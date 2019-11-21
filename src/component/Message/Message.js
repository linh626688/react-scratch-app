import React from 'react';
import icon from '../../img/user-circle-solid.svg';
import styled from "styled-components";


function Message(props) {

  const getSenderName = () => {
    if (props.sender) {
      return props.sender.name ? props.sender.name : props.sender.uuid.substr(-10);
    }
    return "Unknown sender";
  };

  return (
    <MessageWrapper>
      <div className="Message">
        <div className="message-sender-icon">
          <img src={icon} alt="visitor icon"/>
        </div>
        <div className="message-bubble">
          <div className="message-sender-name">{getSenderName()}</div>
          <div className="message-content">{props.message.content}</div>
        </div>
      </div>
    </MessageWrapper>
  );
}

export const MessageWrapper = styled.div`
  .Message{
    display: flex;
    flex-direction: row;
    margin: 10px
}
  .Message .message-sender-icon {
      width: 30px;
  }
  .Message .message-bubble {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      flex: 1;
  }
  .Message .message-sender-name {
      font-weight: bold;
}
`;

export default Message;