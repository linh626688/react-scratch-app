import React, {useState} from 'react';
import RoomTitle from "../RoomTilte/RoomTitle";

function HeaderChat(props) {
  const [name, setName] = useState(props.me.name ? props.me.name : props.me.uuid.substr(-10));

  const handleChangeName = (e) => {
    setName(e.target.value);
    let visitor = {...props.me};
    visitor.name = e.target.value;
    props.updateVisitor(visitor);
  };

  return (
    <header>
      {/*<LogoHeader/>*/}
      <RoomTitle chatroomName={props.chatroomName}/>
      {
        props.me ?
          <input
            className='name-input'
            value={name}
            placeholder='Your name'
            onChange={(e) => handleChangeName(e)}
          />
          : null
      }
    </header>
  );
}


export default HeaderChat;