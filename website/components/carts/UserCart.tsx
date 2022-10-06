import Image from 'next/image'

type IProps = {
	image: string,
	name: string,
  company: string,
  text: string
}

export const UserCart = (props: IProps) => {
	return (
		<div 
			className="w-[31.2%] min-h-[509px] rounded-3xl bg-white p-[30px] flex flex-col items-center"
			style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.12)'}}
		>
			<div className="text-[30px] font-semibold leading-[36px] h-[72px] mb-4 mt-8 rounded-full">
				<Image src={props.image} width={80} height={80} />
			</div>
			<div className="text-[24px] font-semibold leading-[32px]">
				<p>{props.name}</p>
			</div>
      <div className="text-[16px] font-normal leading-[32px]">
				<p>{props.company}</p>
			</div>
      <div className="text-[16px] text-center font-normal leading-[24px] max-w-[312px] mt-[50px]">
				<p className='flex items-center'>{props.text}</p>
			</div>
		</div>
	)
}