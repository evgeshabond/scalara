import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navigation = () => {
  const router = useRouter()
  console.log(router)

  return (
    <nav>
      <ul tw="flex space-x-[4px]">
        <li>
          <Link href="/">Start</Link>
        </li>
        <li>
          <Link href="/calculator">Rechner</Link>
        </li>
      </ul>
    </nav>
  )
}
