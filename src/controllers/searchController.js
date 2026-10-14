/**
 * searchController.js
 * Xử lý điều hướng tìm kiếm và mã hóa URL sang /detail?q=... (Lean MVC Controller)
 */
import { searchModel } from '../models/searchModel'

export const searchController = {
  /**
   * Xử lý tìm kiếm và điều hướng
   * @param {string} rawQuery Chuỗi người dùng nhập
   * @param {function} navigate Hàm navigate của react-router-dom
   * @returns {boolean} True nếu điều hướng thành công
   */
  handleSearch(rawQuery, navigate) {
    if (!searchModel.isValidQuery(rawQuery)) {
      return false
    }

    const encoded = searchModel.encodeParam(rawQuery)
    navigate(`/detail?q=${encoded}`)
    return true
  },

  /**
   * Đọc và giải mã từ khóa từ URL search params
   * @param {URLSearchParams} searchParams URLSearchParams object
   * @returns {string} Từ khóa tìm kiếm đã decode
   */
  getSearchQueryFromUrl(searchParams) {
    const rawQ = searchParams.get('q')
    return searchModel.decodeParam(rawQ || '')
  },
}
