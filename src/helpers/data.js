import toppick1 from '../images/toppick1.png';
import toppick2 from '../images/toppick2.png';
import toppick3 from '../images/toppick3.png';
const available1 = require('../images/available1.png');
const available2 = require('../images/available2.png');
const available3 = require('../images/available3.png');
const available4 = require('../images/available4.png');
const available5 = require('../images/available5.png');
const available6 = require('../images/available6.png');
const available7 = require('../images/available7.png');
const available8 = require('../images/available8.png');

export const locations = () => {
    return (
        [
            {
                id: 1,
                state: 'Imo',
                noOfArtisans: 5,
                noOfSMEs: 7
            },
            {
                id: 2,
                state: 'Enugu',
                noOfArtisans: 15,
                noOfSMEs: 7
            },
            {
                id: 3,
                state: 'Anambra',
                noOfArtisans: 25,
                noOfSMEs: 7
            },
            {
                id: 4,
                state: 'Abia',
                noOfArtisans: 5,
                noOfSMEs: 7
            },
            {
                id: 5,
                state: 'Lagos',
                noOfArtisans: 5,
                noOfSMEs: 17
            }
        ]
    )
}

export const topPicks = () => {
    return (
        [
            {
                id: 1,
                imgPath: toppick1,
                category: 'Hoodies Top and Shirts',
                name: 'Dazzling Beauty Palace',
                desc: "Nostrud nulla voluptate consectetur aliqua ullamco Lorem ea est incididunt ea do velit magna. Consequat fugiat culpa qui aliqua culpa adipisicing laborum fugiat.",
                amt: 456.24,
                discount: 356.24,
                location: 'Lekki, Lagos',
                phone: '+234-816-633-9714',
                bestseller: false
            },
            {
                id: 2,
                imgPath: toppick2,
                category: 'Soft Arm Chair',
                name: 'Adekola Furniture',
                desc: "Nostrud nulla voluptate consectetur aliqua ullamco Lorem ea est incididunt ea do velit magna. Consequat fugiat culpa qui aliqua culpa adipisicing laborum fugiat.",
                amt: 456.24,
                discount: 356.24,
                location: 'Lekki, Lagos',
                phone: '+234-816-633-9714',
                bestseller: true
            },
            {
                id: 3,
                imgPath: toppick3,
                category: 'Red Velvet Cake',
                name: 'Cake and Pastries',
                desc: "Nostrud nulla voluptate consectetur aliqua ullamco Lorem ea est incididunt ea do velit magna. Consequat fugiat culpa qui aliqua culpa adipisicing laborum fugiat.",
                amt: 456.24,
                discount: 356.24,
                location: 'Lekki, Lagos',
                phone: '+234-816-633-9714',
                bestseller: false
            },
            {
                id: 4,
                imgPath: toppick3,
                category: 'Hoodies Top and Shirts',
                name: 'Dazzling Beauty Palace',
                desc: "Nostrud nulla voluptate consectetur aliqua ullamco Lorem ea est incididunt ea do velit magna. Consequat fugiat culpa qui aliqua culpa adipisicing laborum fugiat.",
                amt: 456.24,
                discount: 356.24,
                location: 'Lekki, Lagos',
                phone: '+234-816-633-9714',
                bestseller: false
            },
            {
                id: 5,
                imgPath: toppick3,
                category: 'Hoodies Top and Shirts',
                name: 'Dazzling Beauty Palace',
                desc: "Nostrud nulla voluptate consectetur aliqua ullamco Lorem ea est incididunt ea do velit magna. Consequat fugiat culpa qui aliqua culpa adipisicing laborum fugiat.",
                amt: 456.24,
                discount: 356.24,
                location: 'Lekki, Lagos',
                phone: '+234-816-633-9714',
                bestseller: false
            },
            {
                id: 6,
                imgPath: toppick3,
                category: 'Hoodies Top and Shirts',
                name: 'Dazzling Beauty Palace',
                desc: "Nostrud nulla voluptate consectetur aliqua ullamco Lorem ea est incididunt ea do velit magna. Consequat fugiat culpa qui aliqua culpa adipisicing laborum fugiat.",
                amt: 456.24,
                discount: 356.24,
                location: 'Lekki, Lagos',
                phone: '+234-816-633-9714',
                bestseller: false
            },
            {
                id: 7,
                imgPath: toppick3,
                category: 'Hoodies Top and Shirts',
                name: 'Dazzling Beauty Palace',
                desc: "Nostrud nulla voluptate consectetur aliqua ullamco Lorem ea est incididunt ea do velit magna. Consequat fugiat culpa qui aliqua culpa adipisicing laborum fugiat.",
                amt: 456.24,
                discount: 356.24,
                location: 'Lekki, Lagos',
                phone: '+234-816-633-9714',
                bestseller: false
            },
        ]
    )
}

export const availableCate = () => {
    return (
        [
            {
                id: 1,
                imgPath: available1,
                category: 'Furniture',
                localServices: 45,
                intlServices: 2,
                payOnDelivery: 10
            },
            {
                id: 2,
                imgPath: available2,
                category: 'Banking',
                localServices: 45,
                intlServices: 2,
                payOnDelivery: 10
            },
            {
                id: 3,
                imgPath: available3,
                category: 'Make Over',
                localServices: 45,
                intlServices: 2,
                payOnDelivery: 10
            },
            {
                id: 4,
                imgPath: available4,
                category: 'Photography',
                localServices: 45,
                intlServices: 2,
                payOnDelivery: 10
            },
            {
                id: 5,
                imgPath: available5,
                category: 'Electricity',
                localServices: 45,
                intlServices: 2,
                payOnDelivery: 10
            },
            {
                id: 6,
                imgPath: available6,
                category: 'Fashion Design',
                localServices: 45,
                intlServices: 2,
                payOnDelivery: 10
            },
            {
                id: 7,
                imgPath: available7,
                category: 'Painting',
                localServices: 45,
                intlServices: 2,
                payOnDelivery: 10
            },
            {
                id: 8,
                imgPath: available8,
                category: 'Photography',
                localServices: 45,
                intlServices: 2,
                payOnDelivery: 10
            }
        ]
    )
}