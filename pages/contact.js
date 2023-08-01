import { motion as m } from 'framer-motion'

export default function Contact() {
  return (
    <m.div 
      initial={{ y: '100%' }}
      animate={{ y:'0%' }}
      transition={{ duration: 0.75, ease: 'easeOut' }}
      exit={{ opacity: 1 }}
      className='text-gray-900 absolute top-0 left-0 w-full h-full bg-red-300 lg:px-48 px-16'
      >
      <main>
      <div className='my-96 p-1'>
        <h1 className='text-6xl text-center lg:text-right lg:text-9xl'>
          Tangina mo Norman Desuksok
        </h1>
      </div>

      </main>
    </m.div>
  )
}
