import Profile from "./Profile.js";
import Conversation from "./Conversation.js";
import im1 from "../assets/images/mama.png";
import im2 from "../assets/images/hija.png";
import im3 from "../assets/images/robot.png";
import im4 from "../assets/images/santa.png";

const u1 = new Profile("Mamá", im1, {
  lang: "gu-IN",
  rate: 0.8,
  pitch: 1.0,
  color: "#3eb8c2",
  volume: 1,
});

const u2 = new Profile("Hija", im2, {
  lang: "en-JM",
  rate: 1,
  pitch: 0.6,
  color: "#d85930",
  volume: 1,
});

const u3 = new Profile("Robot", im3, {
  lang: "it-CH",
  rate: 0.4,
  pitch: 2.0,
  color: "#2a9966",
  volume: 1,
});

const u4 = new Profile("Santa Claus", im4, {
  lang: "es-MX",
  rate: 2.0,
  pitch: 1.0,
  color: "#cd6ae8",
  volume: 1,
});

const con = new Conversation(document.querySelector("#dialogue"));

document.getElementById("play").addEventListener("click", () => {
  document.getElementById("play").style.display = "none";
  document.querySelector("#dialogue").style.visibility = "visible";

  con.addMessage([
    {
      author: u3,
      text: "VAAAaamossss AAAAA empeeeezaaaaAAArr HHHOOOORRRRAAAAAHHHHhh",
    },
  ]);

  con.wordToWord([
    { author: u1, text: "Tu tía acaba de fallecer LOL" },
    { author: u2, text: "¿Por qué es gracioso?" },
    { author: u1, text: "No es gracioso, Irina. ¿ A qué te refieres?" },
    { author: u2, text: "Mamá, LOL significa riendo muy fuerte!" },
    {
      author: u1,
      text:
        "Dios mío, se lo mandé a todo el mundo. Pensé que significaba LOTS OF LOVE ( Mucho amor). Tengo que llamarlos a todos.",
    },

    { author: u3, text: "HAHAHA, JAJAjaja, HEhehehe, o OO oohhHHH" },
    { author: u3, text: "Que gracioso!!" },
  ]);

  con.letterToLetter([{ author: u4, text: "OH ho HO ho HO HOOOOoooo" }]);
});
