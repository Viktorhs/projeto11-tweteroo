import express from "express"
import cors from "cors"

const app = express()

const users = [
    {
        username: 'bobesponja', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    }
]

const tweets = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    }
]


app.use(cors())


app.listen("5000", () => {
    console.log('listen port 5000')
})