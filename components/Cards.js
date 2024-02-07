"use client"; // need to be inform the useState is a client component.

import React, { useEffect, useState } from 'react'

import Image from 'next/image'

import Link from 'next/link'

import { useRouter } from 'next/navigation'



const WeatherCard = ({ imageSrc, cityName,
    temp, country, time, status, icon, tempMin,
    tempMax, pressure, humidity, visibility, sunrise, sunset, speed, degree }) => {

    const convertTimestampToTime = (timestamp) => {
        const date = new Date(timestamp * 1000); // Convert seconds to milliseconds
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    };

    const localTime = convertTimestampToTime(time + new Date().getTimezoneOffset() * 60);
    const localDateTime = `${localTime}, ${new Date(time * 1000).toLocaleDateString([], { month: 'short', day: 'numeric' })}`;
    const sunriseTime = convertTimestampToTime(sunrise + new Date().getTimezoneOffset() * 60);
    const sunsetTime = convertTimestampToTime(sunset + new Date().getTimezoneOffset() * 60);

    return (
        <>
            <div className='flex border-2 
                border-transparent h-[400px] w-[520px] rounded-lg bg-[#2b2b2c] shadow-lg relative'>

                <Image src={imageSrc} width={510} height={100} className=' h-[230px] w-full align-top rounded-t-lg absolute top-0' />

                {/* left text column div */}


                <div>

                    {/* location */}

                    <div className='absolute left-10 top-12 text-[25px]'>
                        {cityName}, {country}
                    </div>

                    {/* time */}

                    <div className='absolute left-16 top-24 text-[10px] '>
                        {localDateTime}
                    </div>

                    {/* cloudy state */}

                    <div className=''>

                        <div className=''>

                            <Image src={"/partly-cloudy.png"} width={50} height={50} alt='' className='absolute left-10 top-36' />

                        </div>

                        <div className='absolute left-28 top-40'>
                            {status}
                        </div>
                    </div>
                </div>

                {/* -------------------------------- */}


                {/* right text column div */}

                <div>

                    {/* temperature */}

                    <div className='absolute right-20 top-10 text-[35px]'>

                        {temp}°C

                    </div>

                    {/* temp min*/}

                    <div className='absolute right-[80px] top-36 text-[12px]'>

                        Temp min: {tempMin} °C

                    </div>

                    {/* temp max*/}

                    <div className='absolute right-[75px] top-[165px] text-[12px]'>

                        Temp max: {tempMax} °C

                    </div>

                </div>


                {/* -------------------------------- */}


                {/* bottom left text column div*/}

                <div>

                    {/* pressure */}

                    <div className='absolute left-10 bottom-[110px] text-[12px]'>

                        Pressure: <span className='font-thin'>{pressure}Pa</span>

                    </div>

                    {/* humidity */}

                    <div className='absolute left-10 bottom-[85px] text-[12px]'>

                        Humidity: <span className='font-thin'>{humidity}%</span>

                    </div>

                    {/* visibility */}

                    <div className='absolute left-10 bottom-[60px] text-[12px]'>

                        Visibility: <span className='font-thin'>{visibility}km</span>

                    </div>

                </div>


                {/* -------------------------------- */}

                {/* divider */}

                <div className='absolute bottom-14 left-[180px] border-l-2 h-[70px] border-white/20 rounded-lg'>

                </div>


                {/* -------------------------------- */}

                {/* navigation */}

                <div>

                    <Image src={'/navigation_2.svg'} width={35} height={35} alt='' className='absolute left-[240px] bottom-24 border-white' />

                    <div className=' absolute left-[210px] bottom-16 text-[12px]'>
                        {speed}m/s {degree} Degree
                    </div>

                </div>


                {/* ----------------------------------*/}

                {/* divider */}

                <div className='absolute bottom-14 left-[340px] border-l-2 h-[70px] border-white/20 rounded-lg'>

                </div>


                {/* -------------------------------- */}

                {/* bottom right text column div*/}

                <div>

                    {/* sunrise */}

                    <div className='absolute right-10 bottom-[98px] text-[12px]'>

                        Sunrise: <span className='font-thin'>{sunriseTime}</span>

                    </div>

                    {/* sunset */}

                    <div className='absolute left-[377px] bottom-[70px] text-[12px]'>

                        Sunset: <span className='font-thin'>{sunsetTime}</span>

                    </div>

                </div>


            </div>
        </>
    )
}

// const Cards = ({ weatherData }) => {

//     const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg', '/img5.jpg', '/img6.jpg', '/img7.jpg', '/img8.jpg'];

//     return (
//         <>
//             <div className='flex flex-col xl:grid xl:grid-rows-2 xl:grid-cols-2 
//             items-center pt-10 pb-10 mb-10 gap-y-10 xl:justify-center xl:pl-[450px] xl:pr-[350px] '>

//                 {/* {images.map((image, index) => (
//                     <WeatherCard key={index} imageSrc={image} city={city[index]} />
//                 ))} */}

//                 {weatherData.map((city) => (
//                     <WeatherCard
//                         key={city.id}
//                         imageSrc={images[weatherData.indexOf(city)]}
//                         cityName={city.name}
//                         country={city.sys.country}
//                         temp={city.main.temp}
//                         status={city.weather[0].main}
//                         time={city.sys.timezone}
//                         icon={city.weather[0].icon}
//                         tempMin={city.main.temp_min}
//                         tempMax={city.main.temp_max}
//                         pressure={city.main.pressure}
//                         humidity={city.main.humidity}
//                         visibility={city.visibility}
//                         sunrise={city.sys.sunrise}
//                         sunset={city.sys.sunset}
//                         speed={city.wind.speed}
//                         degree={city.wind.deg}

//                     />
//                 ))}

//             </div>
//         </>

//     )
// }

const StoreWeatherData = () => {

    const [weatherData, setWeatherData] = useState([]);

    const router = useRouter();

    const images = ['/img1.jpg', '/img2.jpg', '/img3.jpg', '/img4.jpg', '/img5.jpg', '/img6.jpg', '/img7.jpg', '/img8.jpg'];

    useEffect(() => {

        const fetchWeatherData = async () => {
            try {

                const cityCodes = [1248991, 1850147, 2644210, 2988507, 2147714, 4930956, 1796236, 3143244];
                const apikey = 'c7cd4870117b1abf18e0f50c6f6b484f';
                const units = 'metric';

                const url = `https://api.openweathermap.org/data/2.5/group?id=${cityCodes.join(',')}&units=${units}&appid=${apikey}`;
                const response = await fetch(url);
                const data = await response.json();

                console.log(data);

                setWeatherData(data.list);

            }
            catch (error) {
                console.log("Error while fetching weather data", error);
            }
        }

        fetchWeatherData();
    }, []);

    return (

        // <Cards weatherData={weatherData} />


        <div className='flex flex-col xl:grid xl:grid-rows-2 xl:grid-cols-2 
            items-center pt-10 pb-10 mb-10 gap-y-10 xl:justify-center xl:pl-[450px] xl:pr-[350px] '>

            {/* {images.map((image, index) => (
                    <WeatherCard key={index} imageSrc={image} city={city[index]} />
                ))} */}


            {/* href={{pathname:`/detail` , query:{id:city.id}}} */}

            {weatherData.map((city) => (
                <div key={city.id} onClick={() => { router.push(`/detail?id=${city.id}`) }}>

                    <WeatherCard
                        key={city.id}
                        imageSrc={images[weatherData.indexOf(city)]}
                        cityName={city.name}
                        country={city.sys.country}
                        temp={city.main.temp}
                        status={city.weather[0].main}
                        time={city.sys.timezone}
                        icon={city.weather[0].icon}
                        tempMin={city.main.temp_min}
                        tempMax={city.main.temp_max}
                        pressure={city.main.pressure}
                        humidity={city.main.humidity}
                        visibility={city.visibility}
                        sunrise={city.sys.sunrise}
                        sunset={city.sys.sunset}
                        speed={city.wind.speed}
                        degree={city.wind.deg}

                    />
                </div>
            ))}

        </div>
    )
}

export default StoreWeatherData;
