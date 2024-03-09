import React from 'react'
import mypic from "../assets/whiteprofile.jpg"

const Hero = () => {
    return (
                <>
                    <div className='max-w-[1536px]  flex mx-auto flex-col md:flex-row pt-10 pb-10'>
                        <div className='basis-[30%] w-full '>
                            <img className=" rounded-md shadow-2xl" src={mypic} alt="img" width={600} height={600}/>
                        </div>
                        <div className='basis-[70%] w-full p-5'>
                            <h1 className='text-3xl font-extrabold font-mono p-2'>I'm Janisar</h1>
                            <p className='py-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam distinctio repellat repellendus saepe commodi est alias omnis fugiat, eos quibusdam? Nisi numquam eos aut quibusdam distinctio minus quae necessitatibus officia.</p>    
                    </div>
                    </div>

        </>
    )
}

export default Hero
