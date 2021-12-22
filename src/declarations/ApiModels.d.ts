interface Car {
    id: string;
    brand: string;
    name: string;
    about: string;
    period: string;
    price: number;
    fuel_type: string;
    thumbnail: string;
    accessories:
    {
        id: string;
        type: string;
        name: string;
    }[];
    photos:
    {
        id: string;
        photo: string;
    }[];
}

interface User {
    id: string;
    email: string;
    name: string;
    cnh: string;
    avatar: string;
}



