import capa from '../../assets/capa.svg'
import { Controls } from './components/Controls'
import { Header } from './components/Header'
import { ProgressBar } from './components/ProgressBar'

export function Player() {
  return (
    <div className="bg-purple w-full max-w-[310px] rounded-lg px-10 py-14">
      <div className="flex flex-col gap-7 justify-center items-center">
        <Header
          folder={capa}
          artist="Artist"
          name="Nome"
         />
        <ProgressBar />
       <Controls />
      </div>
    </div>
  )
}