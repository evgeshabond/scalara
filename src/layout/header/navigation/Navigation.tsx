import Link from 'next/link'
import { useRouter } from 'next/router'
import { paths } from './navigation.config'
import { NavigationItem } from './NavigationItem'

export const Navigation = () => {
  return (
    <nav tw="h-full">
      <ul tw="flex space-x-[4px] h-full">
        {paths.map((path) => (
          <NavigationItem key={path.name} {...path} />
        ))}
      </ul>
    </nav>
  )
}
