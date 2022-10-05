import Image from "next/image"

export const Mobile = () => {
  return (
    <div>
      <div>
        <Image src="/icons/dev-logo/flutter.svg" width={80} height={80} />
      </div>
      <div className="ml-[100px] mt-[-30px]">
        <Image src="/icons/dev-logo/react.svg" width={100} height={100} />
      </div>
      <div className="mt-[-20px]">
        <Image src="/icons/dev-logo/kotlin.svg" width={90} height={90} />
      </div>
      <div className="ml-[100px] mt-[-30px]">
        <Image src="/icons/dev-logo/swift.svg" width={100} height={100} />
      </div>
      <div  className="mt-[-20px]">
        <Image src="/icons/dev-logo/ionic.svg" width={80} height={80} />
      </div>
    </div>
  )
}