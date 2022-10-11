class Movie {
    constructor(title, actor = "Not Specified") {
        this.title = title
        this.actor = actor
    }
    // write our CRUD operations
    async create (collection) {
        await collection.insertOne(this)
    }
}