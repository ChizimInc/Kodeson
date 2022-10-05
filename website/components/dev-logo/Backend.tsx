import Image from "next/image"

export const Backend = () => {
  return (
    <div>
      <div>
        <Image src="/icons/dev-logo/nodejs.svg" width={100} height={100} />
      </div>
      <div className="ml-[100px] mt-[-50px]">
        <Image src="/icons/dev-logo/php.svg" width={100} height={100} />
      </div>
      <div className="mt-[-20px]">
        <Image src="/icons/dev-logo/python.svg" width={80} height={80} />
      </div>
      <div className="ml-[100px] mt-[-50px]">
        <Image src="/icons/dev-logo/ruby.svg" width={100} height={100} />
      </div>
      <div className="mt-[-20px]">
        <Image src="/icons/dev-logo/dotnet.svg" width={100} height={100} />
      </div>
      <div className="ml-[100px] mt-[-50px]">
        <Image src="/icons/dev-logo/java.svg" width={100} height={100} />
      </div>
    </div>
  )
}