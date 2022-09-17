import Link from 'next/link'
import { useRouter } from 'next/router'
import tw from 'twin.macro'
import { styled } from 'twin.macro'
// import {styled} from '@emotion/styled'

const ActiveLink = styled.a(({ $isActive }: { $isActive: boolean }) => {
  console.log({ $isActive })
  return [tw`text-blue-900 `, $isActive && tw`text-red-800`]
})

export type NavigationItemProps = { name: string; route: string }

export const NavigationItem: React.FunctionComponent<NavigationItemProps> = ({
  name,
  route,
}) => {
  const { asPath } = useRouter()

  return (
    <li key={name}>
      <Link href={route} passHref>
        <ActiveLink $isActive={route === asPath}>{name}</ActiveLink>
      </Link>
    </li>
  )
}
