const yargs = require("yargs")
const { client, connection } = require("./db/connection")

const app = async (yargsObject) => {
    const collection = await connection()
    
    try {
        if (yargsObject.create) {
            //Create
        } else if (yargsObject.read) {
            //Read
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