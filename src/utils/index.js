class Movie {
    constructor(title, actor = "Not Specified") {
        this.title = title
        this.actor = actor
    }
    // write our CRUD operations

    //create
    async create (collection) {
        await collection.insertOne(this)
    }

    //read
    async read (collection) {
        return await collection.find({}).toArray()
    }

    //updateOne
    async update (collection, key, filter) {
        await collection.updateOne({ [key]: filter }, { $set: this })
    }

    //deleteOne
    async delete (collection) {
        await collection.deleteOne(this)
    }
}

module.exports = Movie