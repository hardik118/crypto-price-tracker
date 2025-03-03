"use client";

import { useQuery } from "@tanstack/react-query";
import { getLiveCryptoPrices } from "@/lib/api";
import { useEffect, useState } from "react";
import CrypoCards from "./Components/cryptoCards";
import { cookies } from "next/headers";
import Skeleton from "./Components/SkeletionDiv";
import { Notification } from "./Components/Notification";

export interface CoinInfo{
  ath: number 
  ath_change_percentage: number
  atl: number
  atl_change_percentage: number
  current_price: number
  name: string
  image: string
  low_24h: number
  high_24h: number
  market_cap: number
  price_change_24h: number
 
}

export default function Home() {
  const [search, setSearch]= useState('');
  const [freshFetched, setfreshFetched]= useState<boolean>(false);

  

  const { data, isLoading, isFetching, refetch } = useQuery({    
    queryKey: ["cryptoPrices"],
    queryFn: getLiveCryptoPrices,
    refetchOnMount: false,  
    refetchOnWindowFocus: false, 
  });
 

  

  if(!data) return <div className="flex  h-screen items-center justify-center flex-col">
    <h1 className="text-gray-400 pb-2 ">Loading Your Content ....</h1>
<div className="flex flex-row gap-3">
<Skeleton></Skeleton> <Skeleton></Skeleton>
  </div>
  </div>


if(isLoading) return <div className="flex h-screen items-center justify-center">
<h1 className="text-gray-400 ">Loading The Prices For You</h1>
<div className="flex flex-row gap-3" >
<Skeleton></Skeleton> <Skeleton></Skeleton>
  </div>
</div>

  const filteredData= data.filter((coin: CoinInfo)=>
  coin.name.toLowerCase().includes(search.toLowerCase())
);

const FetchCall = () => {
  setfreshFetched(prev => !prev); 

  setTimeout(() => {
    setfreshFetched(prev => !prev); 
  }, 3000);
};



  return (
    <div className="h-screen w-full ">
      <div className="bg-white border border-b-gray-300   top-0 w-full text-xl text-white h-auto p-2  flex items-center justify-between" >
        <h1 className="ml-2 font-semibold text-xl  text-purple-500 p-1">LiveCrypto </h1>
        <div className="flex flex-row gap-4">
        <input 
        onChange={(e)=>setSearch(e.target.value)}
        value={search}
         className=" bg-white text-gray-800 text-sm   border-gray-300 border placeholder:text-gray-500 rounded-md  text-center" type="text" placeholder="Find Crypto"></input>
        <button  onClick={()=>{refetch(), FetchCall()}} className="hover:text-gray-500 hover:border-gray-400 border  text-xs rounded-lg p-2  h-auto hover:bg-white bg-purple-500 text-white ">LatestPrice</button>

        </div>
      </div>
      <div className="h-auto w-full p-1 mt-2  flex justify-end">
      {  freshFetched &&     <Notification heading="Prices Are Refreshed ."></Notification>
      }
      </div>
      <div className="  min-h-full flex items-center justify-center h-auto   ">

        <div className=" h-auto  min-h-[80vh] pt-20 w-2/3  flex items-center justify-center flex-col gap-12 pb-10    ">

    {filteredData.length>0 ?
    (
      filteredData.map((coin: CoinInfo  )=>{
        console.log("done");
      
      return <CrypoCards price_change_24h={coin.price_change_24h} ATL_Change={coin.atl_change_percentage} ATH_Change={coin.ath_change_percentage} name={coin.name} price={coin.current_price} ImgSrc={coin.image} ATH={coin.ath} ATL={coin.atl} Low={coin.low_24h} High={coin.low_24h} MarketCap={coin.market_cap}  ></CrypoCards>
    }
      )
    )
    :  (
      <p className="text-gray-500 text-center col-span-2">
        No results found.
      </p>
    )
    
  
  }   


       
        </div>
      </div>

    </div>
    
  );
}
