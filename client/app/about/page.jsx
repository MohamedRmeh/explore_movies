import Image from 'next/image'
export default function about () {
  return (
    <div className='flex gap-10'>
      <div className='w-fit'>
      <p className='mb-7 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-t from-slate-100 to-neutral-950'>about agency</p>
      <p className='text-4xl font-bold mb-6 '>We are a platform to review your favorite movies and discover other people's favorite movies</p>
      <p className='text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem recusandae neque accusamus nam vitae, aperiam cumque velit unde laudantium consequatur dolorum. Quae, voluptas eligendi?</p>
      </div>
      <div className='w-fit'>
      <Image
        src="/images/movie.jpg"
        width={1000}
        height={1000}
        alt="Film"
        className="rounded-xl"
        priority={true}
      />
      </div>

    </div>
    
  )
}
