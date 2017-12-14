module.exports = io => {
    // const userList = [];

    io.on('connection', socket => {
        const unknownUser = {
            displayName: '익명'
        }
        const session = socket.request.session;
        
        let user = Object.keys(session.passport).length === 0 ? unknownUser : session.passport.user;

        // if (userList.indexOf(user.displayName) === -1) {
        //     userList.push(user.displayName);
        // }

        // io.emit('join', userList);

        socket.on('client message', data => {
            session.reload((session) => {
                user = Object.keys(session.passport).length === 0 ? unknownUser : socket.request.session.passport.user;

                io.emit('server message', { message: data.message, displayname: user.displayName, session: session });
            });
        });

        socket.on('disconnect', () => {
            // const idx = userList.indexOf(user.displayName);

            // if (idx > -1) userList.splice(idx, 1);
            // io.emit('leave', userList);
        });
    });
};
