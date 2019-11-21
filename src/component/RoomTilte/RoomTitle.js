import React from 'react';
import styled from 'styled-components'

function RoomTitle(props) {
  return (
    <RoomTitleWrapper>
      <h1>{props.chatroomName}</h1>
    </RoomTitleWrapper>
  );
}

export const RoomTitleWrapper = styled.div`
`;

export default RoomTitle;