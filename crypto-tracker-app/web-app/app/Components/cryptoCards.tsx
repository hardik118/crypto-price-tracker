"use client";

import Image from "next/image";
import { formatToUSD } from "../FormattingFunctions/ValToUsd";

interface CryptoInfoTypes {
  name: string;
  price: number;
  ImgSrc: string;
  ATH: number;
  ATL: number;
  High: number;
  Low: number;
  MarketCap: number;
  ATH_Change: number;
  ATL_Change: number;
  price_change_24h: number;
}

export default function CrypoCards({
  name,
  price,
  ImgSrc,
  ATH,
  ATL,
  High,
  Low,
  MarketCap,
  ATH_Change,
  ATL_Change,
  price_change_24h,
}: CryptoInfoTypes) {
  const PriceChangeColor = price_change_24h > 0 ? "text-green-500" : "text-red-500";

  return (
    <div className="min-h-[30vh] w-full sm:w-[45vw] md:w-[30vw] bg-white border shadow-lg rounded-lg p-4 border-gray-200 flex flex-col">
      
      <div className="flex flex-col md:flex-row items-center gap-4">
        
        <div className="w-full md:w-1/3 flex justify-center">
          <Image src={ImgSrc} width={80} height={80} alt={name} priority />
        </div>

        <div className="w-full md:w-2/3 bg-gray-50 transition transform duration-300 ease-in-out border border-gray-200 rounded-lg p-3 text-sm text-gray-500">
          <div className="flex flex-col gap-1">
            <h1>High: <span className="text-green-500">{formatToUSD(High)}</span></h1>
            <h1>Low: <span className="text-red-500">{formatToUSD(Low)}</span></h1>
            <h1>MarketCap: <span className="text-green-500">{formatToUSD(MarketCap)}</span></h1>
            <h1>ATH: <span className="text-green-500">{formatToUSD(ATH)}</span></h1>
            <h1>ATL: <span className="text-red-500">{formatToUSD(ATL)}</span></h1>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between w-full p-2 mt-2">
        <h1 className="text-lg font-semibold underline text-center sm:text-left">{name}</h1>
        <div className="flex flex-col sm:flex-row justify-between w-full sm:w-2/3 text-gray-500 gap-2 sm:gap-4">
          <h1 className="hover:scale-105">
            Price: <span className="text-blue-500">{formatToUSD(price)}</span>
          </h1>
          <h1>
            <span>{price_change_24h > 0 ? "📈" : "📉"}</span> $(
            <span className={PriceChangeColor}>{price_change_24h.toFixed(4)}</span>)
          </h1>
        </div>
      </div>
    </div>
  );
}
