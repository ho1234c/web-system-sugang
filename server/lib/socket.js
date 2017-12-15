module.exports = io => {
    io.on('connection', socket => {
        const session = socket.request.session;

        io.emit('conn', { count: Math.floor(Math.random() * 100000) });
        // if (userList.indexOf(user.displayName) === -1) {
        //     userList.push(user.displayName);
        // }

        // io.emit('join', userList);

        socket.on('client message', data => {
            session.reload(() => {
                io.emit('server message', { message: data.message, displayName: data.displayName });
            });
        });

        socket.on('disconnect', () => {
            // const idx = userList.indexOf(user.displayName);

            // if (idx > -1) userList.splice(idx, 1);
            // io.emit('leave', userList);
        });
    });
};
