import { getServerSession } from "next-auth"

export default async function Home() {
  const session = await getServerSession();

  const greeting = session?.user?.name ? session.user.name : 'you\re not logged in'
  return (
    <>
    <h1 className='text-2xl'>Hello, {greeting}</h1>
    </>
  )
}
