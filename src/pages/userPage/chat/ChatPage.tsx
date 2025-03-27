import { useState, useEffect } from 'react';
import styled from 'styled-components';
import theme from '@styles/theme';
import Typography from '@components/Typography/typography';
import SearchInput from './components/SearchInput';
import ButtonList from './components/ButtonList';
import Sidebar from './components/Sidebar';
import ChatbotIcon from '@assets/chatbot.png';
import { books } from '@apis/SearchApi'; // API 함수 및 데이터 타입 가져오기
import { postQuestion, getBooks } from '@apis/ChatApi';
import BookSection from './components/BookSection';

const buttonTexts = ['상황에 맞는 책 추천', '학습에 맞는 책 추천', '키워드로 책 추천'];
const questions = [
  '내 상황에 맞춰서 가지고 있는 책의 위치를 같이 추천해줘.',
  '내가 학습하고 싶은 키워드에 맞춰서 가지고 있는 책 중에서 추천해줘.',
  '키워드에 맞춰서 가지고 있는 책 중에서 추천해줘.',
];
const answers = [
  '상황에 대해 설명해주세요.',
  '학습하고 싶은 부분에 대해 설명해주세요.',
  '키워드를 제시해주세요.',
];

const ChatPage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [chatRooms, setChatRooms] = useState<{ id: number; history: { question: string; answer: string }[]; selectedButton: number }[]>([]);
  const [currentRoomId, setCurrentRoomId] = useState<number | null>(null);
  const [pendingQuestion, setPendingQuestion] = useState<string | null>(null);
  const [bookList, setBookList] = useState<books[]>([]); // bookList 상태 추가
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 관리


  const createNewChatRoom = () => {
    const newRoomId = chatRooms.length + 1;
    setChatRooms((prevRooms) => [...prevRooms, { id: newRoomId, history: [], selectedButton: 0 }]);
    setCurrentRoomId(newRoomId);
  };

  useEffect(() => {
    if (currentRoomId !== null && pendingQuestion !== null) {
      addQuestionToHistory(pendingQuestion);
      // askQuestion(pendingQuestion);
      setPendingQuestion(null);
    }
  }, [currentRoomId]);

  const updateChatHistory = (answer: string) => {
    if (currentRoomId !== null) {
      setChatRooms((prevRooms) =>
        prevRooms.map((room) =>
          room.id === currentRoomId
            ? {
                ...room,
                history: [...room.history.slice(0, -1), { ...room.history[room.history.length - 1], answer }],
              }
            : room
        )
      );
    }
  };

  // const { askQuestion } = updateChat(updateChatHistory);

  const handleStartChat = (index: number) => {
    const question = questions[index];
    const answer = answers[index];

    if (currentRoomId === null) {
      createNewChatRoom();
      setPendingQuestion(question);
      setTimeout(() => {
        updateChatHistory(answer);
      }, 0);
    } else {
      addQuestionToHistory(question);
      setTimeout(() => {
        updateChatHistory(answer);
      }, 0);
      // askQuestion(question);
    }
    setChatRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === currentRoomId
          ? { ...room, selectedButton: index }
          : room
      )
    );
  };

  const handleSend = async () => {
    if (inputValue.trim()) {
      if (currentRoomId === null) createNewChatRoom();
      addQuestionToHistory(inputValue);
      setInputValue(''); // 여기로 이동
  
      try {
        const selectedButtonIndex =
          chatRooms.find((room) => room.id === currentRoomId)?.selectedButton ?? 0;
  
        // postQuestion 호출
        const postData = await postQuestion(inputValue, selectedButtonIndex + 1 || 1);
        updateChatHistory(postData.answer);
  
        // 책 데이터 가져오기
        if (postData && postData.books) {
          const getData = await getBooks(postData.books);
  
          if (Array.isArray(getData)) {
            setBookList(getData);
            console.log('Books data:', getData);
          } else {
            updateChatHistory('오류가 발생했습니다.-getData is not array');
          }
        }
      } catch (error) {
        console.log('Error during API call:', error);
        updateChatHistory('오류가 발생했습니다.');
      } finally {
        setInputValue('');
      }
    }
  };
  
  const addQuestionToHistory = (question: string) => {
    if (currentRoomId !== null) {
      setChatRooms((prevRooms) =>
        prevRooms.map((room) =>
          room.id === currentRoomId 
            ? { 
                ...room, 
                history: [...room.history, { question, answer: '' }] 
              }
           : room
        )
      );
    }
  };
  
  const handleOutBookClick = () => {
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  const currentChatHistory = chatRooms.find((room) => room.id === currentRoomId)?.history || [];

  return (
    <PageWrapper>
      <Sidebar
        onToggle={setIsSidebarOpen}
        chatRooms={chatRooms}
        setCurrentRoomId={setCurrentRoomId}
        createNewChatRoom={createNewChatRoom}
      />
      <ContentWrapper $isSidebarOpen={isSidebarOpen}>
        {currentRoomId === null || currentChatHistory.length === 0 ? (
          <WelcomeSection>
            <Typography variant="headingXSmall" style={{ color: theme.colors.primary[800] }}>
              무엇을 도와드릴까요?
            </Typography>
            <SearchInput inputValue={inputValue} setInputValue={setInputValue} onSend={handleSend} />
            <ButtonList buttonTexts={buttonTexts} onButtonClick={handleStartChat} />
          </WelcomeSection>
        ) : (
          <ChatSection>
            <ChatWindow>
              {currentChatHistory.map((chat, index) => (
                <ChatBubble key={index}>
                  <UserMessage>
                    <MessageText>{chat.question}</MessageText>
                  </UserMessage>
                  <BotMessage>
                    <ChatbotIconWrapper>
                      <img src={ChatbotIcon} alt='chatbot' />
                    </ChatbotIconWrapper>
                    <BotAnswer>
                      <MessageText>{chat.answer || '...'}</MessageText>
                      {index > 0 && (
                        <ModalButton onClick={handleOutBookClick}>책 목록 보기</ModalButton>
                      )}
                    </BotAnswer>
                  </BotMessage>
                </ChatBubble>
              ))}
              {/* 모달 표시 */}
              {isModalOpen && (
                <ModalOverlay>
                  <ModalContent>
                    {bookList.map((book, index) => (
                      <BookSection
                        key={index}
                        coverImage={book?.coverImage || "@assets/book.jpg"}
                        title={book?.title || "제목 없음"}
                        author={book?.author || "저자 없음"}
                        publisher={book?.publisher || "출판사 없음"}
                        publishYear={book?.publishYear || "정보 없음"}
                        genre={book?.genre || "장르 없음"}
                        id={book?.id || "정보 없음"}
                        location={book?.location || [0, 0]}
                        bookSize={book?.bookSize || 0}
                        currentState={book?.currentState || false}
                      />
                    ))}
                      <ModalButton onClick={handleCloseModal}>
                        닫기
                      </ModalButton>
                  </ModalContent>
                </ModalOverlay>
              )}
            </ChatWindow>
            <SearchInputWrapper>
              <SearchInput inputValue={inputValue} setInputValue={setInputValue} onSend={handleSend} />
            </SearchInputWrapper>
          </ChatSection>
        )}
      </ContentWrapper>
    </PageWrapper>
  );
};

export default ChatPage;

const PageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
  justify-content: center;
  background-color: #fff;
  overflow: hidden;
`;

const ContentWrapper = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== '$isSidebarOpen',
})<{ $isSidebarOpen: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  transition: margin-left 0.5s ease;
  margin-left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? '250px' : '0')};
  max-width: 800px;
  box-sizing: border-box;
  padding: 20px;
`;

const WelcomeSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 20px;
`;

const ChatSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ChatWindow = styled.div`
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const ChatBubble = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;

const ModalOverlay = styled.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: white;
  padding: 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 580px;
  gap: 8px;
  box-shadow: 0px 4px 6px rgb(0, 0, 0, 0.5);
`;

const ModalButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  background-color:${({ theme }) => theme.colors.primary[5]};
  color: white;
  &:hover {
    background-color: rgb(5, 54, 67, 0.9);
  }
`;

const UserMessage = styled.div`
  align-self: flex-end;
  background-color: ${({ theme }) => theme.colors.primary[5]};
  color: white;
  padding: 15px;
  border-radius: 20px 20px 0 20px;
  margin-bottom: 5px;
  max-width: 70%;
  display: inline-block;
`;

const ChatbotIconWrapper = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
`;

const BotMessage = styled.div`
  display: flex;
  align-items: flex-start;
  color: black;
  padding: 15px;
  max-width: 80%;
  gap: 10px;
`;

const BotAnswer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  padding: 15px;
  max-width: 80%;
  gap: 10px;
`

const MessageText = styled.div`
  font-size: 1rem;
  line-height: 1.4;
`;

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  position: relative;
  z-index: 1;
`;
