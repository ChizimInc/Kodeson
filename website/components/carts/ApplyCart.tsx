import Image from 'next/image'

type IProps = {
  title: string,
  address: string
}

export const ApplyCart = (props: IProps) => {
  return (
    <>
      <div className="w-[392px] min-h-[156px] rounded-3xl py-[20px] px-6 bg-white mx-3">
        <div className="text-[22px] text-black">
          <p>{props.title}</p>
        </div>
        <div className="text-[16px] text-[#797979]">
          <p>{props.address}</p>
        </div>
        <div className='flex justify-end text-[#3262D1] mt-[34px] cursor-pointer'>
          <p>Apply</p>
          <div className='ml-2 mt-1'>
            <Image src="/icons/arrow-right.svg" width={15} height={15} />
          </div>
        </div>
      </div>
    </>
  )
}