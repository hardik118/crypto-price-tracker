export default function Skeleton(){
    return <div className="max-w-sm rounded overflow-hidden shadow-lg animate-pulse">
    <div className="bg-gray-200 h-40 w-full rounded-t"></div>
    <div className="px-6 py-4">
      <div className="bg-gray-200 h-6 w-3/4 mb-2 rounded"></div>
      <div className="bg-gray-200 h-4 w-full mb-2 rounded"></div>
      <div className="bg-gray-200 h-4 w-5/6 rounded"></div>
    </div>
    <div className="px-6 pt-4 pb-2">
      <div className="inline-block bg-gray-200 rounded-full h-6 w-16 mr-2 mb-2"></div>
      <div className="inline-block bg-gray-200 rounded-full h-6 w-12 mr-2 mb-2"></div>
      <div className="inline-block bg-gray-200 rounded-full h-6 w-14"></div>
    </div>
  </div>
   
}