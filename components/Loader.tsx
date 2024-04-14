import Image from 'next/image'

const Loader = () => {
  return (
    <div className='flex h-screen w-full'>
        <Image 
            src="/icons/loading-cirlce.svg"
            alt='loading'
            width={50}
            height={50}
        />

    </div>
  )
}

export default Loader