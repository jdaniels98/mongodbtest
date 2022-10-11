const yargs = require("yargs")
const { client, connection } = require("./db/connection")
const Movie = require("./utils")

const app = async (yargsObject) => {
    const collection = await connection()
    
    try {
        if (yargsObject.create) {
            //create
            const movie = new Movie(yargsObject.title, yargsObject.actor)
            await movie.create(collection)
            console.table(await movie.read(collection))
        } else if (yargsObject.read) {
            //read
            const movie = new Movie(yargsObject.title, yargsObject.actor)
            console.table(await movie.read(collection))
        } else if (yargsObject.update) {
            //updateOne
            const updateMovie = new Movie(yargsObject.title, yargsObject.actor)
            await updateMovie.update(collection, yargsObject.key, yargsObject.filter)
            console.table(await updateMovie.read(collection))
        } else if (yargsObject.delete) {
            //deleteOne
            const deleteMovie = new Movie(yargsObject.title, yargsObject.actor)
            await deleteMovie.delete(collection)
            console.table(await updateMovie.read(collection))
        } else {
            console.log("Incorrect Command.")
        }

        await client.close()
    } catch (error) {
        console.log(error)
        await client.close()
    }
}

app(yargs.argv)