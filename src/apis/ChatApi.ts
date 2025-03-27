// src/api.js
export const postQuestion = async (question: string, type: number) => {
  try {
    const response = await fetch('http://localhost:3003/api/llm/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, type }),
    });
    return await response.json();
  } catch (error) {
    console.error('Error during POST API call:', error);
    throw new Error('POST API 호출 중 오류가 발생했습니다.');
  }
};

export const getBooks = async (query: string) => {
  try {
    const response = await fetch(
      `http://localhost:3003/api/llm/chat/search?query=${encodeURIComponent(query)}`,
      {
        method: 'GET',
      }
    );
    return await response.json();
  } catch (error) {
    console.error('Error during GET API call:', error);
    throw new Error('GET API 호출 중 오류가 발생했습니다.');
  }
};