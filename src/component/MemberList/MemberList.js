import React from 'react';
import MemberItem from "../MemberItem/MemberItem";
import {MemberListWrapper} from "./styles";

function MemberList(props) {
  const members = props.members.map((member) =>
    <MemberItem key={member.uuid} member={member} me={props.me}/>
  );

  return (
    <MemberListWrapper>
      {members}
    </MemberListWrapper>
  );
}

export default MemberList;