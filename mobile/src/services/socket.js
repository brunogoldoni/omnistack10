import socketio from 'socket.io-client';

const socket = socketio('http://10.0.1.86:3333', {
  autoConnect: false,
});

function subscribeToNewDevs(subcribeFunction) {
  socket.on('new-dev', subcribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = {
    latitude,
    longitude,
    techs,
  };

  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subscribeToNewDevs,
};
