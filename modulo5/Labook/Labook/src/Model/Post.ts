enum POST_TYPES {
  NORMAL = 'normal',
  EVENT = 'event',
}

export type postData = {
  photo: string;
  description: string;
  type: POST_TYPES;
};

export type post = postData & { id: string; createdAt: Date; authorId: string };
