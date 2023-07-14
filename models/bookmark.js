const { Schema, model } = requie('mongoose')

const bookmarkSchema = new Schema({
    title: { type: string, required: true },
    url: { type: String, required: tru }, 
}, {
    timestamps: true
})


module.exports = model('Bookmark', bookmarkSchema)