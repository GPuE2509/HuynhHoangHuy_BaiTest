/**
 * searchModel.js
 * Quản lý chuẩn hóa, làm sạch và validate chuỗi tìm kiếm (Lean MVC Model)
 */

export const searchModel = {
  /**
   * Chuẩn hóa và làm sạch chuỗi tìm kiếm
   * @param {string} rawQuery Chuỗi nhập vào từ input
   * @returns {string} Chuỗi sau khi trim và xóa khoảng trắng dư thừa
   */
  normalizeQuery(rawQuery) {
    if (typeof rawQuery !== 'string') return ''
    return rawQuery.trim().replace(/\s+/g, ' ')
  },

  /**
   * Kiểm tra chuỗi tìm kiếm có hợp lệ không
   * @param {string} query Chuỗi cần kiểm tra
   * @returns {boolean} True nếu không rỗng
   */
  isValidQuery(query) {
    const cleaned = this.normalizeQuery(query)
    return cleaned.length > 0
  },

  /**
   * Mã hóa chuỗi cho URL query parameter
   * @param {string} query Chuỗi đã chuẩn hóa
   * @returns {string} Chuỗi đã encodeURIComponent
   */
  encodeParam(query) {
    const cleaned = this.normalizeQuery(query)
    return encodeURIComponent(cleaned)
  },

  /**
   * Giải mã chuỗi từ URL query parameter
   * @param {string} rawParam Chuỗi đọc từ URL
   * @returns {string} Chuỗi văn bản đọc được
   */
  decodeParam(rawParam) {
    if (!rawParam) return ''
    try {
      return decodeURIComponent(rawParam)
    } catch {
      return rawParam
    }
  },
}
