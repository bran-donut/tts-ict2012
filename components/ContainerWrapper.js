export default function ContainerWrapper({ children }) {
    return (
      <div className="bg-gray-300 px-28">
        <div className="py-4 px-8 bg-tts-background overflow-y-auto max-h-screen">
          {children}
        </div>
      </div>
    )
  }