//image

import Image from 'next/image'


export default function Header() {
    return (
        <div className='flex flex-row justify-center gap-4'>
            <div className='my-14'>
                <Image
                    src="/weather.png"
                    alt=" "
                    width={30}
                    height={30}
                />
            </div>
            <div className='text-2xl text-center my-14 '>
                Weather App
            </div>
        </div>
    )
}
