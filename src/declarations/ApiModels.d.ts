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
    user_id: string;
    email: string;
    name: string;
    driver_license: string;
    avatar: string;
    token: string;
}



