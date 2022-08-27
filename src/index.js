import express from "express"
import cors from "cors"

const app = express();
app.use(cors());
app.use(express.json());

const users = [
    {
        username: 'bobesponja', 
        avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info" 
    },
];

const tweets = [
    {
        username: "bobesponja",
        tweet: "eu amo o hub"
    }
];

app.post('/sign-up', (req, res) => {

    if(!req.body.username || !req.body.avatar){
        return res.status(400).send('Todos os campos são obrigatórios!')
    }

    users.push(req.body);
    res.send("Ok");
});

app.post('/tweets', (req, res) => {
    if(!req.body.username || !req.body.tweet){
        return res.status(400).send('Todos os campos são obrigatórios!')
    }

    tweets.push(req.body);
    res.send("OK")
});

app.get('/tweets', (req, res) => {
    const tweetsEnviados = [];
    if(tweets.length > 10){
        for(let i = 0; i < 10; i++){
            let tweetInf = tweets[tweets.length - 1 - i]
            const userProfileImg = users.find((item) => item.username === tweetInf.username)
            tweetInf = {
                ...tweetInf,
                avatar:userProfileImg.avatar
            }
            tweetsEnviados.push(tweetInf)
        }
    }
    else{
        for(let i = 0; i < tweets.length; i++){
            let tweetInf = tweets[tweets.length - 1 - i]
            const userProfileImg = users.find((item) => item.username === tweetInf.username)
            tweetInf = {
                ...tweetInf,
                avatar:userProfileImg.avatar
            }
            tweetsEnviados.push(tweetInf)
        }
    }

    res.send(tweetsEnviados)
});

app.listen(5000, () => console.log('listen on port 5000'));