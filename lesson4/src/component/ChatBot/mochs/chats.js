import { nanoid } from 'nanoid'

const createChatMock = (i) => ({
  id: nanoid(5),
  name: `name ${i + 1}`
})

export const CHATS = Array.from({ length: 5 }).map((_, i) =>
  createChatMock(i)
);