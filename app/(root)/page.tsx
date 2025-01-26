import Image from 'next/image';
import Logo from '@/public/images/logo.svg'
const Homepage = () => {
  return (
    <>
      <Image 
        src={Logo}
        alt="Tizzel Stores"
        width={200}
        height={200}
        priority={true}
      />
    </>
  )
}

export default Homepage;