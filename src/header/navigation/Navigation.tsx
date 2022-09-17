import Link from 'next/link'
import { useRouter } from 'next/router'
import { paths } from './navigation.config'
import { NavigationItem } from './NavigationItem'

export const Navigation = () => {
  const { asPath } = useRouter()
  // console.log(router)

  return (
    <nav>
      <ul tw="flex space-x-[4px]">
        {paths.map((path) => (
          // <li key={path.name}>
          //   <Link href={path.route}>{path.name}</Link>
          // </li>
          <NavigationItem key={path.name} {...path} />
        ))}
        {/* <li>
          <Link href="/">Start</Link>
        </li>
        <li>
          <Link href="/calculator">Rechner</Link>
        </li> */}
      </ul>
    </nav>
  )
}
