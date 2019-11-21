import React from 'react';
import MessageContainer from "../MessageContainer/MessageContainer";
import styled from "styled-components";
import SendMessageForm from "../SendMessageForm/SendMessageForm";

function ChatField(props) {
  return (
    <ChatFieldWrapper>
      <MessageContainer
        knownUsers={props.knownUsers}
        members={props.members}
        messages={props.messages}
      />
      <SendMessageForm onSendNewMessage={props.onSendNewMessage}/>
    </ChatFieldWrapper>
  );
}

export const ChatFieldWrapper = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
`;


export default ChatField;