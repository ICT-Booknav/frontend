const BASE_URL = "http://localhost:3003/api/search";

/**
 * 특정 책 상세 정보를 가져오는 함수
 * @param title - 책 제목
 * @returns 책 상세 정보 (Promise<any>)
 */
export const fetchBookDetail = async (title: string): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/search/${encodeURIComponent(title)}`, {
      method: "GET",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "책 정보를 가져오지 못했습니다.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("API 호출 에러:", error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
