import React from 'react';
import ChatixCore from 'chatix-core';

class ChatixSDK extends React.Component {
  constructor(props) {
    super(props);
    const websiteId = "d8ea5b6a-ff57-4c56-b98a-56c48ce10140";
    this.chatroomId = "495ff311-a79b-4a1b-a3b8-c57571ce5d4d";
    this.sdk = new ChatixCore(websiteId);
    this.sdk.onChatroomMessageReceived = (chatroomId, message) => {
      if (chatroomId === this.chatroomId) {
        this.props.onNewMessageReceived(message);
      }
    };
    // this.sdk.onMemberConnectedToChatroom = (chatroomId, member) => {
    //   if (chatroomId === this.chatroomId && props.addChatroomMember) {
    //     this.props.addChatroomMember(member);
    //   }
    // };
    // this.sdk.onMemberDisconnectedFromChatroom = (chatroomId, member) => {
    //   if (chatroomId === this.chatroomId && props.removeChatroomMember) {
    //     this.props.removeChatroomMember(member);
    //   }
    // };
    // this.sdk.onApplyVisitorInfo = (visitor) => {
    //   this.props.onMemberUpdated(visitor)
    // }
    this.sdk.start()
      .then(async () => {
        try {
          const myChatrooms = await this.sdk.getMyChatrooms();
          if (myChatrooms.filter(x => x.id === this.chatroomId).length === 0) {
            await this.sdk.connectToChatroom(this.chatroomId);
          }
          // refresh information about chatroom and call passed handler
          const chatroom = await this.sdk.getChatroom(this.chatroomId);
          if (props.updateChatroomTitle) {
            props.updateChatroomTitle(chatroom.title);
          }

          let membersPage = 1;
          let allChatroomMembers = [];
          while (true) {
            let pagedMembers = await this.sdk.getChatroomMembers(this.chatroomId, membersPage++, 10);
            allChatroomMembers = [...allChatroomMembers, ...pagedMembers];
            if (pagedMembers.length === 0) {
              break;
            }
          }

          if (props.setChatroomMembers) {
            props.setChatroomMembers(allChatroomMembers);
          }

          // lets load 100 last messages from current chatroom
          const lastMessages = await this.sdk.getChatroomMessages(this.chatroomId, null, 100);
          if (props.setChatroomMessages) {
            props.setChatroomMessages(lastMessages);
          }

          if (props.setMe) {
            const me = this.sdk.getVisitor();
            this.props.setMe(me);
          }
        } catch (err) {
          console.error(err);
        }
      })
      .catch((e) => {
        console.error(e);
      });

  }

  sendChatroomMessage = (text) => {
    try {
      return this.sdk.sendChatroomTextMessage(text, this.chatroomId);
    } catch (e) {
      console.error(e);
    }
  }

  updateVisitor(visitor){
    this.sdk.setVisitor(visitor)
  }

  async getUser(userId){
    return await this.sdk.getMember(userId);
  }

  render() {
    return null;
  }
}

export default ChatixSDK;