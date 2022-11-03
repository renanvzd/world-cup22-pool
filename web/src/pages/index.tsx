import Image from 'next/image'
import appPreviewImg from '../assets/app-nlw-copa.png'
import logoImg from '../assets/logo.svg'
import usersAvatarExampleImg from '../assets/user-avatar-example.png'
import iconCheckImg from '../assets/icon.svg';

export default function Home() {
  return (
    <div className="max-w-[1124px] h-screen mx-auto grid grid-cols-2 gap-28 items-center">
      <main>
        <Image src={logoImg} alt="NLW Copa" />
        <h1 className="mt-14 text-white text-5xl font-bold leading-tight">Crie seu proprio bolao e compartilhe entre amigos</h1>

        <div className="mt-10 flex items-center gap-2">
          <Image src={usersAvatarExampleImg} alt="" />
          <strong className="text-gray-100 text-xl">
            <span className="text-ignite-500">+12.592</span> pessoas ja estao usando
          </strong>
        </div>

        <form className="mt-10 flex">
          <input
            className="flex-1 px-6 py-4 rounded bg-gray-800"
            type="text"
            required
            placeholder="Qual o nome do bolao?"
          />
          <button
            className="bg-yellow-500 px-6 py-4 rounded text-gray-900 font-bold text-sm uppercase hover:bg-yellow-700"
            type="submit"
          >
            Criar meu bolao
          </button>
        </form>

        <p className='mt-4 text-sm text-gray-300 leading-relaxed'>
          Após criar seu bolão, você receberá um código único que poderá usar para convidar outras pessoas 🚀
        </p>

        <div className="mt-10 pt-10 border-t border-gray-600 flex items-center justify-between text-gray-100">
          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className='flex flex-col'>
              <span className="font-bold text-2xl">+2.034</span>
              <span>Boloes criados</span>
            </div>
          </div>

          <div className="w-px h-14 bg-gray-600" />

          <div className="flex items-center gap-6">
            <Image src={iconCheckImg} alt="" />
            <div className='flex flex-col'>
              <span className="font-bold text-2xl">+2.034</span>
              <span>Boloes criados</span>
            </div>
          </div>
        </div>
      </main>

      <Image src={appPreviewImg} alt="Dois celulares exibindo uma previa da aplicacao" quality={100} />
    </div>
  )
}


// export const getServerSideProps = async () => {
//   const response = await fetch('http://localhost:3333/pools/count')
//   const data = await response.json()

//   return {
//     props: {
//       count: data.count,
//     }
//   }
// }