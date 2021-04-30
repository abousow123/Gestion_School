export class User{
    constructor(){};

    id: string;
    firstName: string;
    lastName: string;
    tel: string = "";
    login: string;
    password: string;
    photo: string;
    username: string;
    userActive: boolean ;
    roles: Array<Role> ;
}


export class Role{
    constructor(){};

    id: number ;
    authority: string;

}

export class UserLogin{

  constructor(){} ;

  login: string;
  password: string;

}
