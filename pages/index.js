import { motion as m } from 'framer-motion'

export default function Home() {
  return (
    <m.div 
      initial={{ y: '100%' }}
      animate={{ y:'0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className='text-gray-900 absolute top-0 left-0 w-full h-full bg-orange-100 lg:px-48 px-16'
      >
      <main>
      <div className='my-96 p-1'>
        <h1 className='text-6xl text-center lg:text-right lg:text-9xl'>
          Norman?
        </h1>
      </div>

      <div className='flex justify-between'>

        <div>
          <h2>Babaero since Birth</h2>
        </div>

      </div>
      </main>
    </m.div>
  )
}
