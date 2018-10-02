'use strict'

var mongoose = require('mongoose'),
    Room = mongoose.model('Rooms')

exports.listAllRooms = (req, res) => {
    Room.find({}, (err, task) => {
        if(err) 
            res.send(err)
        res.json(task)        
    })
}

exports.createRoom = (req, res) => {
    var newRoom = new Room(req.body)
    newRoom.save((err, task) => {
        if(err) 
            res.send(err)
        res.json(task)        
    })
}

exports.deleteRoomById = (req, res) => {
    Room.remove({
        _id: req.params.roomId
    }, (err, task) => {
        if(err) 
            res.send(err)
        res.json({ task : 'Room deleted successfully'})        
    })
}

exports.getRoomById = (req, res) => {
    Room.findById(req.params.roomId, (err, task) => {
        if(err) 
            res.send(err)
        res.json(task)        
    })
}
