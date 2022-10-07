import Link from 'next/link'

type iProps = {
	title: string,
	color: string,
	textColor?: string,
	href: string
}

export const Button = (props: iProps) => {
	return (
		<Link href={props.href} passHref>
			<div 
				className={
					`mx-3 ${props.color} rounded-full py-[12px] px-[24px] ${props.textColor ? props.textColor : 'text-white'} cursor-pointer
				`}
			>
				<p>{props.title}</p>
			</div>
		</Link>
	)
}