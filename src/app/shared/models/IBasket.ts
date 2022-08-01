import {IProduct} from './IProduct'
// import {v4} from ''

export interface IBasketItems{
}


export interface IBasket{
  id:string,
  items:IProduct[]
}
