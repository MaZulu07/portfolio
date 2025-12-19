import { GoogleGenAI, Chat } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an AI Career Assistant embedded in the portfolio of an AI/ML Engineer named Basetsana Zulu.
Your goal is to help visitors (recruiters, hiring managers) understand Basetsana's skills and experience.

Key traits of Basetsana:
- AI/ML Engineer and Data Scientist.
- Expert in Python, NLP, and Generative AI.
- Capstone project: "Areyeng" (Tshwane Bus Tracking Platform).
- Professional objective: Eager to use technical skills to drive innovation in ethical and scalable AI solutions.

When asked about Basetsana, be professional, concise, and persuasive.
`;

let chatSession: Chat | null = null;

export const getChatSession = (): Chat => {
  if (!chatSession) {
    chatSession = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });
  }
  return chatSession;
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = getChatSession();
    const response = await chat.sendMessage({ message });
    return response.text || "I'm sorry, I couldn't generate a response at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while communicating with the AI assistant. Please check your API key.";
  }
};