'use strict'

module.exports = (app) => {
    var roomList = require('../controllers/roomListController')

    app.route('/rooms')
        .get(roomList.listAllRooms)
        .post(roomList.createRoom)

    app.route('/rooms/:roomId')
        .get(roomList.getRoomById)
        .delete(roomList.deleteRoomById)
}