import { Ahmed, Chair, Nabil, PayoneerW, PaypalW, Remitly, Shafi, Shoes, WorldRemit } from '@/assets/images/withdraw'
import { Img3 } from '@/assets/images/campaign'
import { Avatar } from '@/assets/images/header'

export const walletList = [
    {
        logo: PaypalW,
        name: 'Paypal Withdraw',
        dateTime: '31 Oct, 11:00pm',
        amount: 500.00
    },
    {
        logo: WorldRemit,
        name: 'Worldremit Withdraw',
        dateTime: '27 Sep, 10:40am',
        amount: 200.00
    },
    {
        logo: PayoneerW,
        name: 'Payoneer Withdraw',
        dateTime: '15 Aug, 08:00am',
        amount: 50.00
    },
    {
        logo: Remitly,
        name: 'Remitly Withdraw',
        dateTime: '11 Jun, 12:00pm',
        amount: 800.00
    },
    {
        logo: PayoneerW,
        name: 'Payoneer Withdraw',
        dateTime: '31 Apr, 11:00am',
        amount: 80.00
    },
]

export const campaigns = [
    {
        id: 1,
        title: "One Special 4K Camera",
        date: "25 Oct 2021",
        category: "Camera Gear",
        amount: "$5,850",
        image: Chair,
        backer: {
            name: "Mahfuzul Nabil",
            avatar: Avatar,
            rating: 5,
        },
    },
    {
        id: 2,
        title: "Cool Comfy Shoes Easy You",
        date: "25 Oct 2021",
        category: "Clothe & Wearable",
        amount: "$2,550",
        image: Img3,
        backer: {
            name: "Adom Shafi",
            avatar: Shafi,
            rating: 4,
        },
    },
    {
        id: 3,
        title: "The Watchman’s Chairs",
        date: "25 Oct 2021",
        category: "Home",
        amount: "$1,100",
        image: Shoes,
        backer: {
            name: "Sami Ahmed",
            avatar: Ahmed,
            rating: 5,
        },
    },
    {
        id: 4,
        title: "“Lost Soul” graphic novel",
        date: "25 Oct 2021",
        category: "Comics",
        amount: "$1,550",
        image: Chair,
        backer: {
            name: "Sajib Rahman",
            avatar: Nabil,
            rating: 3,
        },
    },
    {
        id: 5,
        title: "Building Hope Village",
        date: "25 Oct 2021",
        category: "Real Estate",
        amount: "$4,250",
        image: Img3,
        backer: {
            name: "Saiful Islam R.",
            avatar: Shafi,
            rating: 5,
        },
    },
    {
        id: 6,
        title: "New iMac For My Business!",
        date: "25 Oct 2021",
        category: "Accessories",
        amount: "$4,000",
        image: Shoes,
        backer: {
            name: "Jubed Ahmed",
            avatar: Ahmed,
            rating: 5,
        },
    },
    {
        id: 7,
        title: "Resturants Open Business",
        date: "25 Oct 2021",
        category: "Resturant",
        amount: "$3,050",
        image: Img3,
        backer: {
            name: "Delowar H.",
            avatar: Nabil,
            rating: 5,
        },
    },
    {
        id: 8,
        title: "The Lords of Verona – 1262",
        date: "25 Oct 2021",
        category: "Fashion",
        amount: "$4,50",
        image: Shoes,
        backer: {
            name: "Hasan Nayem",
            avatar: Shafi,
            rating: 3,
        },
    },
    {
        id: 9,
        title: "Gamepad Joystick for Robot",
        date: "25 Oct 2021",
        category: "Video Games",
        amount: "$1,500",
        image: Chair,
        backer: {
            name: "Saleh Ahmed",
            avatar: Ahmed,
            rating: 4,
        },
    },
    {
        id: 10,
        title: "Hear Off-World, Listen Off-Ear",
        date: "25 Oct 2021",
        category: "Audio",
        amount: "$2,500",
        image: Img3,
        backer: {
            name: "AR Jakir",
            avatar: Nabil,
            rating: 5,
        },
    },
];