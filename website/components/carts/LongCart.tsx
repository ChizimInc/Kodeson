import Image from 'next/image'

type IProps = {
	icon: string,
	content: string
}

export const LongCart = (props: IProps) => {
	return (
		<div 
			className="w-[48%] h-[289px] rounded-3xl bg-white p-[30px] flex flex-col items-center"
			style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.12)'}}
		>
			<div className="text-[30px] font-semibold leading-[36px] h-[72px] mb-4 mt-8">
				<Image src={props.icon} width={60} height={60} />
			</div>
			<div className="text-[23px] text-center font-normal leading-[32px] max-w-[392px]">
				<p>{props.content}</p>
			</div>
		</div>
	)
}