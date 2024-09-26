import { Type } from "class-transformer";

export class UserDTO {

 
  mail: string;

  name: string;

  surname: string;

  hashedPassword: string; 
  
  createdAt: Date;

  updatedAt: Date;

  imgname: string | null;


  }