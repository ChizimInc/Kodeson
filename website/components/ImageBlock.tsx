import Image from "next/image"

type IProps = {
  image: string,
  name: string,
  job: string
}

export const ImageBlock = (props: IProps) => {
  return (
    <>
      <div>
        <div className={`w-[352px] h-[344px] mx-3 ${props.image} rounded-3xl text-white mt-16 flex flex-col items-center`}>
        
        </div>
        <div className="text-white ml-3 mt-5">
          <div className="font-worksans text-[27px] font-semibold">
            <p>{props.name}</p>
          </div>
          <div className="text-[14px] font-normal">
            <p>{props.job}</p>
          </div>
        </div>
      </div>
    </>
  )
}