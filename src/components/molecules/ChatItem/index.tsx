import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

type ChatItemProps = {
  isMe?: boolean,
  text: string,
  date: string,
  photo: any,
};

function ChatItem({ text, date, isMe, photo }: ChatItemProps) {
  if (isMe) {
    return <IsMe text={text} date={date} />;
  }

  return <Other photo={photo} text={text} date={date} />;
}
export default ChatItem;
