module.exports = io => {
    // const userList = [];

    io.on('connection', socket => {
        const unknownUser = {
            displayName: '익명'
        }
        const session = socket.request.session;

        let user = 'passport' in session ? session.passport.user : unknownUser;

        // if (userList.indexOf(user.displayName) === -1) {
        //     userList.push(user.displayName);
        // }

        // io.emit('join', userList);

        socket.on('client message', data => {
            session.reload(() => {
                io.emit('server message', { message: data.message });
            });
        });

        socket.on('disconnect', () => {
            // const idx = userList.indexOf(user.displayName);

            // if (idx > -1) userList.splice(idx, 1);
            // io.emit('leave', userList);
        });
    });
};
