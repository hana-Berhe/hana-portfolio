import evangadiForumShot from "../assets/evangadi-forum.webp";
import chatgptCloneShot from "../assets/chatgpt-clone.webp";
import streamflexShot from "../assets/streamflex.webp";

export const projects = [
  {
    id: "evangadi-forum",
    featured: true,
    name: "Evangadi Forum",
    tags: [
      { label: "Flagship", tone: "violet" },
      { label: "Team lead", tone: "pink" },
    ],
    description:
      "An AI-powered Q&A forum for developers, with search that understands meaning, not just keywords.",
    features: [
      "Semantic search",
      "PDF RAG",
      "AI Draft Coach",
      "Answer Fit",
      "Auth & profiles",
    ],
    role: "Team leader of an 8-member team, coordinating planning and code integration. Contributed the semantic search dashboard, AI answer assessment (Answer Fit) and RAG Documents page.",
    stack: ["React", "Node.js", "Express", "MySQL", "Gemini"],
    image: evangadiForumShot,
    imageAlt:
      "Evangadi Forum dashboard: a personal greeting, forum stats, and a discussion feed with keyword and semantic search",
    liveUrl: "https://evangadi-forum-xi-jade.vercel.app",
    repoUrl: "https://github.com/hana-Berhe/EvangadiForum",
  },
  {
    id: "chatgpt-clone",
    name: "ChatGPT Clone",
    tags: [{ label: "AI chat", tone: "violet" }],
    description:
      "A ChatGPT-style assistant with accounts, private chat history and streaming Gemini replies.",
    features: [
      "Streaming replies",
      "Stop & save",
      "Auto chat titles",
      "Search & rename chats",
      "Code highlighting",
      "Light & dark mode",
    ],
    role: "Built it end to end: auth, a streaming chat API, and the React interface.",
    stack: ["React", "Node.js", "Express", "MySQL", "Gemini"],
    image: chatgptCloneShot,
    imageAlt:
      "ChatGPT Clone home screen: chat history grouped by date in the sidebar and an Ask anything prompt",
    liveUrl: "https://gptclone-ko8o.onrender.com",
    repoUrl: "https://github.com/hana-Berhe/GPTclone",
  },
  {
    id: "streamflex",
    name: "StreamFlex",
    tags: [{ label: "Full stack", tone: "violet" }],
    description:
      "A Netflix-style app with accounts, My List, ratings and AI movie picks, grown from a 7-person team project into a full-stack app.",
    features: [
      "Sign-up & login",
      "My List",
      "3-level ratings",
      "AI picks with reasons",
      "Hover previews",
      "Trailers & search",
    ],
    role: "Coordinated the team build, then added the backend: auth, My List and ratings in MySQL, and Gemini picks.",
    stack: ["React", "Redux", "Express", "MySQL", "TMDB", "Gemini"],
    image: streamflexShot,
    imageAlt:
      "StreamFlex home screen: a featured title banner above a personalised Top picks for Hana row",
    liveUrl: "https://streamflix-five-delta.vercel.app",
    repoUrl: "https://github.com/hana-Berhe/streamflix",
  },
];
