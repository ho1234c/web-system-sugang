module.exports = io => {
    const userList = [];

    io.on('connection', socket => {
        const session = socket.request.session.passport;
        const user = (typeof session !== 'undefined') ? ( session.user ) : "";

        if(userList.indexOf(user.displayname) === -1){
            userList.push(user.displayname);
        }
        io.emit('join', userList);

        socket.on('client message', data => {
            io.emit('server message', { message : data.message , displayname : user.displayname });
        });

        socket.on('disconnect', () => {
            const idx = userList.indexOf(user.displayname);

            if (idx > -1) userList.splice(idx, 1);
<<<<<<< HEAD

=======
            
>>>>>>> origin/ksy
            io.emit('leave', userList);
        });

    });
};
