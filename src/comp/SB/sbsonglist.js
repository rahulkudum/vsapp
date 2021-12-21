import React, { useContext, useState, useRef, useEffect } from "react";
import { Colour, FontType } from "../global";
import { IonItem, IonToolbar, IonItemDivider, IonLabel, IonButtons, IonButton, IonNote, IonSegment, IonSegmentButton } from "@ionic/react";

import { Storage } from "@capacitor/storage";
import { ArrowBackSharp, QueueMusicSharp, MenuBookSharp, LibraryMusicSharp, CollectionsBookmarkSharp } from "@material-ui/icons";

import { Switch, Route, useLocation, useRouteMatch, useHistory } from "react-router-dom";
import SBP from "./sbsong";

function SB() {
 let { path, url } = useRouteMatch();

 let history = useHistory();
 let location = useLocation();
 const [content, setContent] = useState({ chap: [], inside: "" });
 let content2;

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

 const [spos, setSpos] = useState(0);

 useEffect(() => {
  setTimeout(function () {
   if (location.pathname === url) window.scrollTo(0, spos);
  }, 100);
 }, [location]);

 async function getItem(key) {
  const valu = await Storage.get({ key: key });

  return valu.value;
 }

 useEffect(() => {
  getItem("SBbook").then((res) => {
   content2 = JSON.parse(res);
   setContent(content2);
  });
 }, []);

 if (content.chap.length !== 0) {
  return (
   <>
    <Switch location={location}>
     <Route exact path={path}>
      <div style={{ height: "58px" }}></div>
      <IonToolbar color={clr ? "warning" : "primary"} className="ionhead">
       <IonButtons slot="start" onClick={() => history.goBack()}>
        <IonButton>
         <ArrowBackSharp />
        </IonButton>
       </IonButtons>
       <IonLabel style={{ fontFamily: `${fon}` }}> Prayers from Srimad Bhagavatam</IonLabel>
      </IonToolbar>
      {content.chap.map((part, i1) => {
       return (
        <div>
         <IonItemDivider style={{ backgroundColor: `${color2}`, color: `${color3}`, fontSize: "16px" }}>
          <IonLabel style={{ fontFamily: `${fon}` }}>{part.name}</IonLabel>
         </IonItemDivider>

         {content.chap[i1].song.map((td, i2) => {
          return (
           <IonItem
            color={clr}
            button
            onClick={() => {
             setSpos(window.scrollY);
             history.push(`${url}/${i1}_${i2}`);
            }}
           >
            <IonLabel style={{ fontSize: "14px", fontFamily: `${fon}` }}>{td.name.slice(0, td.name.indexOf("(SB"))}</IonLabel>
            <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
             {td.name.slice(td.name.indexOf("(SB"))}
            </IonNote>
           </IonItem>
          );
         })}
        </div>
       );
      })}
     </Route>
     <Route path={`${path}/:ind`}>
      <SBP SBbook={content} />
     </Route>
    </Switch>
    <IonToolbar className="tab" color={clr ? "warning" : "primary"}>
     <IonSegment>
      <IonSegmentButton onClick={() => history.push("/iskcon")}>
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
   </>
  );
 } else {
  return null;
 }
}

export default SB;
