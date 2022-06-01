import React from 'react';
import IsMe from './IsMe';
import Other from './Other';

type ChatItemProps = {
  isMe?: boolean,
};

function ChatItem({ isMe }: ChatItemProps) {
  if (isMe) {
    return <IsMe />;
  }

  return <Other />;
}
export default ChatItem;
