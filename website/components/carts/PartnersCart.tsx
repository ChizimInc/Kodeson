import Image from 'next/image'

type IProps = {
	logo: string,
	content: string
}

export const PartnersCart = (props: IProps) => {
	return (
		<div 
			className="w-[47%] h-[289px] rounded-3xl mx-3 bg-white p-[30px] flex flex-col items-center"
			style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.12)'}}
		>
			<div className="text-[30px] font-semibold leading-[36px] h-[77px] mb-4">
				<Image src={props.logo} width={180} height={60} />
			</div>
			<div className="text-[14px] text-center font-normal leading-[24px] max-w-[392px]">
				<p>{props.content}</p>
			</div>
		</div>
	)
}