import React, {Component} from 'react';
import HeaderChat from "../../component/HeaderChat/HeaderChat";
import {Main} from "./styles";
import MemberList from "../../component/MemberList/MemberList";
import ChatField from "../../component/ChatField/ChatField";
import ChatixSDK from "../../component/ChatixSDK";


class ChatPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      chatroomName: '',
      me: {
        is_online: true,
        name: "Alex",
        uuid: "98s7dfh9a8s7dhf"
      },
      members: [],
      messages: [],
      knownUsers: new Map()

    };
    this.chatixSDK = React.createRef();
  }

  onUpdateVisitor = (user) => {
    this.chatixSDK.current.updateVisitor(user);
    this.setMe(user);
    let currentUser = this.state.members.find((member) => (member.uuid === user.uuid))
    let currentUserIndex = this.state.members.indexOf(currentUser);
    let newMembers = [...this.state.members];
    newMembers[currentUserIndex] = user;
    this.setState({
      members: newMembers
    })
  };

  onSendNewMessage = async (message) => {
    let receivedMsg = await this.chatixSDK.current.sendChatroomMessage(message);

    const currentMessages = this.state.messages;
    currentMessages.push(receivedMsg);
    const newStateFragment = {messages: currentMessages};
    this.setState({...this.state, ...newStateFragment});
  };

  onNewMessageReceived = (message) => {
    const currentMessages = this.state.messages;
    currentMessages.push(message);
    const newStateFragment = {messages: currentMessages};
    this.setState({...this.state, ...newStateFragment});
  };

  setChatroomTitle = (newName) => {
    const newStateFragment = {chatroomName: newName};
    this.setState({...this.state, ...newStateFragment});
  };

  setChatroomMembers = (members) => {
    members.sort(this.sortMembers);
    const newStateFragment = {members: members};
    this.setState({...this.state, ...newStateFragment});
  };
  setChatroomMessages = async (messages) => {
    const newStateFragment = {messages: messages};
    const knownUsers = this.state.knownUsers;
    for (const m of messages) {
      if (!knownUsers.has(m.sender_id) && m.sender_flag === 0) {
        const user = await this.chatixSDK.current.getUser(m.sender_id);
        knownUsers.set(user.uuid, user);
      }
    }
    newStateFragment.knownUsers = knownUsers;
    this.setState({...this.state, ...newStateFragment});
  };

  setMe = (me) => {
    this.setState({...this.state, ...{me: me}});
  };

  sortMembers(a, b) {
    if (a.is_online === true && b.is_online === false) {
      return -1;
    } else if (b.is_online === true && a.is_online === false) {
      return 1;
    } else {
      if (a.name && b.name) {
        if (a.name.toLocaleUpperCase() > b.name.toLocaleUpperCase()) {
          return 1;
        } else if (a.name.toLocaleUpperCase() < b.name.toLocaleUpperCase()) {
          return -1;
        }
      } else if (a.name && !b.name) {
        return -1;
      } else if (!a.name && b.name) {
        return 1;
      }
      if (a.uuid > b.uuid) {
        return -1;
      } else {
        return 1;
      }
    }
  }

  render() {
    const {chatroomName, me, members, messages, knownUsers} = this.state;
    return (
      <div>
        <HeaderChat
          chatroomName={chatroomName}
          me={me}
          updateVisitor={this.onUpdateVisitor}
        />
        <Main>
          <MemberList
            members={members}
            me={me}/>
          <ChatField
            members={members}
            messages={messages}
            knownUsers={knownUsers}
            onSendNewMessage={this.onSendNewMessage}/>
          <ChatixSDK
            ref={this.chatixSDK}
            setMe={this.setMe}
            updateChatroomTitle={this.setChatroomTitle}
            setChatroomMembers={this.setChatroomMembers}
            setChatroomMessages={this.setChatroomMessages}
            onNewMessageReceived={this.onNewMessageReceived}
            // addChatroomMember={this.addChatroomMember}
            // removeChatroomMember={this.removeChatroomMember}
            // onMemberUpdated={this.onMemberUpdated}
          />
        </Main>
      </div>
    );
  }
}


export default ChatPage;