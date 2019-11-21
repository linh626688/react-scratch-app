import React, {useEffect} from 'react';
import Message from "../Message/Message";
import styled from "styled-components";

function MessageContainer(props) {
  const messagesContainer = React.createRef();
  useEffect(() => {
    messagesContainer.current.scrollTop = messagesContainer.current.scrollHeight
  }, [props, messagesContainer]);
  const messageList = props.messages.map(message =>
    <Message
      key={message.uuid}
      sender={props.members.find((member) => member.uuid === message.sender_id)}
      message={message}/>
  );

  return (
    <MessageContainerWrapper ref={messagesContainer}>
      {messageList}
    </MessageContainerWrapper>
  );
}

export const MessageContainerWrapper = styled.section`
    flex: 1;
    overflow-y: auto;
`;

export default MessageContainer;