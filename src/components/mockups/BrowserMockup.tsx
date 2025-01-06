interface BrowserMockupProps {
  children: React.ReactNode
}

export function BrowserMockup({ children }: BrowserMockupProps) {
  return (
    <div className="rounded-lg overflow-hidden border border-gray-800 bg-black shadow-2xl">
      <div className="h-10 bg-gray-900 flex items-center gap-2 px-4">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="bg-gray-800 rounded-md px-3 py-1 text-sm text-gray-400 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-blue-500" />
            plynt.io
          </div>
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  )
}

