import React from 'react'
//sm:w-[50px] sm:mx-[30%] md:w-[250px] md:mx-[10%] w-[350px]  mx-[50%]
export default function Dashboard() {
    return (
        <div className='bg-[#FFF] pt-10 w-full py-16 px-4' >
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 '>
                <img className='m-auto w-[400px] rounded-lg' src="https://scontent.fbwa5-1.fna.fbcdn.net/v/t39.30808-6/289485335_611625160321524_8916257525328252096_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_4QmCwUg7Z0AX_EzETA&_nc_ht=scontent.fbwa5-1.fna&oh=00_AT8jcClER3Ts1fFFiWfxrMovIuE-cVkBehJpvwB6qGOGUw&oe=62DC4F9C" alt="" />
                <div className='flex flex-col py-12 px-4'>
                    <h1 className='text-2xl font-semibold  '>Whos my Favourite Anime character?</h1>
                    <h2 className='text-3xl font-bold my-4 text-[#710082] '>Obito</h2>
                    <p className='md:text-xl text-sm font-thin '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus similique magni repellendus mollitia tempora, odio reprehenderit autem dignissimos quod quibusdam dolores aspernatur modi doloremque architecto iure odit nesciunt molestias inventore.</p>
                    <button className='bg-[#710082] w-[150px] text-white mx-auto font-medium my-6 rounded-md py-2 px-1 md:mx-0 '>Know him</button>
                </div>

            </div >

        </div >
    )
}
