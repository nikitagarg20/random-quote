const quotes=[
    {
        quote:`Many of life’s failures are people who did not realize how close they were to success when they gave up.`,
        author:`– Thomas A. Edison`
    },
    {
        quote:`If you want to live a happy life, tie it to a goal, not to people or things.`,
        author:`– Albert Einstein`
    },
    {
        quote:`Curiosity about life in all of its aspects, I think, is still the secret of great creative people.`,
        author:`– Leo Burnett`
    },
    {
        quote:`Don’t settle for what life gives you; make life better and build something.`,
        author:`– Ashton Kucher`
    },
    {
        quote:`Everything negative – pressure, challenges – is all an opportunity for me to rise.`,
        author:`– Ashton Kutcher`
    },
    {
        quote:`If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.`,
        author:`– Steve Jobs`
    },
    {
        quote:`Happiness is not something ready made. It comes from your own actions.`,
        author:`– Dalai Lama XIV`
    },
    {
        quote:`The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.`,
        author:`– Winston Churchill`
    },
    {
        quote:`Magic is believing in yourself. If you can make that happen, you can make anything happen.`,
        author:`– Johann Wolfgang Von Goethe`
    }
]

const load= document.getElementById('btn').addEventListener('click',runEvent);

function runEvent(){
    let newQ= document.querySelector(".quote");
    let newA= document.querySelector(".author");
    let random= Math.floor(Math.random()*quotes.length);
    newQ.innerHTML=quotes[random].quote;
    newA.innerHTML=quotes[random].author;

}



