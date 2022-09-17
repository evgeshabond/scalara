import Link from 'next/link'

export const Logo = () => {
  // const lol = tw.div`flex`

  return (
    <Link href="/" passHref>
      <a tw="flex h-full items-center bg-grey-dark px-[77px] py-[17px] text-white font-size[20px] font-weight[600] line-height[36px] uppercase letter-spacing[1px]">
        Aufgabe
      </a>
    </Link>
  )
}
