import Image from "next/image"

type IProps = {
  text: Array<string>,
  image: string
  revert?: boolean
}

export const CareersList = (props: IProps) => {
  return (
    <>
      <div className={`flex ${props.revert ? 'flex-row-reverse' : 'flex-row'}`}>
        <div className={`w-[390px] ${props.revert ? 'text-left' : 'text-right'}`}>
          {
            props.text.map( item => (
              <p key={item}>{item}</p>
            ))
          }
        </div>
        <div className='mx-5 flex'>
          <Image src={props.image} width={40} height={40} />
        </div>
      </div>
    </>
  )
}