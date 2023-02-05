import React, { useContext, useState, useEffect } from "react";
import { Switch, Route, useLocation, useRouteMatch, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
 IonItem,
 IonToolbar,
 IonItemDivider,
 IonLabel,
 IonButtons,
 IonSearchbar,
 IonSegmentButton,
 IonSegment,
 IonButton
} from "@ionic/react";
import { SwipeableDrawer, Menu } from "@material-ui/core";
import { ArrowBackSharp, Feedback, FilterList, InfoSharp, MenuSharp, SettingsSharp, ShareSharp } from "@mui/icons-material";
import { QueueMusicSharp, MenuBookSharp, AutoStoriesSharp } from "@mui/icons-material";
import { Share } from "@capacitor/share";
import { AnimatePresence, motion } from "framer-motion";
import { LaunchReview } from "@awesome-cordova-plugins/launch-review";

import { Colour, FontType, IskconContent, SearchBook, Bplay, Hindit } from "../global";
import logo from "../../splash.jpg";
import SP from "../../sp.png";
import Settings from "../menu/settings";
import Csong from "./hsong";
import About from "../menu/about";

import TempleFilter from "./filters/temple";
import AstakamFilter from "./filters/astakams";
import PranamaFilter from "./filters/pranama";
import AuthorFilter from "./filters/author";
import { OndemandVideoSharp, PlayLessonSharp, StarRateSharp } from "@mui/icons-material";


function Csub() {
 let { path, url } = useRouteMatch();
 let location = useLocation();
 const [searchText, setSearchText] = useState("");
 const [searchState, setSearchState] = useState(false);
 const [drawerstate, setDrawer] = useState(false);
 const [file, setFile] = useState();
 const [font, setFont] = useContext(FontType);
 let fon;
 if (!font) fon = "Calibri";
 else fon = "Times New Roman";
 const [clr, setClr] = useContext(Colour);
 let color;
 if (clr) color = "#121212";
 else color = "";
 let color2;
 if (clr) color2 = "#FFEB3B";
 else color2 = "#00CBFE";
 let color3;
 if (clr) color3 = "black";
 else color3 = "white";
 const [anchorEl, setAnchorEl] = useState(null);
 const [iskcon2, setIskcon2] = useState({ scontent: "", songs: [], author: [] });
 const [iskcon, setIskcon] = useContext(IskconContent);

 const searchBook = useContext(SearchBook);
 const [searchList, setSearchList] = useState([]);
 const [spos, setSpos] = useState(0);
 let history = useHistory();
 const [filter, setFilter] = useState("all");
 const [expand, setExpand] = useState([]);
 const [bplay, setBplay] = useContext(Bplay);
 const [hindit, setHindi] = useContext(Hindit);
 let scrollBar = ["A", "B", "C", "D", "E", "G", "H", "I", "J", "K", "M", "N", "O", "P", "R", "S", "T", "U", "V", "Y"];

 useEffect(() => {
  if (location.pathname === url) {
   setTimeout(function () {
    setIskcon2(iskcon);
   }, 1);
  } else {
   setIskcon2({ scontent: "", songs: [], author: [] });
  }
 }, [location]);

 useEffect(() => {
  if (file) file.pause();
  if (location.pathname === url) setBplay({ fold: 0, song: 0 });
 }, [location]);

 useEffect(() => {
  if (iskcon2.songs.length) window.scrollTo(0, spos);
 }, [iskcon2]);

 useEffect(() => {
  if (filter === "authors") {
   let dexpand = [];
   for (let j = 0; j < iskcon.author.length; j++) {
    dexpand.push(false);
   }
   setExpand(dexpand);
  }
 }, [filter]);

 const useStyles = makeStyles({
  paper: {
   background: `${color}`,
  },
 });
 const classes = useStyles();

 return (
  <div style={{ backgroundColor: `${color}` }}>
   <AnimatePresence onExitComplete>
    {!searchState && filter === "authors" ? (
     <div style={{ display: location.pathname === url ? "block" : "none" }}>
      <div style={{ height: "58px" }}></div>
      <AuthorFilter value={[expand, setExpand]} value2={[spos, setSpos]} />
     </div>
    ) : null}

    <Switch location={location}>
     <Route exact path={path}>
      <IonToolbar className="ionhead" color={clr ? "warning" : "primary"}>
       {filter === "all" && !searchState ? (
        <IonButtons slot="start" onClick={() => setDrawer(true)}>
         <MenuSharp style={{ fontSize: 30, marginLeft: "10px" }} />
        </IonButtons>
       ) : (
        <IonButtons
         slot="start"
         onClick={() => {
          setFilter("all");
          setSearchText("");
          setSearchState(false);
         }}
        >
         <ArrowBackSharp style={{ fontSize: 30, marginLeft: "10px" }} />
        </IonButtons>
       )}
       {filter === "all" ? (
        <>
         {" "}
         <IonSearchbar
          color={clr}
          clearInput={false}
          value={searchText}
          onIonChange={(e) => {
           setSearchText(e.detail.value);
           if (e.detail.value.length === 0) setSearchState(false);
           else if (e.detail.value.length !== 0) setSearchState(true);
           window.scrollTo(0, 0);
           let query = e.detail.value
            .toLowerCase()
            .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ")
            .replace(/krishna/g, "krsna")
            .replace(/\s{2,}/g, " ");
           let niskcon = { ...iskcon };
           iskcon.songs.map((td, i) => {
            let show =
             td.name.toLowerCase().indexOf(query) > -1 ||
             td.offical
              .toLowerCase()
              .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ")
              .replace(/\s{2,}/g, " ")
              .indexOf(query) > -1;

            niskcon.songs[i].state = show;
           });
           setIskcon2(niskcon);
           if (!hindit) {
            let startIndex = 0;
            let titles = [];

            if (query && query !== " ") {
             while (searchBook.indexOf(query, startIndex) > -1) {
              let index = searchBook.indexOf(query, startIndex);
              let line = searchBook.slice(searchBook.lastIndexOf("\n", index), searchBook.indexOf("\n", index));
              startIndex = index + query.length;
              let title = searchBook.slice(
               searchBook.lastIndexOf("song name", startIndex) + 10,
               searchBook.indexOf("\n", searchBook.lastIndexOf("song name", startIndex) + 10)
              );
              if (
               line.indexOf("name:") === -1 &&
               line.indexOf("author:") === -1 &&
               searchBook.lastIndexOf("\n", index) - searchBook.lastIndexOf("song name", startIndex) > 11
              ) {
               titles.push({ title: title, line: line });
              }
             }
            }

            setSearchList(titles);
           }
          }}
          onIonClear={() => {
           setSearchState(false);
           window.scrollTo(0, 0);
          }}
         ></IonSearchbar>
         {searchState ? null : (
          <IonButtons slot="end">
           <IonButton
            onClick={() => {
             history.push(`${url}/settings`);
            }}
           >
            <SettingsSharp />
           </IonButton>
           <IonButton
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={(e) => {
             if (hindit) {
              if (filter === "all") setFilter("temple");
              else setFilter("all");
             } else setAnchorEl(e.currentTarget);
            }}
           >
            <FilterList />
           </IonButton>
          </IonButtons>
         )}
        </>
       ) : (
        <>
         <IonButtons slot="start">
          {filter === "authors" ? <IonLabel style={{ marginLeft: "10px", fontFamily: `${fon}` }}>Authors</IonLabel> : null}
          {filter === "temple" ? <IonLabel style={{ marginLeft: "10px", fontFamily: `${fon}` }}>{hindit ? "मंदिर आरती गीत" : "Temple Songs"}</IonLabel> : null}
          {filter === "pranama" ? <IonLabel style={{ marginLeft: "10px", fontFamily: `${fon}` }}>Pranama Mantras</IonLabel> : null}
          {filter === "astakams" ? <IonLabel style={{ marginLeft: "10px", fontFamily: `${fon}` }}>Ashtakams & Stotras</IonLabel> : null}
         </IonButtons>

         <IonButtons slot="end">
          <IonButton
           aria-controls="simple-menu"
           aria-haspopup="true"
           onClick={(e) => {
            if (hindit) {
             if (filter === "all") setFilter("temple");
             else setFilter("all");
            } else setAnchorEl(e.currentTarget);
           }}
          >
           <FilterList />
          </IonButton>
         </IonButtons>
        </>
       )}
      </IonToolbar>
      <div style={{ height: "58px" }}></div>
      <SwipeableDrawer classes={{ paper: classes.paper }} anchor="left" open={drawerstate} onOpen={() => setDrawer(true)} onClose={() => setDrawer(false)}>
       <img src={logo} style={{ width: "275px" }} alt="Gauranga is Radha & Krishna combined"></img>
       <IonItem
        color={clr}
        button
        onClick={() => {
         if (hindit) {
          fetch("https://quiet-peak-15233.herokuapp.com/hintut")
           .then((res) => {
            return res.text();
           })
           .then((link) => {
            window.location.href = link;
           });
         } else {
          fetch("https://quiet-peak-15233.herokuapp.com/engtut")
           .then((res) => {
            return res.text();
           })
           .then((link) => {
            window.location.href = link;
           });
         }
        }}
       >
        <OndemandVideoSharp style={{ paddingRight: "10px" }} />
        <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "वीडियो ट्यूटोरियल" : "Video Tutorial"}</IonLabel>
       </IonItem>
       <IonItem
        color={clr}
        button
        onClick={() => {
         history.push(`${url}/about`);
         setDrawer(false);
        }}
       >
        <InfoSharp style={{ paddingRight: "10px" }} />
        <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "ऐप के बारे मे" : "About"}</IonLabel>
       </IonItem>

       <IonItem
        color={clr}
        button
        onClick={async () => {
         let shareRet = await Share.share({
          title: "Share this Treasure",
          text: "The All in One Vaishnava Songs & Prayers App, it has Vaishnava Songs with Audios, Word to Word Meanings and Much More!!!",
          url: "https://play.google.com/store/apps/details?id=com.rahulkudum.vaisnava_songs",
          dialogTitle: "Share with devotees",
         });
        }}
       >
        <ShareSharp style={{ paddingRight: "10px" }} />
        <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "ऐप शेयर करें" : "Share the App"}</IonLabel>
       </IonItem>
       <IonItem
        color={clr}
        button
        onClick={() => {
         LaunchReview.launch();
        }}
       >
        <StarRateSharp style={{ paddingRight: "10px" }} />
        <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "एप रेट करें" : "Rate the App"}</IonLabel>
       </IonItem>
       <IonItem color={clr} button href="mailto:vaishnavasongs108@gmail.com">
        <Feedback style={{ paddingRight: "10px" }} />
        <IonLabel style={{ fontFamily: `${fon}` }}>
         {hindit ? "प्रतिक्रिया / प्रश्न" : "Feedback / Queries"} <p>({hindit ? "एक दिन के भीतर जवाब देंगे" : "replied within an day"})</p>
        </IonLabel>
       </IonItem>
      </SwipeableDrawer>
      <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ type: "linear", duration: 1 }}>
       {searchState && !hindit ? (
        <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}`, fontSize: "16px" }}>
         <IonLabel style={{ fontFamily: `${fon}` }}>Title</IonLabel>
        </IonItemDivider>
       ) : null}

       <div className="whole">
        <div className={searchState ? "" : "list"}>
         {iskcon2.songs.map((td, i) => {
          function next() {
           setSpos(window.scrollY);
           history.push(`${url}/songs/${i}_${td.book}`);
          }

          if (!searchState) {
           if (filter === "all") {
            if (hindit) {
             if (i === 0 || td.name[0] !== iskcon.songs[i - 1].name[0])
              return (
               <div>
                <IonItemDivider id={td.name[0]} style={{ backgroundColor: `${color2}`, color: `${color3}`, fontSize: "16px" }}>
                 <IonLabel style={{ fontFamily: `${fon}` }}>{td.name[0]}</IonLabel>
                </IonItemDivider>

                {td.hindi ? (
                 <IonItem color={clr} button onClick={next}>
                  <IonLabel style={{ fontFamily: `${fon}` }}>
                   <h2>{td.hindi}</h2>
                   <p style={{ fontSize: "11px" }}>{td.hauthor !== "" ? td.hauthor : "अज्ञातकृत"}</p>
                  </IonLabel>
                 </IonItem>
                ) : null}
               </div>
              );

             if (td.hindi)
              return (
               <IonItem color={clr} button onClick={next}>
                <IonLabel style={{ fontFamily: `${fon}` }}>
                 <h2>{td.hindi}</h2>
                 <p style={{ fontSize: "11px" }}>{td.hauthor !== "" ? td.hauthor : "अज्ञातकृत"}</p>
                </IonLabel>
               </IonItem>
              );
            } else {
             if (i === 0 || td.name[0] !== iskcon.songs[i - 1].name[0])
              return (
               <div>
                <IonItemDivider id={td.name[0]} style={{ backgroundColor: `${color2}`, color: `${color3}`, fontSize: "16px" }}>
                 <IonLabel style={{ fontFamily: `${fon}` }}>{td.name[0]}</IonLabel>
                </IonItemDivider>

                <IonItem color={clr} button onClick={next}>
                 <IonLabel style={{ fontFamily: `${fon}` }}>
                  <h2>{td.name}</h2>
                  <p style={{ fontSize: "11px" }}>{td.author !== "" ? td.author : "Anonymous"}</p>
                 </IonLabel>
                </IonItem>
               </div>
              );

             return (
              <IonItem color={clr} button onClick={next}>
               <IonLabel style={{ fontFamily: `${fon}` }}>
                <h2>{td.name}</h2>
                <p style={{ fontSize: "11px" }}>{td.author !== "" ? td.author : "Anonymous"}</p>
               </IonLabel>
              </IonItem>
             );
            }
           }
          }

          if (searchState) {
           if (hindit) {
            if (td.state && td.hindi) {
             return (
              <IonItem color={clr} button onClick={next}>
               <IonLabel style={{ fontFamily: `${fon}` }}>
                <h2>{td.hindi}</h2>
                <p style={{ fontSize: "11px" }}>
                 {td.hauthor !== "" ? td.hauthor : "अज्ञातकृत"} ({td.name})
                </p>
               </IonLabel>
              </IonItem>
             );
            }
           } else {
            if (td.state) {
             return (
              <IonItem color={clr} button onClick={next}>
               <IonLabel style={{ fontFamily: `${fon}` }}>
                <h2>{td.name}</h2>
                <p style={{ fontSize: "11px" }}>
                 {td.author !== "" ? td.author : "Anonymous"} {td.offical ? `(${td.offical})` : null}
                </p>
               </IonLabel>
              </IonItem>
             );
            }
           }
          }
         })}
        </div>
        {!searchState && filter === "all" ? (
         <div className="scrollc lhide">
          <div style={{ height: "58px", zIndex: "-1" }}></div>
          <div className="scroll">
           {scrollBar.map((ab) => {
            return (
             <button
              onClick={() => {
               const section = document.querySelector(`#${ab}`);
               if (section) {
                section.scrollIntoView({ block: "start", inline: "nearest" });
                window.scrollBy(0, -58);
               }
              }}
              style={{ color: `${clr ? "white" : "black"}`, backgroundColor: `${clr ? "#181818" : "#F0F8FF"}` }}
             >
              {ab}
             </button>
            );
           })}
          </div>
          <div style={{ height: "56px", zIndex: "-1" }}></div>
         </div>
        ) : null}
       </div>

       {searchState && !hindit ? (
        <div>
         <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}`, fontSize: "16px" }}>
          <IonLabel style={{ fontFamily: `${fon}` }}>Verses</IonLabel>
         </IonItemDivider>

         {searchList.map((val, i) => {
          if ((val.line.charCodeAt(1) < 48 || val.line.charCodeAt(1) > 57) && (i === 0 || val.title !== searchList[i - 1].title)) {
           return (
            <IonItem
             color={clr}
             button
             onClick={() => {
              for (let j in iskcon.songs) {
               if (val.title.indexOf(iskcon.songs[j].name.toLowerCase()) !== -1) {
                setSpos(window.scrollY);
                history.push(`${url}/songs/${iskcon.songs[j].name}_${iskcon.songs[j].book}`);
               }
              }
             }}
            >
             <IonLabel style={{ fontFamily: `${fon}` }}>
              <h2>{val.line}</h2>
              <p style={{ fontSize: "11px" }}>{val.title}</p>
             </IonLabel>
            </IonItem>
           );
          }
         })}

         <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}`, fontSize: "16px" }}>
          <IonLabel style={{ fontFamily: `${fon}` }}>Translations</IonLabel>
         </IonItemDivider>

         {searchList.map((val, i) => {
          if (val.line.charCodeAt(1) >= 48 && val.line.charCodeAt(1) <= 57 && (i === 0 || val.title !== searchList[i - 1].title)) {
           return (
            <IonItem
             color={clr}
             button
             onClick={() => {
              for (let j in iskcon.songs) {
               if (val.title.indexOf(iskcon.songs[j].name.toLowerCase()) !== -1) {
                setSpos(window.scrollY);
                history.push(`${url}/songs/${iskcon.songs[j].name}_${iskcon.songs[j].book}`);
               }
              }
             }}
            >
             <IonLabel style={{ fontFamily: `${fon}` }}>
              <h2>{val.line.slice(val.line.indexOf(")") + 1, -1)}</h2>
              <p style={{ fontSize: "11px" }}>{val.title}</p>
             </IonLabel>
            </IonItem>
           );
          }
         })}
        </div>
       ) : null}
       <div>{!searchState && filter === "pranama" ? <PranamaFilter value={[spos, setSpos]} /> : null}</div>
       <div>{!searchState && filter === "temple" ? <TempleFilter value={[spos, setSpos]} /> : null}</div>
       <div>{!searchState && filter === "astakams" ? <AstakamFilter value={[spos, setSpos]} /> : null}</div>

       <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {filter !== "all" ? (
         <IonItem
          button
          onClick={() => {
           setAnchorEl(null);
           setFilter("all");
          }}
         >
          <IonLabel style={{ fontFamily: `${fon}` }}> Alphabetical</IonLabel>
         </IonItem>
        ) : null}
        {filter !== "authors" ? (
         <IonItem
          button
          onClick={() => {
           setAnchorEl(null);
           setFilter("authors");
          }}
         >
          <IonLabel style={{ fontFamily: `${fon}` }}> Authors</IonLabel>
         </IonItem>
        ) : null}
        {filter !== "temple" ? (
         <IonItem
          button
          onClick={() => {
           setAnchorEl(null);
           setFilter("temple");
          }}
         >
          <IonLabel style={{ fontFamily: `${fon}` }}>Temple Songs</IonLabel>
         </IonItem>
        ) : null}
        {filter !== "pranama" ? (
         <IonItem
          button
          onClick={() => {
           setAnchorEl(null);
           setFilter("pranama");
          }}
         >
          <IonLabel style={{ fontFamily: `${fon}` }}>Pranama Mantras </IonLabel>
         </IonItem>
        ) : null}
        {filter !== "astakams" ? (
         <IonItem
          lines="none"
          button
          onClick={() => {
           setAnchorEl(null);
           setFilter("astakams");
          }}
         >
          <IonLabel style={{ fontFamily: `${fon}` }}> Ashtakams & Stotras</IonLabel>
         </IonItem>
        ) : null}
       </Menu>
      </motion.div>
      {searchState ? null : (
       <IonToolbar className="tab" color={clr ? "warning" : "primary"}>
        <IonSegment value="default">
         <IonSegmentButton style={{ minWidth: 0 }} value="default" onClick={() => history.push("/iskcon")}>
          <QueueMusicSharp />
         </IonSegmentButton>
         {!hindit ? (
          <>
           <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/topics")}>
            <MenuBookSharp />
           </IonSegmentButton>
           <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/sp")}>
            <img src={SP} style={{ height: "40px" }} />
           </IonSegmentButton>
           <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/sb")}>
            <AutoStoriesSharp />
           </IonSegmentButton>
          </>
         ) : null}

         <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/bookmarks")}>
          <PlayLessonSharp />
         </IonSegmentButton>
        </IonSegment>
       </IonToolbar>
      )}
     </Route>
     <Route path={`${path}/songs/:ind`}>
      <Csong value={[file, setFile]} />
     </Route>
     <Route path={`${path}/about`}>
      <About />
     </Route>
     <Route path={`${path}/settings`}>
      <Settings />
     </Route>
    </Switch>
    {location.pathname.indexOf("songs") === -1 && !searchState ? <div style={{ height: "56px" }}></div> : null}
   </AnimatePresence>
  </div>
 );
}

export default Csub;
