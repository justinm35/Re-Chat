import { getServerSession } from 'next-auth'
import authOptions from '@/app/api/auth/[...nextauth]'
// import { notFound } from 'next/navigation'

const page = async ({}) => {

    const session = await getServerSession(authOptions)
    return <h1>Dashboard</h1>
}

export default page