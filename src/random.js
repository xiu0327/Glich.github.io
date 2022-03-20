const pokemon = [
    {
        image:"img/01.png",
        name:"라이츄",
        info:"긴 꼬리가 어스가 되어 몸을 지키기 때문에 자신은 고전압에도 마비되지 않는다.",
    },
    {
        image:"img/02.png",
        name:"니드런",
        info:"몸은 작지만 독침을 지니고 있기 때문에 주의가 필요하다. 암컷의 뿔이 더 작다.",
    },
    {
        image:"img/03.png",
        name:"푸크린",
        info:"숨을 들이쉬면 쉴수록 몸이 부푼다. 기분이 나빠지면 몸을 커다랗게 부풀려 상대에게 위압을 가한다.",
    },
    {
        image:"img/04.png",
        name:"라프라스",
        info:"영리하고 마음 착한 포켓몬. 아름다운 소리로 노래 부르며 바다 위를 헤엄친다.",
    },
    {
        image:"img/05.png",
        name:"암나이트",
        info:"먼 옛날 바다에서 살고 있던 고대 포켓몬. 10개의 다리를 구불거리며 헤엄친다.",
    },
    {
        image:"img/06.png",
        name:"미뇽",
        info:"탈피를 반복하며 커진다. 허물을 다듬어서 만든 부츠는 최고급품이다.",
    },
    {
        image:"img/07.png",
        name:"망나뇽",
        info:"평소에는 극히 온화하지만 역린을 건드리면 모든 것을 부술 때까지 진정하지 않는다.",
    },
];

const randomText = document.querySelector(".randomText");
const randomName = document.querySelector(".randomName");
const randomImage = document.querySelector(".randomImage img");
const randomPokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
randomImage.src = `${randomPokemon.image}`;
randomText.innerText = `야생의 ${randomPokemon.name}이(가) 나타났다!`;
randomName.innerText = `${randomPokemon.name}은(는) ${randomPokemon.info}`