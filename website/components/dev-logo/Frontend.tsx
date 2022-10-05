import Image from "next/image"

export const Frontend = () => {
  return (
    <div>
      <div>
        <Image src="/icons/dev-logo/angular.svg" width={100} height={100} />
      </div>
      <div className="ml-[100px] mt-[-50px]">
        <Image src="/icons/dev-logo/react.svg" width={100} height={100} />
      </div>
      <div className="mt-[-20px]">
        <Image src="/icons/dev-logo/vuejs.svg" width={100} height={100} />
      </div>
      <div className="ml-[100px] mt-[-50px]">
        <Image src="/icons/dev-logo/typescript.svg" width={80} height={80} />
      </div>
    </div>
  )
}