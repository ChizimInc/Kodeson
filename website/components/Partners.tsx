import Image from 'next/image'
import Container from '../layout/Container'

type IProps = {
    images: Array<string>;
}

export const Partners = (props: IProps) => {
	return (
		<>
			<Container>
				<div className='my-24'>
					<p>Trusted by:</p>
					<div className='flex justify-between py-5'>
						{
							props.images.map(item => (
								<div>
									<Image src={item} width={120} height={50} />
								</div>
							))
						}
					</div>
				</div>
			</Container>
		</>
	)
}