class Movie {
    constructor(title, actor = "Not Specified") {
        this.title = title
        this.actor = actor
    }
    // write our CRUD operations

    //CREATE
    async create (collection) {
        await collection.insertOne(this)
    }

    //READ
    async read (collection) {
        return await collection.find({}).toArray()
    }
}

module.exports = Movie