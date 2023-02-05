import { IonItem, IonLabel, IonToolbar, IonSegmentButton, IonSegment } from "@ionic/react";
import React, { useContext, useState, useEffect } from "react";
import { Storage } from "@capacitor/storage";
import { Colour, FontType } from "../global";
import Tsong from "./spsong";
import { Switch, Route, useLocation, useRouteMatch, useHistory } from "react-router-dom";

import { QueueMusicSharp, MenuBookSharp } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";
import { AutoStoriesSharp, PlayLessonSharp } from "@mui/icons-material";
import SP from "../../sp.png";

export default function Tsub() {
 let { path, url } = useRouteMatch();
 let history = useHistory();
 let location = useLocation();

 const [piskcon, setPiskcon] = useState({ scontent: "", songs: [] });
 let piskcon2;
 async function getItem(key) {
  const valu = await Storage.get({ key: key });
  return valu.value;
 }

 useEffect(() => {
  getItem("Psongs").then((res) => {
   piskcon2 = JSON.parse(res);
   setPiskcon(piskcon2);
  });
 }, []);

 const [spos, setSpos] = useState(0);
 useEffect(() => {
  setTimeout(function () {
   if (location.pathname === url) window.scrollTo(0, spos);
  }, 500);
 }, [location]);
 const [clr, setClr] = useContext(Colour);
 const [font, setFont] = useContext(FontType);
 let fon;
 if (!font) fon = "Calibri";
 else fon = "Times New Roman";

 return (
  <AnimatePresence onExitComplete>
   <Switch location={location}>
    <Route exact path={path}>
     <IonToolbar color={clr ? "warning" : "primary"} className="ionhead">
      <IonLabel style={{ marginLeft: "10px", fontFamily: `${fon}` }}>Bhaktivedanta Music & Purports</IonLabel>
     </IonToolbar>
     <div style={{ height: "40px" }}></div>
     <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ type: "linear", duration: 1 }}>
      {piskcon.songs.length !== 0 ? (
       <p style={{ marginBottom: 0 }}>
        {piskcon.songs.map((td, i) => {
         return (
          <IonItem
           color={clr}
           button
           onClick={() => {
            setSpos(window.scrollY);
            history.push(`${url}/${i}`);
           }}
          >
           <IonLabel style={{ fontFamily: `${fon}` }}>{td.name}</IonLabel>
          </IonItem>
         );
        })}
       </p>
      ) : null}
     </motion.div>
    </Route>
    <Route path={`${path}/:ind`}>
     <Tsong value={[piskcon, setPiskcon]} />
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
     <IonSegmentButton value="default" style={{ minWidth: 0 }} onClick={() => history.push("/sp")}>
      <img src={SP} style={{ height: "40px" }} />
     </IonSegmentButton>
     <IonSegmentButton style={{ minWidth: 0 }} value="" onClick={() => history.push("/sb")}>
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
