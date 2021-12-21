import React, { useContext, useState, useEffect } from "react";
import { Switch, Route, useLocation, useRouteMatch, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { IonItem, IonToolbar, IonItemDivider, IonLabel, IonButtons, IonSearchbar, IonNote, IonSegmentButton, IonSegment, IonButton } from "@ionic/react";
import { SwipeableDrawer, Menu } from "@material-ui/core";
import { ChromeReaderMode, Feedback, FilterList, InfoSharp, MenuSharp, SettingsSharp, ShareSharp, Search } from "@material-ui/icons";
import { LibraryMusicSharp, CollectionsBookmarkSharp, QueueMusicSharp, MenuBookSharp } from "@material-ui/icons";
import { Share } from "@capacitor/share";

import { Colour, FontType, IskconContent, SearchBook, Bplay } from "../global";
import logo from "../../splash.jpg";
import Settings from "../menu/settings";
import SB from "../SB/sbsonglist";
import Csong from "./hsong";
import Tsub from "../SP/spsonglist";
import About from "../menu/about";
import Readme from "../menu/readme";

import TempleFilter from "./filters/temple";
import AstakamFilter from "./filters/astakams";
import PranamaFilter from "./filters/pranama";
import AuthorFilter from "./filters/author";

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
 const [iskcon, setIskcon] = useContext(IskconContent);
 const searchBook = useContext(SearchBook);
 const [searchList, setSearchList] = useState([]);
 const [spos, setSpos] = useState(0);
 let history = useHistory();
 const [filter, setFilter] = useState("all");
 const [expand, setExpand] = useState([]);
 const [bplay, setBplay] = useContext(Bplay);

 useEffect(() => {
  if (file) file.pause();
  if (location.pathname === url) setBplay({fold:0,song:0});
  setTimeout(function () {
   if (location.pathname === url) window.scrollTo(0, spos);
  }, 100);
 }, [location]);

 useEffect(() => {
  let dexpand = [];
  for (let j = 0; j < iskcon.author.length; j++) {
   dexpand.push(false);
  }
  setExpand(dexpand);
 }, []);

 console.log("scdsac");

 const useStyles = makeStyles({
  paper: {
   background: `${color}`,
  },
 });
 const classes = useStyles();

 let ls;

 function searchHandler() {
  if (searchText.length === 0) setSearchState(false);
  else if (searchText.length !== 0) setSearchState(true);
  window.scrollTo(0, 0);
  let query = searchText
   .toLowerCase()
   .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ")
   .replace(/\s{2,}/g, " ");
  iskcon.songs.map((td, i) => {
   let show =
    td.name.toLowerCase().indexOf(query) > -1 ||
    td.offical
     .toLowerCase()
     .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, " ")
     .replace(/\s{2,}/g, " ")
     .indexOf(query) > -1;

   let niskcon = { ...iskcon };
   niskcon.songs[i].state = show;
   setIskcon(niskcon);
  });

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
    if (line.indexOf("name:") === -1 && searchBook.lastIndexOf("\n", index) - searchBook.lastIndexOf("song name", startIndex) > 11) {
     titles.push({ title: title, line: line });
    }
   }
  }

  setSearchList(titles);
 }

 return (
  <div style={{ backgroundColor: `${color}` }}>
   <div style={{ display: location.pathname === url ? "block" : "none" }}>
    {!searchState && filter === "authors" ? (
     <>
      {" "}
      <div style={{ height: "58px" }}></div>
      <AuthorFilter value={[expand, setExpand]} value2={[spos, setSpos]} />
     </>
    ) : null}
   </div>
   <Switch location={location}>
    <Route exact path={path}>
     <IonToolbar className="ionhead" color={clr ? "warning" : "primary"}>
      <IonButtons slot="start" onClick={() => setDrawer(true)}>
       <MenuSharp style={{ fontSize: 30, marginLeft: "10px" }} />
      </IonButtons>
      <IonSearchbar
       color={clr}
       value={searchText}
       onIonChange={(e) => {
        setSearchText(e.detail.value);
       }}
       onKeyPress={(e) => {
        if (e.key === "Enter") {
         searchHandler();
        }
       }}
       onIonClear={() => {
        setSearchState(false);
        window.scrollTo(0, 0);
       }}
      ></IonSearchbar>
      {searchText ? (
       <IonButtons slot="end">
        <IonButton
         onClick={(e) => {
          searchHandler();
         }}
        >
         <Search />
        </IonButton>
       </IonButtons>
      ) : (
       <IonButtons slot="end">
        <IonButton aria-controls="simple-menu" aria-haspopup="true" onClick={(e) => setAnchorEl(e.currentTarget)}>
         <FilterList />
        </IonButton>
       </IonButtons>
      )}
     </IonToolbar>

     <div style={{ height: "58px" }}></div>

     <SwipeableDrawer classes={{ paper: classes.paper }} anchor="left" open={drawerstate} onOpen={() => setDrawer(true)} onClose={() => setDrawer(false)}>
      <img src={logo} style={{ width: "275px" }} alt="Gauranga is Radha & Krishna combined"></img>

      <IonItem
       color={clr}
       button
       onClick={() => {
        history.push(`${url}/sb`);
        setDrawer(false);
       }}
      >
       <IonLabel style={{ fontFamily: `${fon}`, width: "225px" }}>Prayers from Srimad Bhagavatam</IonLabel>
      </IonItem>

      <IonItem
       color={clr}
       button
       onClick={() => {
        history.push(`${url}/menu/sp`);
        setDrawer(false);
       }}
      >
       <IonLabel style={{ fontFamily: `${fon}`, width: "225px" }}>Bhaktivedanta Music & Purports</IonLabel>
      </IonItem>

      <IonItem
       color={clr}
       button
       onClick={() => {
        history.push(`${url}/settings`);
        setDrawer(false);
       }}
      >
       <SettingsSharp style={{ paddingRight: "10px" }} />
       <IonLabel style={{ fontFamily: `${fon}` }}>Settings</IonLabel>
      </IonItem>

      <IonItem
       color={clr}
       button
       onClick={() => {
        history.push(`${url}/readme`);
        setDrawer(false);
       }}
      >
       <ChromeReaderMode style={{ paddingRight: "10px" }} />
       <IonLabel style={{ fontFamily: `${fon}` }}>Read Me</IonLabel>
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
       <IonLabel style={{ fontFamily: `${fon}` }}>About</IonLabel>
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
       <IonLabel style={{ fontFamily: `${fon}` }}>Share this App</IonLabel>
      </IonItem>

      <IonItem color={clr} button href="mailto:vaishnavasongs108@gmail.com">
       <Feedback style={{ paddingRight: "10px" }} />
       <IonLabel style={{ fontFamily: `${fon}` }}>Give us Feedback</IonLabel>
      </IonItem>
     </SwipeableDrawer>

     {searchState ? (
      <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}`, fontSize: "16px" }}>
       <IonLabel style={{ fontFamily: `${fon}` }}>Title</IonLabel>
      </IonItemDivider>
     ) : null}

     {iskcon.songs.map((td, i) => {
      if (td.name === "Yasomati Nandana") {
       ls = i;
      }

      if (ls && i > ls) return null;

      function next() {
       setSpos(window.scrollY);
       history.push(`${url}/songs/${i}_${td.book}`);
      }

      if (!searchState) {
       if (filter === "all") {
        if (i === 0 || td.name[0] !== iskcon.songs[i - 1].name[0])
         return (
          <div>
           <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}`, fontSize: "16px" }}>
            <IonLabel style={{ fontFamily: `${fon}` }}>{td.name[0]}</IonLabel>
           </IonItemDivider>

           <IonItem color={clr} button onClick={next}>
            <IonLabel style={{ fontFamily: `${fon}` }}>{td.name}</IonLabel>
            <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
             {td.author}
            </IonNote>
           </IonItem>
          </div>
         );

        return (
         <IonItem color={clr} button onClick={next}>
          <IonLabel style={{ fontFamily: `${fon}` }}>{td.name}</IonLabel>
          <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
           {td.author}
          </IonNote>
         </IonItem>
        );
       }
      }

      if (searchState) {
       if (td.state) {
        return (
         <IonItem color={clr} button onClick={next}>
          <IonLabel style={{ fontFamily: `${fon}` }}>
           <h2>{td.name}</h2>
           <h6>{td.offical}</h6>
          </IonLabel>
         </IonItem>
        );
       }
      }
     })}

     {searchState ? (
      <div>
       <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}`, fontSize: "16px" }}>
        <IonLabel style={{ fontFamily: `${fon}` }}>Verses</IonLabel>
       </IonItemDivider>

       {searchList.map((val, i) => {
        if (val.line.indexOf(")") === -1 && (i === 0 || val.line.indexOf(")") !== -1 || val.title !== searchList[i - 1].title)) {
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
           <IonLabel style={{ fontFamily: `${fon}` }}>{val.line}</IonLabel>
           <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
            {val.title}
           </IonNote>
          </IonItem>
         );
        }
       })}

       <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}`, fontSize: "16px" }}>
        <IonLabel style={{ fontFamily: `${fon}` }}>Translations</IonLabel>
       </IonItemDivider>

       {searchList.map((val, i) => {
        if (val.line.indexOf(")") !== -1 && (i === 0 || val.line.indexOf(")") === -1 || val.title !== searchList[i - 1].title)) {
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
           <IonLabel style={{ fontFamily: `${fon}` }}>{val.line.slice(val.line.indexOf(")") + 1, -1)}</IonLabel>
           <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
            {val.title}
           </IonNote>
          </IonItem>
         );
        }
       })}
      </div>
     ) : null}

     <div>{!searchState && filter === "pranama" ? <PranamaFilter /> : null}</div>

     <div>{!searchState && filter === "temple" ? <TempleFilter /> : null}</div>

     <div>{!searchState && filter === "astakams" ? <AstakamFilter /> : null}</div>

     <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
      <IonItem
       button
       onClick={() => {
        setAnchorEl(null);
        setFilter("all");
       }}
      >
       <IonLabel style={{ fontFamily: `${fon}` }}> Alphabetical</IonLabel>
      </IonItem>
      <IonItem
       button
       onClick={() => {
        setAnchorEl(null);
        setFilter("authors");
       }}
      >
       <IonLabel style={{ fontFamily: `${fon}` }}> Authors</IonLabel>
      </IonItem>
      <IonItem
       button
       onClick={() => {
        setAnchorEl(null);
        setFilter("temple");
       }}
      >
       <IonLabel style={{ fontFamily: `${fon}` }}>Temple Songs</IonLabel>
      </IonItem>
      <IonItem
       button
       onClick={() => {
        setAnchorEl(null);
        setFilter("pranama");
       }}
      >
       <IonLabel style={{ fontFamily: `${fon}` }}>Pranama Mantras </IonLabel>
      </IonItem>
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
     </Menu>

     <IonToolbar className="tab" color={clr ? "warning" : "primary"}>
      <IonSegment value="default">
       <IonSegmentButton value="default" onClick={() => history.push("/iskcon")}>
        <QueueMusicSharp />
       </IonSegmentButton>
       <IonSegmentButton onClick={() => history.push("/topics")}>
        <MenuBookSharp />
       </IonSegmentButton>
       <IonSegmentButton onClick={() => history.push("/playlist")}>
        <LibraryMusicSharp />
       </IonSegmentButton>
       <IonSegmentButton onClick={() => history.push("/bookmarks")}>
        <CollectionsBookmarkSharp />
       </IonSegmentButton>
      </IonSegment>
     </IonToolbar>
    </Route>
    <Route path={`${path}/songs/:ind`}>
     <Csong value={[file, setFile]} />
    </Route>
    <Route path={`${path}/menu/:id`}>
     <Tsub />
    </Route>
    <Route path={`${path}/about`}>
     <About />
    </Route>
    <Route path={`${path}/settings`}>
     <Settings />
    </Route>
    <Route path={`${path}/readme`}>
     <Readme />
    </Route>
    <Route path={`${path}/sb`}>
     <SB />
    </Route>
   </Switch>
   {location.pathname.indexOf("songs") === -1 ? <div style={{ height: "56px" }}></div> : null}
  </div>
 );
}

export default Csub;
