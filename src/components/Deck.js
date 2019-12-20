import Card from './Card';

const RED_SUITS = ['heart', 'diamond'];
const BLACK_SUITS = ['spade', 'club'];
class Deck {
    constructor() {
        this.deck = [];
        for(let redSuit of RED_SUITS) {
            for(let i = 1; i <= 13; i++) {
                this.deck.push(new Card(i, 'red', redSuit));
            }
        }
        for(let blackSuit of BLACK_SUITS) {
            for(let i = 1; i <= 13; i++) {
                this.deck.push(new Card(i, 'black', blackSuit));
            }
        }
        this.deck = this.shuffle(this.deck);
    }
    getTopCard() {
        return this.deck.pop();
    }
    shuffle(a) {
        var j, x, i;
        for(i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }
}
export default Deck;