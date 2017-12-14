module.exports = io => {
    const userList = [];

    io.on('connection', socket => {
        let session = socket.request.session.passport;
        let user = (typeof session !== 'undefined') ? ( session.user ) : "UserUnknown";

        // if(userList.indexOf(user.displayName) === -1){
        //     userList.push(user.displayName);
        // }

        // io.emit('join', userList);

        // socket.on('client message', data => {
        //   session = socket.request.session.passport;
        //   user = (typeof session !== 'undefined') ? ( session.user ) : "UserUnknown";
        //     io.emit('server message', { message : data.message , displayname : user.displayName });
        // });

        // socket.on('disconnect', () => {
        //     const idx = userList.indexOf(user.displayName);

        //     if (idx > -1) userList.splice(idx, 1);
        //     io.emit('leave', userList);
        // });

    });
};
