import React, { useContext, useState, useEffect } from "react";
import { Colour, FontType } from "../global";
import { IonItem, IonToolbar, IonItemDivider, IonLabel, IonSegment, IonSegmentButton } from "@ionic/react";
import { AnimatePresence, motion } from "framer-motion";

import { Storage } from "@capacitor/storage";
import { QueueMusicSharp, MenuBookSharp } from "@mui/icons-material";

import { Switch, Route, useLocation, useRouteMatch, useHistory } from "react-router-dom";
import SBP from "./sbsong";
import { AutoStoriesSharp, PlayLessonSharp } from "@mui/icons-material";
import SP from "../../sp.png";
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
  }, 500);
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

 return (
  <AnimatePresence onExitComplete>
   <Switch location={location}>
    <Route exact path={path}>
     <div style={{ height: "58px" }}></div>
     <IonToolbar color={clr ? "warning" : "primary"} className="ionhead">
      <IonLabel style={{ marginLeft: "10px", fontFamily: `${fon}` }}> Prayers from Srimad Bhagavatam</IonLabel>
     </IonToolbar>
     <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ type: "linear", duration: 1 }}>
      {content.chap.length !== 0
       ? content.chap.map((part, i1) => {
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
               <IonLabel style={{ fontFamily: `${fon}` }}>
                <h2>{td.name.slice(0, td.name.indexOf("(SB"))}</h2>
                <p style={{ fontSize: "11px" }}>{td.name.slice(td.name.indexOf("(SB"))}</p>
               </IonLabel>
              </IonItem>
             );
            })}
           </div>
          );
         })
       : null}
     </motion.div>
    </Route>
    <Route path={`${path}/:ind`}>
     <SBP SBbook={content} />
    </Route>
   </Switch>
   <div style={{ height: "56px" }}></div>
   <IonToolbar className="tab" color={clr ? "warning" : "primary"}>
    <IonSegment value="default">
     <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/iskcon")}>
      <QueueMusicSharp />
     </IonSegmentButton>
     <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/topics")}>
      <MenuBookSharp />
     </IonSegmentButton>
     <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/sp")}>
      <img src={SP} style={{ height: "40px" }} />
     </IonSegmentButton>
     <IonSegmentButton value="default" style={{ minWidth: 0 }} onClick={() => history.push("/sb")}>
      <AutoStoriesSharp />
     </IonSegmentButton>
     <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/bookmarks")}>
      <PlayLessonSharp />
     </IonSegmentButton>
    </IonSegment>
   </IonToolbar>
  </AnimatePresence>
 );
}

export default SB;
