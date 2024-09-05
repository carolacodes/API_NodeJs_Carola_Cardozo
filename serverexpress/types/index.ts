//TIPEOS GENERALES

type UserRole = "admin" | "comprador" | "vendedor" | undefined;

export interface IUser {
    _id: string | undefined;
    firts_name: string;
    last_name: string;
    email: string;
    password: string;
    role: UserRole;
    avatar: string | undefined;
}

export interface IProduct {
    _id: string | undefined;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
}

export interface ICart {
    products: {_id: string, quantity: number}[];
    user_id: string
    totalPrice: number;
}

export interface ICategory {
    name: string
}
