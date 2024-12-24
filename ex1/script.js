const musicCollection = [
    { title: 'Graduation', artist: 'Kanye West', year: '2007' },
    { title: 'Day X', artist: 'Wildways', year: '2018' },
    { title: 'Comatose', artist: 'Skillet', year: '2006' },
]

// books[Symbol.iterator] = function() {
//     return {
//         current: 0,
//         to: this.length,
//         next() {
//             return this.current < this.to ? { done: false, value: books[this.current++] } : { done: true };
//         }
//     }
// }

musicCollection[Symbol.iterator] = function() {
    return {
        current: 0,
        to: this.length,
        next() {
            return this.current < this.to ? { done: false, value: musicCollection[this.current++] } : { done: true };
        }
    }
}


for (let i of musicCollection) {
    console.log(`${i.title} - ${i.artist} (${i.year})`);
}