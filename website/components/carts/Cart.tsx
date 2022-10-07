type IProps = {
	title: string,
	content: string
}

export const Cart = (props: IProps) => {
	return (
		<div 
			className="w-[32%] min-h-[307px] rounded-3xl bg-white p-[30px]"
			style={{boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.12)'}}
		>
			<div className="text-[30px] w-[210px] font-semibold leading-[36px] h-[72px] mb-4">
				<p>{props.title}</p>
			</div>
			<div className="text-[14px] font-normal leading-[24px]">
				<p>{props.content}</p>
			</div>
		</div>
	)
}