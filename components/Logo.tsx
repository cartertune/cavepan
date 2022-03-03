import Link from 'next/link'

function Logo() {
  return (
    <Link href={'/'}>
      <div className="align-center flex">
        <img className="h-8 pr-2" src="/cavepan_temp_logo.png" />
        <h4 className="my-auto text-xl font-bold leading-none lg:text-2xl">
          Cavepan
        </h4>
      </div>
    </Link>
  )
}

export default Logo
