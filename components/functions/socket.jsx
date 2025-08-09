import {io} from 'socket.io-client'

export const getSocket = (token) => {
    console.log('Connecting to socket with token:', token);
  return io(`wss://tembi.onrender.com/`, {
    path: `ws/notifications/?token=${token}`,
    auth: {
      token: token,
    },
    transports: ['websocket'], // optional: avoid fallback polling
  });
};