import * as React from 'react'

type IProps = {
  children: React.ReactElement;
}

export default function Container(props: IProps) {
  return (
    <>
      <div>
        <div className='max-w-[1224px] m-auto'>
          { props.children }
        </div>
      </div>
    </>
  )
}