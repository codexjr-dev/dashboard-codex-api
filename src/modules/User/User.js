const { Schema, model } = require('mongoose');
const Ej = require('@ej/Ej');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['presidente', 'diretor'],
        required: true,
        default: 'diretor'
    },
    ej: {
        type: Schema.Types.ObjectId,
        ref: Ej,
        required: true
    }
},
    {
        timestamps: true,
    });

module.exports = model('User', UserSchema);