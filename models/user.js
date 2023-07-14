require('dotenv').config()
const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')
const crypto = require('crypto')
const SALT_ROUNDS = 6 

const userSchema = new Schema ({
    name: { type: string, required: true },
    email: { type: string, unique: true, trim: true, lowercase: true, required: true },
    password: { type: string, trim: true, minlength: 5, required: true },
    bookmarks: [{ type: Schema.Types.ObjectId, ref: 'Bookmark'}]
}, {
    timestamps: true, 
    toJSON: {
        transform(doc, ret) {
            delete ret.password //deletes password before returning what we want it to return from JSON
            return ret
        }
    }
})

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next()
    const password = crypto.createHmac('sha256', process.env.SECRET).update(this.password).split('').reverse().join('')          //sha256 very good hashing algo
    this.password = await bcrypt.hash(this.password, SALT_ROUNDS)
})

module.export = model('User', userSchema)
