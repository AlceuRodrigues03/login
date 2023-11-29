interface HeaderProps {
  folder: string;
  name: string;
  artist: string;
}

export function Header({folder, name, artist }: HeaderProps) {
  return (
    <header>
      <img src={folder} />
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl text-gray-300">
          {name}
        </h1>
        <small className="text-base text-gray-300/40">
          {artist}
        </small>
      </div>
    </header>
  )
}