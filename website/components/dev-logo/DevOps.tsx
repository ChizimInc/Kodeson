import Image from "next/image"

export const Devops = () => {
  return (
    <div>
      <div>
        <Image src="/icons/dev-logo/docker.svg" width={100} height={100} />
      </div>
      <div className="ml-[100px] mt-[-30px]">
        <Image src="/icons/dev-logo/aws.svg" width={100} height={100} />
      </div>
      <div className="mt-[-20px]">
        <Image src="/icons/dev-logo/googlecloud.svg" width={100} height={100} />
      </div>
      <div className="ml-[100px] mt-[-20px]">
        <Image src="/icons/dev-logo/kubernetes.svg" width={100} height={100} />
      </div>
    </div>
  )
}