import * as Progress from '@radix-ui/react-progress'

export function ProgressBar() {
  return (
    <div className="flex flex-col gap-2 w-full">
          <Progress.Root
            className="relative overflow-hidden bg-gray-300/30 rounded-full w-full h-2 transform"
          >
            <Progress.Indicator 
              className="h-full bg-gray-300/80 rounded-full w-40"
            />
          </Progress.Root>
          <div className="flex justify-between text-gray-500 text-sm">
            <time>00:00</time>
            <time>00:00</time>
          </div>
        </div>
  )
}