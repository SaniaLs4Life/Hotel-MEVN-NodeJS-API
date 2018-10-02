'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var RoomSchema = new Schema({
    fullName: {
        type: String,
        required: 'Enter fullname'
    },
    time: {
        type: String,
        required: 'Enter checkout'
    },
    people: {
        type: Number,
        required: 'Enter number of people'
    },
    kids: {
        type: Number,
        required: 'Enter number of kids'
    },
    roomType: {
        type: String,
        required: 'Enter room type'
    },
    roomNumber: {
        type: Number,
        required: 'Enter room number'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Rooms', RoomSchema)