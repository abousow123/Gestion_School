export class User{
    constructor(){};

    firstName: string;
    lastName: string;
    tel: string;
    login: string;
    password: string;
    photo: string;
    username: string;
    userActive: boolean ;
    role: Role = new Role() ;
}


export class Role{
    constructor(){};

    id: number ;
    authority: string;

}