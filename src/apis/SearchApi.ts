const BASE_URL = "http://localhost:3003/api/search";

// 책 데이터 타입 정의 (Book 데이터 모델)
export interface books {
    coverImage?: string; 
    title: string; 
    author: string; 
    publisher: string; 
    publishYear?: string; 
    genre?: string; 
    id: string; 
    summary?: string; 
    tableOfContents?: string; 
    location?: number[];
    bookSize: number;
    currentstate?: boolean; 
}

/**
 * 책 데이터를 검색하는 함수
 * @param query - 검색어
 * @returns 검색된 책 데이터 (Promise<Book[]>)
 */
export const fetchBooks = async (query: string): Promise<books[]> => {
  try {
    const response = await fetch(`${BASE_URL}/search?query=${encodeURIComponent(query)}`, {
      method: "GET",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "API 호출 실패");
    }

    const data: books[] = await response.json(); // 반환 데이터의 타입 명시
    return data;
  } catch (error) {
    console.error("API 호출 에러:", error);
    throw error; // 에러를 호출한 곳으로 전달
  }
};
