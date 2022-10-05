import * as React from 'react'

import Image from 'next/image'

type IProps = {
    children: React.ReactElement
}

export default function Background(props: IProps) {
    return (
        <div className='w-full relative'>
            <div className='z-[99] relative'>
                {props.children}
            </div>
            <div className='absolute top-0 left-0 flex w-full justify-between'>
                <div className='flex'>
                    <Image src='/images/background/elipse.svg' width={400} height={500} />
                    <div className='ml-[-280px] mt-[100px]'>
                        <Image src='/images/background/elipse-blue.svg' width={400} height={400} />
                    </div> 
                </div>
                <div className='rotate-180 flex'>
                    <Image src='/images/background/elipse.svg' width={500} height={500} />
                    <div className='ml-[-300px] mt-[100px]'>
                        <Image src='/images/background/elipse-blue.svg' width={400} height={400} />
                    </div>
                </div>
            </div>
        </div>
    )
}