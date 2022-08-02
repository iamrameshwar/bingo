import { createSlice } from "@reduxjs/toolkit";

const array = [
  "Hello, are you there?",
  "We can see you",
  "We can't hear you.",
  "You're on mute!",
  "Can you unmute your mic?",
  "Could you turn your video on?",
  "Can you hear me now?",
  "Can you see me now?",
  "Would you mind muting",
  "We can hear the dog barking",
  "Sorry, I didn't catch that",
  "The connection is bad",
  "Could you repeat that",
  "You're breaking up a bit",
  "You've frozen",
  "We've lost you!",
  "Could you write it in chat?",
  "You can leave now",
  "He/She is not joining today",
  "I will share my screen",
  "See you tomorrow",
  "I will be back",
  "He/She will be late today",
  "Sorry, I'm back",
  "Good morning everyone",
];
const shuffledArray = [...array].sort((a, b) => 0.5 - Math.random());
const initialState = {
  cards: shuffledArray,
  selectedCards: [12],
  bingos: [],
  rules: [
    //Horizontal Rules
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    //Vertical Rules
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    //Diagonal Rules
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ],
  animationConfig: {},
  socketConnection: new WebSocket(
    "wss://wwfgg5ansj.execute-api.eu-north-1.amazonaws.com/Prod"
  ),
  userName:
    localStorage.getItem("userName") ?? `user_${new Date().getMilliseconds()}`,
  bingoHistories: [],
};
const appSlice = createSlice({
  name: "app",
  initialState: initialState,
  reducers: {
    setUserName(state, action) {
      state.userName = action.payload;
      localStorage.setItem("userName", action.payload);
    },
    liveUpdates(state, action) {
      state.bingoHistories.push(action.payload);
    },
    reset(state) {
      state.cards = [...array].sort((a, b) => 0.5 - Math.random());
      state.selectedCards = [12];
      state.bingos = [];
      state.bingoHistories = [];
    },
    selectCard(state, action) {
      state.selectedCards.push(action.payload);
      for (let option of state.rules) {
        let verifier = option.filter((x) => state.selectedCards.includes(x));
        if (
          verifier.length === 5 &&
          !state.bingos.includes(verifier.join(""))
        ) {
          state.bingos.push(verifier.join(""));
        }
      }
    },
    deSelectCard(state, action) {
      let index = state.selectedCards.indexOf(action.payload);
      if (index !== -1) {
        state.selectedCards.splice(index, 1);
      }
    },
    setBingo(state, action) {
      state.socketConnection.send(
        JSON.stringify({
          action: "sendmessage",
          data: JSON.stringify({
            userName: state.userName,
            bingo: action.payload,
            totalBingo: state.bingos.length,
          }),
        })
      );
    },
    stopBingo(state, action) {
      cleanAnimation(state);
    },
  },
});

export const {
  setUserName,
  liveUpdates,
  reset,
  selectCard,
  deSelectCard,
  setBingo,
  stopBingo,
} = appSlice.actions;
export default appSlice.reducer;
