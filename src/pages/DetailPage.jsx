import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { searchController } from '../controllers/searchController'

export function DetailPage() {
  const [searchParams] = useSearchParams()
  const queryParam = searchController.getSearchQueryFromUrl(searchParams)

  // Nếu không có param trên URL, sử dụng giá trị mặc định từ template "Reasonable Price"
  const defaultQuery = queryParam || 'Reasonable Price'
  const [content, setContent] = useState(defaultQuery)

  useEffect(() => {
    if (queryParam) {
      setContent(queryParam)
    }
  }, [queryParam])

  return (
    <div className="py-8 bg-white min-h-[460px]">
      <div className="container-custom">
        <textarea
          id="detail-content"
          rows={14}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full p-4 text-sm text-gray-800 border border-gray-300 rounded-none focus:outline-none focus:border-[#551760] font-sans leading-relaxed resize-y shadow-xs"
          placeholder="Reasonable Price"
        />
      </div>
    </div>
  )
}
