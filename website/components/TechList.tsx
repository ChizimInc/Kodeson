type IProps = {
	title: string,
	list: Array<string>
}

export const TechList = (props: IProps) => {
	return (
		<div className="m-12 min-w-[260px]">
			<p className="text-[24px] font-bold">{props.title}</p>
			<div className="mt-10 text-[14px] font-normal">
				{
					props.list.map( item => (
							<p className="my-3">{item}</p>
					))
				}
			</div>
		</div>
	)
}