export interface Users{
    id: number,
    userName: string,
    email: string,
    password: string,
    confirmPassword: string,
    status: number,
}

export interface Account{
    email: string,
    password: string,
}

export interface Category{
    id: number,
    name: string,
}

export interface Products{
    id: number,
    name: string,
    img: string,
    describe: string,
    expression: string,
    price: number
}

export interface AddProduct{
    name: string,
    img: string,
    describe: string,
    expression: string,
    price: number
}

export interface Admin{
    email: string, 
    password: string
}