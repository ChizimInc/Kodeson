type iProps = {
    title: string;
}

export const Button = (props: iProps) => {
    return (
        <div  className='mx-3 bg-app-color-100 rounded-full py-[12px] px-[24px] text-white cursor-pointer'>
            <p>{props.title}</p>
        </div>
    )
}