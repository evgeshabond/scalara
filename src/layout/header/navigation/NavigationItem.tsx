import Link from 'next/link'
import { useRouter } from 'next/router'
import tw from 'twin.macro'
import { styled } from 'twin.macro'

const ActiveLink = styled.a(({ $isActive }: { $isActive: boolean }) => {
  return [
    tw`flex relative h-full items-center ml-[60px] font-size[16px] capitalize `,
    $isActive &&
      tw`font-bold content after:(block absolute bottom-0 w-full h-[5px] bg-lila-base)`,
  ]
})

export type NavigationItemProps = { name: string; route: string }

export const NavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  name,
  route,
}) => {
  const { asPath } = useRouter()
  const isActive = route === asPath

  return (
    <li key={name}>
      <Link href={route} passHref>
        <ActiveLink $isActive={isActive}>{name}</ActiveLink>
      </Link>
    </li>
  )
}
