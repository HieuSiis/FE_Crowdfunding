import { Camera, Chair, IMac, LostSoul, Powered, Restaurant, Shoes, Village } from '@/assets/images/dashboard';
import { Adom, Cham, Mahbubul, Mahfuzul, Nill, Sajib, Saleh, Sami } from '@/assets/avatars/dashboard';

export const dummyData = {
    popular: [
        {
            id: 1,
            image: Powered,
            category: "Education",
            title: "Powered Kits Learning Boxes",
            description: "Fun, durable and reusable boxes with eco-friendly options.",
            amountRaised: 2000,
            target: 1900,
            backers: 173,
            author: "Mahfuzul Nabil",
            avatar: Mahfuzul
        },
        {
            id: 2,
            image: Village,
            category: "Real Estate",
            title: "Building Hope Village",
            description: "Together we can create access for everyone!",
            amountRaised: 250,
            target: 1900,
            backers: 50,
            author: "Adom Shafi",
            avatar: Adom
        },
        {
            id: 3,
            image: IMac,
            category: "Real Estate",
            title: "New iMac For My Business!",
            description: "My computer decided to die. As a result, my small business.",
            amountRaised: 1200,
            target: 1800,
            backers: 12,
            author: "Sami Ahmed",
            avatar: Sami
        },
        {
            id: 4,
            image: Chair,
            category: "Home",
            title: "The Watchman's Chairs",
            description: "Your home for indie and classic cinema has just been handed an...",
            amountRaised: 5000,
            target: 10900,
            backers: 100,
            author: "Nill",
            avatar: Nill
        },
    ],
    recent: [
        {
            image: Camera,
            category: "Camera Gear",
            title: "Advanced 4K Action Camera",
            description: "THE SV RIG. - Start Creating Now Without Limitation.",
            amountRaised: 500,
            target: 1100,
            backers: 173,
            author: "Cham",
            avatar: Cham
        },
        {
            image: Restaurant,
            category: "Food",
            title: "Resturants Open Business",
            description: "A unique restaurant, bar, beer garden, and tailgating location",
            amountRaised: 950,
            target: 1200,
            backers: 150,
            author: "Mahbubul Alom",
            avatar: Mahbubul
        },
        {
            image: LostSoul,
            category: "Comics",
            title: "“Lost Soul” graphic novel",
            description: 'A team of ex-superheroes attempt to save a "monster"',
            amountRaised: 1800,
            target: 1900,
            backers: 5,
            author: "Sajib Rahman",
            avatar: Sajib
        },
        {
            image: Shoes,
            category: "Clothe & Wearables",
            title: "Cool Comfy Shoes easy on You",
            description: "A new category of super comfortable casual shoes.",
            amountRaised: 4000,
            target: 5000,
            backers: 100,
            author: "Saleh Ahmed",
            avatar: Saleh
        },
    ]
};