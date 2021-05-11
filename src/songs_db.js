import React from 'react';
//Importing unique identifiers
import {v4 as uuidv4} from 'uuid';

const songs_db = () => {
    return (
        [
            {
                favourite: false,
                name: 'By Chance',
                cover : 'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
                artist: 'SwuM',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=15224',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'On the Moon',
                cover : 'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
                artist: 'SwuM',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=15237',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Skates',
                cover : 'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
                artist: 'SwuM',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=15225',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Wish',
                cover : 'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
                artist: 'SwuM',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=15230',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Reflect',
                cover : 'https://chillhop.com/wp-content/uploads/2021/03/74d62bc9370a68e440c1b98eaf650344f0a7faea-1024x1024.jpg',
                artist: 'SwuM',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=15238',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Lonely Waves',
                cover : 'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
                artist: 'C Y G N',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=14980',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Blue Moon',
                cover : 'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
                artist: 'C Y G N',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=14990',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Playful Obsession',
                cover : 'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
                artist: 'C Y G N',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=14982',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Taste of Heaven',
                cover : 'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
                artist: 'C Y G N',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=14992',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Dreamlover',
                cover : 'https://chillhop.com/wp-content/uploads/2021/02/d12927eedcc2f5afba2ab049a4a1ea46c2266ae3-1024x1024.jpg',
                artist: 'C Y G N',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=14993',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Kinsfolk',
                cover : 'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
                artist: 'Aarigod',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=12996',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Woodnote',
                cover : 'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
                artist: 'Aarigod',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=13011',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Golden',
                cover : 'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
                artist: 'Aarigod',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=13004',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Evenfalls',
                cover : 'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
                artist: 'Aarigod',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=13006',
                id : uuidv4(),
                active: false
            },
            {
                favourite: false,
                name: 'Maple',
                cover : 'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
                artist: 'Aarigod',
                audio : 'https://mp3.chillhop.com/serve.php/?mp3=13012',
                id : uuidv4(),
                active: false
            }
        ]
    );
}

export default songs_db;