import React, { createContext, useState, useEffect, useRef } from "react";
import { useLocal, useLocalr } from "./lshooks";
import { Media } from "@ionic-native/media";
import { Storage } from "@capacitor/storage";
import { Capacitor } from "@capacitor/core";

export const BookContent = createContext();
export const BookContent2 = createContext();
export const IskconContent = createContext();
export const SearchBook = createContext();
export const Scroll = createContext();
export const Index = createContext();
export const Mediap = createContext();
export const Medias = createContext();
export const Mediasn = createContext();
export const Mediat = createContext();
export const BookMark = createContext();
export const Dbookmark = createContext();
export const Prog = createContext();
export const Tsize = createContext();
export const View = createContext();
export const Colour = createContext();
export const FontType = createContext();
export const Aos = createContext();
export const Controls = createContext();
export const Bplay = createContext();
export const Repeat = createContext();

export const Hindit = createContext();

function reducer2(state, action) {
 switch (action.type) {
  case "add":
   let dustate = [...state];
   let exsist = false;
   dustate.map((ele) => {
    if (ele.name === action.folder) {
     ele.songs.push({ name: action.name, path: action.path, isChecked: false });
     exsist = true;
    }
   });
   if (!exsist) {
    dustate.push({ name: action.folder, songs: [{ name: action.name, path: action.path, isChecked: false }], isChecked: false });
   }
   return dustate;

  case "delfold":
   return state.filter((ele) => !ele.isChecked);
  case "delsong":
   let dumstate = [...state];
   dumstate[action.index].songs = dumstate[action.index].songs.filter((ele) => !ele.isChecked);
   return dumstate;
  case "reorder":
   let dstate = [...state];

   action.array.map((ele) => {
    if (ele.from > ele.to) {
     dstate[ele.index].songs.splice(ele.to, 0, dstate[ele.index].songs[ele.from]);

     dstate[ele.index].songs.splice(ele.from + 1, 1);
     // console.log(dstate);
    }
    if (ele.to > ele.from) {
     dstate[ele.index].songs.splice(ele.to + 1, 0, dstate[ele.index].songs[ele.from]);
     dstate[ele.index].songs.splice(ele.from, 1);
    }
   });

   return dstate;

  default:
   throw new Error();
 }
}

export function GlobalProvider({ children }) {
 const [dbookmark, setDbookmark] = useState([]);

 const books = [
  "Saranagati",
  "Gitavali",
  "Kalyanakalpataru",
  "Gitamala",
  "Baula Sangita",
  "Prarthana",
  "Prema Bhakti Chandrika",
  "Stavamrita Lahari",
  "Songs of the Vaisnava Acaryas",
  "More Songs of the Vaisnava Acaryas",
  "Sri Ksanada Gita Cintamani",
  "The Acaryas Songs Glorifying Lord Gauranga and Govinda",
  "Songs of Vaishnava Acaryas",
  "Sri Krsna Vijaya",
  "Krsna Lila Stava",
  "Gopala Campu",
  "Vrindavane Bhajan",
  "Miscellaneous Songs",
 ];

 let SBbook = "dummy"; // ("SBnew")
 let Psongs = "dummy"; // ("SPMP")
 if (Capacitor.isNative) {
  SBbook = "SBnew";
  Psongs = "SPMP";
 }
 const [content, setContent] = useLocal("book5", []);
 const [content2, setContent2] = useState({ chap: [], inside: "" });
 const [iskcon, setIskcon] = useLocal("iskcon5", { scontent: "", songs: [], author: [] });
 const [searchBook, setSearchBook] = useLocal("vswd", "");
 const [piskcon, setpiskcon] = useState({ scontent: "", songs: [] });
 const arr = useRef([]);
 const [ind, setind] = useState(0);
 const [main, setMain] = useState(books.length);
 const [main2, setMain2] = useLocal("sb1", 0);
 const [main3, setMain3] = useLocal("sb2", "notdone");
 const [main4, setMain4] = useLocal("ps1", 0);
 const [main5, setMain5] = useLocal("ps2", "notdone");

 const [bookMark, dispatch2] = useLocalr("bookmarks", reducer2, []);
 const [song, setSong] = useLocal("song", { name: "", path: "", fold: "" });
 const [tsize, setTize] = useLocal("tsize", 16);
 const [clr, setClr] = useLocal("color", "");
 const [font, setFont] = useLocal("fonttype", "");
 const [file, setFile] = useState(Media.create(song.path));
 const [cposition, setCposition] = useLocal("currentp", 0);
 const [ppb, setPpb] = useState(false);
 const [prog, setProg] = useLocal("prog5", []);
 const [view, setView] = useLocal("view", "1");
 const [aos, setAos] = useLocal("aos", "true");
 const [controls, setControls] = useLocal("controls", "false");
 const [bplay, setBplay] = useLocal("bplayt", { fold: 0, song: 0 });
 const [repeat, setRepeat] = useLocal("rb2", "yes");
 const [hindit, setHindi] = useLocal("hindi", "");

 for (let item in localStorage) {
  if (item.indexOf("prog") !== -1 && item !== "prog5") localStorage.removeItem(item);
 }

 async function clearStorage() {
  await Storage.remove({ key: "govardhan" });
 }

 if (prog.length === 0) {
  clearStorage();
  for (let item in localStorage) {
   if (
    (item.indexOf("iskcon") !== -1 && item !== "iskcon5") ||
    (item.indexOf("book") !== -1 && item !== "book5" && item !== "bookmarks") ||
    item.indexOf("piskcon") !== -1 ||
    item.indexOf("tiskcon") !== -1
   )
    localStorage.removeItem(item);
  }
 }

 async function setIte(key, val) {
  await Storage.set({
   key: key,
   value: val,
  });
 }

 useEffect(() => {
  if (song) setFile(Media.create(song.path));
 }, [song]);

 useEffect(() => {
  var _lsTotal = 0,
   _xLen,
   _x;
  for (_x in localStorage) {
   if (!localStorage.hasOwnProperty(_x)) {
    continue;
   }
   _xLen = (localStorage[_x].length + _x.length) * 2;
   _lsTotal += _xLen;
   //  console.log(_x.substr(0, 50) + " = " + (_xLen / 1024).toFixed(2) + " KB");
  }
  // console.log("Total = " + (_lsTotal / 1024).toFixed(2) + " KB");
 }, []);

 useEffect(() => {
  if (!prog.includes("iskcon")) {
   fetch("https://quiet-peak-15233.herokuapp.com/files/" + "Vaishnava-song-book")
    .then((res) => {
     //console.log(res);
     return res.text();
    })
    .then((text) => {
     setIskcon((prev) => {
      let dum = { ...prev };
      dum.scontent = text;
      return dum;
     });

     setProg((prev) => {
      return [...prev, "iskcon"];
     });
    });
  }
 }, []);

 useEffect(() => {
  if (iskcon.songs.length === 0) {
   let eindex2 = iskcon.scontent.indexOf("DONE2");

   let index2 = iskcon.scontent.indexOf("Index2");

   let fun2 = iskcon.scontent.slice(index2, eindex2);

   let vtext2 = fun2.split(/\r\n|\n/);
   let dvtext2 = [];
   let aind = -1;
   for (let j = 1; j < vtext2.length; j++) {
    let atext = vtext2[j].slice(0, vtext2[j].indexOf("."));
    if (atext.indexOf("Songs") !== -1) {
     aind++;
     dvtext2.push({ name: atext, songs: [] });
    } else {
     dvtext2[aind].songs.push(atext);
    }
   }

   let eindex = iskcon.scontent.indexOf("Done");

   let index = iskcon.scontent.indexOf("INDEX");

   let fun = iskcon.scontent.slice(index, eindex);

   let vtext = fun.split(/\r\n|\n/);

   let etext = [];
   let text = iskcon.scontent.slice(eindex);
   let hcount = 0;
   let hsingers = [
    ["Srila Prabhupada", "श्रील प्रभुपाद"],
    ["HH Bhakti Caru Swami", "भक्ति चारु स्वामी महाराज"],
    ["HH Gour Govinda Swami", "गौर गोविंद स्वामी महाराज"],
    ["HH Vedavyasa Priya Swami", "वेदव्यास प्रिय स्वामी महाराज"],
    ["HH Radhanath Swami", "राधानाथ स्वामी महाराज"],
    ["HH Suhotra Swami", "सुहोत्रा स्वामी महाराज"],
    ["HH Lokanatha Swami", "लोकनाथ स्वामी महाराज"],
    ["HH Bhakti Swarupa Damodara Swami", "भक्ति स्वरूप दामोदर स्वामी महाराज"],
    ["HH Indradyumna Swami", "इंद्रद्युम्न स्वामी महाराज"],
    ["HH Niranjana Swami", "निरंजन स्वामी महाराज"],
    ["HH Achyutananda Swami", "अच्युतानंद स्वामी महाराज"],
    ["HH Krishna Kshetra Swami", "कृष्ण क्षेत्र स्वामी महाराज"],
    ["HH Prabha Vishnu Swami", "प्रभा विष्णु स्वामी महाराज"],
    ["HH Vishnu Jana Swami", "विष्णु जन स्वामी महाराज"],
    ["HH Bhakti Bringa Govinda Swami", "भक्ति भृंग गोविंदा स्वामी महाराज"],
    ["HH Kadamba Kanana Swami", "कदंब कनान स्वामी महाराज"],
    ["HH Bhakti Bhusana Swami", "भक्ति भूषण स्वामी महाराज"],
    ["HH Sivarama Swami", "शिवराम स्वामी महाराज"],
    ["HH Sachinandana Swami", "सचिनंदन स्वामी महाराज"],
    ["HH Bhakti Rasamrita Swami", "भक्ति रसामृत स्वामी महाराज"],
    ["HG Aindra Prabhu", "ऐंद्रा प्रभु"],
    ["HG Jai Sachinandana Prabhu", "जय सचिनंदन प्रभु"],
    ["HG Jaysacinandana Prabhu (ACBSP)", "जय सचिनंदन प्रभु (श्रील प्रभुपाद)"],
    ["HG Vaiyasaki Prabhu", "वैयसकि प्रभु"],
    ["HG Vaisesika Prabhu", "वैशेषिक प्रभु"],
    ["HG Swarupa Damodar Prabhu", "स्वरूप दामोदर प्रभु"],
    ["HG Sivarama Prabhu", "शिवराम प्रभु"],
    ["HG Ananta Nitai Prabhu", "अनंत निताई प्रभु"],
    ["HG Saci Kumar Prabhu", "सचि कुमार प्रभू"],
    ["HG Shiksastakam Prabhu", "शिक्षाष्टकम प्रभु"],
    ["HG Agnidev Prabhu", "अग्निदेव प्रभु"],
    ["HG Ganga Narayana Prabhu", "गंगा नारायण प्रभु"],
    ["HG Govinda Prabhu", "गोविंदा प्रभु"],
    ["HG Badahari Prabhu", "बदाहारी प्रभु"],
    ["HG Krsna Kirtan Prabhu", "कृष्ण कीर्तन प्रभु"],
    ["HG Sudarshan Prabhu", "सुदर्शन प्रभु"],
    ["HG Balimardana Prabhu", "बालीमर्दन प्रभु"],
    ["HG Gauranga Prabhu", "गौरांग प्रभु"],
    ["HG Dina Bandhu Prabhu", "दीन बंधु प्रभु"],
    ["HG Anandarupa Prabhu", "आनंदरूप प्रभु"],
    ["HG Krsnabhishek Prabhu", "कृष्णभिषेक प्रभु"],
    ["HG Gaur Gopal Prabhu", "गौर गोपाल प्रभु"],
    ["HG Jay Vrindavan Prabhu", "जय वृंदावन प्रभु"],
    ["HG Amarendra Prabhu", "अमरेंद्र प्रभु"],
    ["HG Naru Gopal Prabhu", "नारु गोपाल प्रभु"],
    ["HG Nityananda Prabhu", "नित्यानंद प्रभु"],
    ["HG Vrindavan Prasad Prabhu", "वृंदावन प्रसाद प्रभु"],
    ["HG Ananda Radhe Mataji", "आनंद राधे माताजी"],
    ["HG Yamuna Mataji", "यमुना माताजी"],
    ["HG Sarbani Mataji", "सर्वाणि माताजी"],
    ["HG Sandhini Mataji", "संध्या माताजी"],
    ["HG Ramya Mataji", "रम्या माताजी"],
    ["HG Shravya Mataji", "श्रव्या माताजी"],
    ["Kananbala Devi", "काननबाला देवी"],
    ["Vaishnavas", "वैष्णव"],
   ];
   for (let i in vtext) {
    let j = vtext[i].indexOf(",");

    let dum = "";

    for (let k = 0; k < j; k++) {
     dum += vtext[i][k];
    }

    let ind1 = eindex + text.indexOf(dum);
    let ind3 = text.slice(text.indexOf(dum), text.indexOf("(1)", text.indexOf(dum)));
    let ind3t = ind3.split(/\r\n|\n/);
    let author = "";
    let offical = "";
    let hauthor = "";

    ind3t.forEach((ele) => {
     if (ele.indexOf("Author") !== -1) {
      author = ele.slice(ele.indexOf("Author") + 8, ele.length);
     }
     if (ele.indexOf("hauthor") !== -1) {
      hauthor = ele.slice(ele.indexOf("hauthor") + 8, ele.length);
     }
     if (ele.indexOf("Official Name") !== -1) {
      offical = ele.slice(ele.indexOf("Official Name") + 15, ele.length);
     }
    });

    if (j !== -1) {
     let p = Number(i) + 1;

     let links = [];
     let k = 0;
     while (k !== -1) {
      k = vtext[p].indexOf("link");

      if (k !== -1) {
       let q = vtext[p].indexOf("http");

       if (q !== -1) {
        let linkname = "";
        let hlinkname = "";
        let linkaddress = "";

        for (let x = k + 5; x < q - 1; x++) {
         linkname += vtext[p][x];
        }
        for (let y = q; y < vtext[p].length; y++) {
         linkaddress += vtext[p][y];
        }

        for (let i = 0; i < hsingers.length; i++) {
         if (linkname.indexOf(hsingers[i][0]) !== -1) {
          hlinkname = linkname.replace(hsingers[i][0], hsingers[i][1]);
          break;
         }
        }
        links.push({ linkname: linkname, linkaddress: linkaddress, hlinkname: hlinkname });
       }
      }
      p++;
     }

     let b = vtext[p - 1].indexOf("book");
     let book = b !== -1 ? vtext[p - 1].slice(5) : "";
     if (book) p++;
     let h = vtext[p - 1].indexOf("hindi");
     let hindi = h !== -1 ? vtext[p - 1].slice(6) : "";

     let ind2 = hindi ? eindex + text.indexOf("Hindi", ind1 - eindex) : eindex + text.indexOf("Song Name", ind1 - eindex);
     let hind1 = eindex + text.indexOf("Hindi", ind1 - eindex);
     let hind2 = eindex + text.indexOf("Song Name", ind1 - eindex);

     etext.push({
      name: dum,
      sindex: ind1,
      lindex: ind2,
      state: true,
      link: links,
      author: author,
      offical: offical,
      book: book,
      dflink: 0,
      hindi: hindi,
      hsindex: hind1,
      hlindex: hind2,
      hauthor: hauthor,
     });
    }
   }

   setIskcon((prev) => {
    let dum = { ...prev };
    dum.songs = etext;
    dum.author = dvtext2;
    return dum;
   });
  }
 }, [iskcon.scontent]);

 useEffect(() => {
  if (!prog.includes("vswd")) {
   fetch("https://quiet-peak-15233.herokuapp.com/files/" + "vswd")
    .then((res) => {
     //console.log(res);
     return res.text();
    })
    .then((text) => {
     setSearchBook(text);

     setProg((prev) => {
      return [...prev, "vswd"];
     });
    });
  }
 }, []);

 useEffect(() => {
  for (let i in books) {
   if (!prog.includes(books[i])) {
    fetch("https://quiet-peak-15233.herokuapp.com/files/" + books[i])
     .then((res) => {
      //console.log(res);
      return res.text();
     })
     .then((text) => {
      setContent((prev) => {
       return [...prev, { name: books[i], inside: text, chap: [], song: [] }];
      });

      setProg((prev) => {
       return [...prev, books[i]];
      });
     });
   }
  }
 }, []);

 useEffect(() => {
  if (content.length === main) {
   setMain(0);
  }
 }, [content.length]);

 useEffect(() => {
  for (let ia in content) {
   if (content[ia].chap.length === 0) {
    let sarr = [];
    let sname = -4;
    let ename = 0;
    while (sname !== -1) {
     sname = content[ia].inside.indexOf("Part", sname + 4);

     ename = content[ia].inside.indexOf("Part", sname + 4);
     if (sname !== -1) {
      let pname = content[ia].inside.indexOf("Song", sname);
      let title = content[ia].inside.slice(sname + 7, pname).split(/\r\n|\n/);
      if (ename !== -1) {
       sarr.push(
        //rahul.slice(sname,sname+7)
        { name: title[0], sindex: sname, eindex: ename, song: [] }
       );
      } else {
       sarr.push({ name: title[0], sindex: sname, eindex: content[ia].inside.length, song: [] });
      }
     }
    }

    setContent((prev) => {
     let dum = [...prev];
     dum[ia].chap = [...sarr];
     return dum;
    });
   }
  }
 }, [content.length]);

 useEffect(() => {
  for (let ia in content) {
   // console.log(content);

   if (content[ia].chap.length === 0) {
    if (content[ia].song.length === 0) {
     //console.log(content[ia].name,content[ia].chap[ai].eindex,content[ia].chap[ai].sindex);
     let fun = content[ia].inside;
     let sarr = [];
     let sname = -4;
     let dp = 1;
     while (sname !== -1) {
      sname = fun.indexOf("Song", sname + 4);

      if (sname !== -1) {
       let t1name = fun.indexOf("Text", sname);
       let t2name = fun.indexOf("Text", t1name + 5) > -1 ? fun.indexOf("Text", t1name + 5) : fun.indexOf("Song", t1name + 5);

       let title = fun.slice(t1name, t2name);
       let dtitle = title.split(/\r\n|\n/);

       let dk = 0;
       while (dtitle[dk].length < 15) {
        dk++;
       }

       if (dtitle[dk].indexOf("Text 1") > -1) dtitle[dk] = dtitle[dk].slice(6);
       dtitle[dk] = dtitle[dk].replace(/,/g, "");
       dtitle[dk] = dtitle[dk].replace(/-/g, " ");
       let drtitle = "";
       let sli = 0;
       let don = false;
       for (let i in dtitle[dk]) {
        if (!don) {
         if (dtitle[dk][sli] === " " || dtitle[dk][sli] === "'" || dtitle[dk][sli] === '"') sli++;
         else if (dtitle[dk][sli] !== " ") {
          drtitle = drtitle.concat(dtitle[dk][sli].toUpperCase());
          don = true;
         }
        } else {
         if (dtitle[dk][i - 1] === " ") drtitle = drtitle.concat(dtitle[dk][i].toUpperCase());
         else drtitle = drtitle.concat(dtitle[dk][i]);
        }
       }

       let duptitle = fun.slice(sname, t1name);
       if (duptitle.indexOf("_") !== -1) {
        let duptitled = duptitle.slice(duptitle.indexOf("_") + 1);
        let duptil = duptitled.split(/\r\n|\n/);
        drtitle = duptil[0];
       }

       sarr.push(
        //rahul.slice(sname,sname+7)
        { name: dp + ". " + drtitle, index: sname }
       );
      }
      dp++;
     }

     setContent((prev) => {
      let dum = [...prev];
      dum[ia].song = [...sarr];
      return dum;
     });
    }
   }

   for (let ai in content[ia].chap) {
    if (content[ia].chap[ai].song.length === 0) {
     //console.log(content[ia].name,content[ia].chap[ai].eindex,content[ia].chap[ai].sindex);
     let fun = content[ia].inside.slice(content[ia].chap[ai].sindex, content[ia].chap[ai].eindex);

     let sarr = [];
     let sname = -4;

     let dp = 1;
     while (sname !== -1) {
      sname = fun.indexOf("Song", sname + 4);

      if (sname !== -1) {
       let t1name = fun.indexOf("Text", sname);
       let t2name = fun.indexOf("Text", t1name + 5) > -1 ? fun.indexOf("Text", t1name + 5) : fun.indexOf("Song", t1name + 5);

       let title = fun.slice(t1name, t2name);
       let dtitle = title.split(/\r\n|\n/);

       let dk = 0;
       while (dtitle[dk].length < 15) {
        dk++;
       }
       dtitle[dk] = dtitle[dk].replace("Text 1", "");
       dtitle[dk] = dtitle[dk].replace("(Refrain)", "");
       dtitle[dk] = dtitle[dk].replace("(refrain)", "");
       dtitle[dk] = dtitle[dk].replace(/,/g, "");
       dtitle[dk] = dtitle[dk].replace(/-/g, " ");
       let drtitle = "";
       let sli = 0;
       let don = false;
       for (let i in dtitle[dk]) {
        if (!don) {
         if (dtitle[dk][sli] === " " || dtitle[dk][sli] === "'" || dtitle[dk][sli] === '"') sli++;
         else if (dtitle[dk][sli] !== " ") {
          drtitle = drtitle.concat(dtitle[dk][sli].toUpperCase());
          don = true;
         }
        } else {
         if (dtitle[dk][i - 1] === " ") drtitle = drtitle.concat(dtitle[dk][i].toUpperCase());
         else drtitle = drtitle.concat(dtitle[dk][i]);
        }
       }

       let duptitle = fun.slice(sname, t1name);
       if (duptitle.indexOf("_") !== -1) {
        let duptitled = duptitle.slice(duptitle.indexOf("_") + 1);
        let duptil = duptitled.split(/\r\n|\n/);
        drtitle = duptil[0];
       }

       sarr.push(
        //rahul.slice(sname,sname+7)
        { name: dp + ". " + drtitle, index: sname + content[ia].chap[ai].sindex }
       );
      }
      dp++;
     }

     setContent((prev) => {
      let dum = [...prev];
      dum[ia].chap[ai].song = [...sarr];
      return dum;
     });
    }
   }
  }
 }, [main]);

 useEffect(() => {
  if (!prog.includes(SBbook)) {
   fetch("https://quiet-peak-15233.herokuapp.com/files/" + SBbook)
    .then((res) => {
     //console.log(res);
     return res.text();
    })
    .then((text) => {
     setContent2((prev) => {
      let dum = { ...prev };
      dum.inside = text;
      return dum;
     });

     setProg((prev) => {
      return [...prev, SBbook];
     });
    });
  }
 }, []);

 useEffect(() => {
  if (content2.chap.length === 0) {
   let sarr = [];
   let sname = -4;
   let ename = 0;
   while (sname !== -1) {
    sname = content2.inside.indexOf("Part", sname + 4);

    ename = content2.inside.indexOf("Part", sname + 4);
    if (sname !== -1) {
     let pname = content2.inside.indexOf("Song", sname);
     let title = content2.inside.slice(sname + 7, pname).split(/\r\n|\n/);
     if (ename !== -1) {
      sarr.push(
       //rahul.slice(sname,sname+7)
       { name: title[0], sindex: sname, eindex: ename, song: [] }
      );
     } else {
      sarr.push({ name: title[0], sindex: sname, eindex: content2.inside.length, song: [] });
     }
    }
   }

   setContent2((prev) => {
    let dum = { ...prev };
    dum.chap = [...sarr];
    return dum;
   });
  }
 }, [content2.inside]);

 useEffect(() => {
  // console.log(content2);

  for (let ai in content2.chap) {
   if (content2.chap[ai].song.length === 0) {
    //console.log(content2[ia].name,content2[ia].chap[ai].eindex,content2[ia].chap[ai].sindex);
    let fun = content2.inside.slice(content2.chap[ai].sindex, content2.chap[ai].eindex);

    let sarr = [];
    let sname = -4;

    let dp = 1;
    while (sname !== -1) {
     sname = fun.indexOf("Song", sname + 4);

     if (sname !== -1) {
      let t1name = fun.indexOf("Text", sname);
      let t2name = fun.indexOf("Text", t1name + 5) > -1 ? fun.indexOf("Text", t1name + 5) : fun.indexOf("Song", t1name + 5);

      let title = fun.slice(t1name, t2name);
      let dtitle = title.split(/\r\n|\n/);

      let dk = 0;
      while (dtitle[dk].length < 15) {
       dk++;
      }
      dtitle[dk] = dtitle[dk].replace("Text 1", "");
      dtitle[dk] = dtitle[dk].replace("(Refrain)", "");
      dtitle[dk] = dtitle[dk].replace("(refrain)", "");
      dtitle[dk] = dtitle[dk].replace(/,/g, "");
      dtitle[dk] = dtitle[dk].replace(/-/g, " ");
      let drtitle = "";
      let sli = 0;
      let don = false;
      for (let i in dtitle[dk]) {
       if (!don) {
        if (dtitle[dk][sli] === " " || dtitle[dk][sli] === "'" || dtitle[dk][sli] === '"') sli++;
        else if (dtitle[dk][sli] !== " ") {
         drtitle = drtitle.concat(dtitle[dk][sli].toUpperCase());
         don = true;
        }
       } else {
        if (dtitle[dk][i - 1] === " ") drtitle = drtitle.concat(dtitle[dk][i].toUpperCase());
        else drtitle = drtitle.concat(dtitle[dk][i]);
       }
      }

      let duptitle = fun.slice(sname, t1name);
      if (duptitle.indexOf("_") !== -1) {
       let duptitled = duptitle.slice(duptitle.indexOf("_") + 1);
       let duptil = duptitled.split(/\r\n|\n/);
       drtitle = duptil[0];
      }

      sarr.push(
       //rahul.slice(sname,sname+7)
       { name: dp + ". " + drtitle, index: sname + content2.chap[ai].sindex }
      );
     }
     dp++;
    }

    setContent2((prev) => {
     let dum = { ...prev };
     dum.chap[ai].song = [...sarr];
     return dum;
    });
   }

   setMain2(content2.chap.length);
  }
 }, [content2.chap.length]);

 useEffect(() => {
  if (main3 !== "done") {
   //  console.log(main2);

   setIte("SBbook", JSON.stringify(content2));
   if (main2 === 12) setMain3("done");
  }
 }, [main2]);

 useEffect(() => {
  if (!prog.includes(Psongs)) {
   fetch("https://quiet-peak-15233.herokuapp.com/files/" + Psongs)
    .then((res) => {
     return res.text();
    })
    .then((text) => {
     setpiskcon((prev) => {
      let dum = { ...prev };
      dum.scontent = text;
      return dum;
     });

     setProg((prev) => {
      return [...prev, Psongs];
     });
    });
  }
 }, []);

 useEffect(() => {
  if (piskcon.songs.length === 0) {
   let eindex = piskcon.scontent.indexOf("Done");

   let index = piskcon.scontent.indexOf("INDEX");

   let fun = piskcon.scontent.slice(index, eindex);

   let vtext = fun.split(/\r\n|\n/);

   let etext = [];
   let text = piskcon.scontent.slice(eindex);

   for (let i = 1; i < vtext.length - 1; i = i + 2) {
    let dum = vtext[i];
    let link = vtext[i + 1];
    let edum = vtext[i + 2];
    let k = 0,
     j = dum.length;
    for (let i in dum) {
     if (dum[i] === " ") k++;
     else break;
    }

    for (let i in dum) {
     if (dum[dum.length - 1 - i] === " ") j--;
     else break;
    }

    dum = dum.slice(k, j);
    k = 0;
    j = link.length;
    for (let i in link) {
     if (link[i] === " ") k++;
     else break;
    }

    for (let i in dum) {
     if (link[link.length - 1 - i] === " ") j--;
     else break;
    }
    link = link.slice(k, j);
    k = 0;
    j = edum.length;
    for (let i in edum) {
     if (edum[i] === " ") k++;
     else break;
    }

    for (let i in edum) {
     if (edum[edum.length - 1 - i] === " ") j--;
     else break;
    }
    edum = edum.slice(k, j);

    let ind1 = eindex + text.indexOf(dum);
    let ind3 = eindex + text.indexOf(edum);

    let ind2 = i === vtext.length - 3 ? piskcon.scontent.length : ind3;

    etext.push({ name: dum, sindex: ind1, lindex: ind2, link: link, offline: false });
   }

   setpiskcon((prev) => {
    let dum = { ...prev };
    dum.songs = etext;
    return dum;
   });
   setMain4(etext.length);
  }
 }, [piskcon.scontent]);

 useEffect(() => {
  if (main5 !== "done") {
   //  console.log(main4);

   setIte("Psongs", JSON.stringify(piskcon));
   if (main4 === 186) setMain5("done");
  }
 }, [main4]);

 // console.log(content);

 return (
  <BookContent.Provider value={content}>
   <IskconContent.Provider value={[iskcon, setIskcon]}>
    <SearchBook.Provider value={searchBook}>
     <Scroll.Provider value={arr}>
      <Index.Provider value={[ind, setind]}>
       <Mediap.Provider value={[file, setFile]}>
        <Medias.Provider value={[ppb, setPpb]}>
         <Mediasn.Provider value={[song, setSong]}>
          <Mediat.Provider value={[cposition, setCposition]}>
           <BookMark.Provider value={[bookMark, dispatch2]}>
            <Dbookmark.Provider value={[dbookmark, setDbookmark]}>
             <Prog.Provider value={prog}>
              <Tsize.Provider value={[tsize, setTize]}>
               <View.Provider value={[view, setView]}>
                <Colour.Provider value={[clr, setClr]}>
                 <BookContent2.Provider value={content2}>
                  <FontType.Provider value={[font, setFont]}>
                   <Aos.Provider value={[aos, setAos]}>
                    <Controls.Provider value={[controls, setControls]}>
                     <Bplay.Provider value={[bplay, setBplay]}>
                      <Repeat.Provider value={[repeat, setRepeat]}>
                       <Hindit.Provider value={[hindit, setHindi]}>{children}</Hindit.Provider>
                      </Repeat.Provider>
                     </Bplay.Provider>
                    </Controls.Provider>
                   </Aos.Provider>
                  </FontType.Provider>
                 </BookContent2.Provider>
                </Colour.Provider>
               </View.Provider>
              </Tsize.Provider>
             </Prog.Provider>
            </Dbookmark.Provider>
           </BookMark.Provider>
          </Mediat.Provider>
         </Mediasn.Provider>
        </Medias.Provider>
       </Mediap.Provider>
      </Index.Provider>
     </Scroll.Provider>
    </SearchBook.Provider>
   </IskconContent.Provider>
  </BookContent.Provider>
 );
}
