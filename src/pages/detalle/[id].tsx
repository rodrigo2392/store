import { useRouter } from 'next/router'

const Detalle = () => {
  const router = useRouter()
  const { id } = router.query

  return <main>
          <p className="text-3xl font-bold md:underline">Post: {id}</p>
      </main>

}

export default Detalle