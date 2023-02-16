export class food{
  id!:number;
  name!:string;
  price!:number;
  stars:number=0;
  tags?:string[];
  favorite:boolean=false;
  imgUrl!:string;
  origins!:string[];
  cookTime!:string;
}
