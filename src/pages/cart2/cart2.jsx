import React from 'react'
import { useGetCategory } from '../../service/query/useGetData'
import { Cart } from '../../components/cart'


export const Cart2 = () => {
  const {data} = useGetCategory("noutbuk")

 return (
   <div className="flex flex-wrap">
     {data?.slice(0, 10).map((item) => {
       return <Cart {...item} />;
     })}
   </div>
 );
}
