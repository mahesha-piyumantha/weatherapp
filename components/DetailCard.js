"use client";

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

export default function DetailCard() {

    const router = useRouter();

    const searchParams = useSearchParams();
    console.log("search param:" + searchParams.get('id'));

    const [cityData, setCityData] = useState(null);


    const convertTimestampToTime = (timestamp) => {
        const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    useEffect(() => {


        if (searchParams) {
            const fetchCityData = async () => {
                try {
                    const apikey = 'c7cd4870117b1abf18e0f50c6f6b484f';
                    const units = 'metric';

                    const url = `https://api.openweathermap.org/data/2.5/weather?id=${searchParams.get('id')}&units=${units}&appid=${apikey}`;
                    const response = await fetch(url);
                    const data = await response.json();

                    console.log(data);
                    setCityData(data);
                } catch (error) {
                    console.log("Error while fetching city data", error);
                }
            };


            fetchCityData();
        }

    }, [searchParams]);

    console.log(cityData);

    //console.log("Param id is :" + id);

    if (!cityData) {

        return <div className='flex justify-center mt-10'>Loading...</div>;
    }


    const cityName = cityData.name;
    const country = cityData.sys.country;
    const status = cityData.weather[0].main;
    const icon = cityData.weather[0].icon;
    const tempMin = cityData.main.temp_min;
    const tempMax = cityData.main.temp_max;
    const pressure = cityData.main.pressure;
    const visibility = cityData.visibility;
    const sunrise = cityData.sys.sunrise;
    const sunset = cityData.sys.sunset;
    const speed = cityData.wind.speed;
    const degree = cityData.wind.deg;
    const temperature = cityData.main.temp;
    const humidity = cityData.main.humidity;
    const time = cityData.dt;

    const localTime = convertTimestampToTime(time + new Date().getTimezoneOffset() * 60);
    const localDateTime = `${localTime}, ${new Date(time * 1000).toLocaleDateString([], { month: 'short', day: 'numeric' })}`;
    const sunriseTime = convertTimestampToTime(sunrise + new Date().getTimezoneOffset() * 60);
    const sunsetTime = convertTimestampToTime(sunset + new Date().getTimezoneOffset() * 60);


    return (

        <div className='flex border-2 
                border-transparent h-[500px] xl:w-[1100px] w-[800px] rounded-lg bg-[#2b2b2c] shadow-lg
                 relative justify-center mx-auto my-10'>

            {/* back arrow */}


            <Image src={'/back-arrow.svg'} onClick={() => router.back()} style={{ cursor: 'pointer' }} width={30} height={30} alt='' className='absolute left-10 top-10' />



            {/* left text column div */}

            <div className='flex h-[300px] w-full bg-blue-600 rounded-t-lg'>
                <div>

                    {/* location */}

                    <div className=' absolute left-[320px] top-[70px] xl:left-[500px] text-[25px] justify-center mx-auto'>
                        {cityName}, {country}
                    </div>

                    {/* time */}

                    <div className=' absolute left-[360px] top-[110px] xl:left-[510px] flex justify-center text-[10px]'>
                        {localDateTime}
                    </div>

                    {/* cloudy state */}

                    <div className=''>

                        <div className=''>

                            <Image src={"/partly-cloudy.png"} width={50} height={50} alt='' className='absolute left-[290px] top-[150px] xl:left-[450px] xl:top-44' />

                        </div>

                        <div className='absolute left-[290px] top-[220px] xl:left-[445px] xl:top-[240px]'>
                            {status}
                        </div>
                    </div>
                </div>


                {/* divider */}

                <div className='absolute bottom-[240px] left-[400px]  xl:bottom-[220px] xl:left-[550px] border-l-2 h-[100px] border-white/20 rounded-lg'>

                </div>


                {/* right text column div */}

                <div>

                    {/* temperature */}

                    <div className='absolute right-[220px] top-[150px] xl:right-[370px] xl:top-44 text-[35px]'>

                        {temperature} °C

                    </div>

                    {/* temp min*/}

                    <div className='absolute top-[230px] right-60 xl:right-[390px] xl:top-[240px] text-[12px]'>

                        Temp min: {tempMin} °C

                    </div>

                    {/* temp max*/}

                    <div className='absolute top-[250px] right-60 xl:right-[390px] xl:top-[260px] text-[12px]'>

                        Temp max: {tempMax} °C

                    </div>

                </div>


                {/* -------------------------------- */}


                {/* bottom left text column div*/}

                <div>

                    {/* pressure */}

                    <div className='absolute left-[150px] bottom-[110px] xl:left-[240px] text-[12px]'>

                        Pressure: <span className='font-thin'>{pressure}hPa</span>

                    </div>

                    {/* humidity */}

                    <div className='absolute left-[150px] bottom-[85px] xl:left-[240px] text-[12px]'>

                        Humidity: <span className='font-thin'>{humidity}%</span>

                    </div>

                    {/* visibility */}

                    <div className='absolute left-[150px] bottom-[60px] xl:left-[240px] text-[12px]'>

                        Visibility: <span className='font-thin'>{visibility} km</span>

                    </div>

                </div>


                {/* -------------------------------- */}

                {/* divider */}

                <div className='absolute bottom-14 left-[300px] xl:left-[420px] border-l-2 h-[70px] border-white/20 rounded-lg'>

                </div>


                {/* -------------------------------- */}

                {/* navigation */}

                <div>

                    <Image src={'/navigation_2.svg'} width={35} height={35} alt='' className='absolute left-[390px] xl:left-[540px] bottom-24 border-white' />

                    <div className=' absolute left-[340px]  xl:left-[510px] bottom-16 text-[12px]'>
                        {speed} m/s {degree} Degree
                    </div>

                </div>


                {/* ----------------------------------*/}

                {/* divider */}

                <div className='absolute bottom-14 left-[530px] xl:left-[740px] border-l-2 h-[70px] border-white/20 rounded-lg'>

                </div>


                {/* -------------------------------- */}

                {/* bottom right text column div*/}

                <div>

                    {/* sunrise */}

                    <div className='absolute right-[120px] xl:right-[200px] bottom-[98px] text-[12px]'>

                        Sunrise: <span className='font-thin'>{sunriseTime}</span>

                    </div>

                    {/* sunset */}

                    <div className='absolute right-[120px] xl:right-[200px] bottom-[70px] text-[12px]'>

                        Sunset: <span className='font-thin'>{sunsetTime}</span>

                    </div>

                </div>
            </div>


        </div>
    )
}
