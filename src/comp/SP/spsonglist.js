import { IonItem, IonLabel, IonButtons, IonButton, IonToolbar, IonSegmentButton, IonSegment } from "@ionic/react";
import React, { useContext, useState, useEffect } from "react";
import { Storage } from "@capacitor/storage";
import { Colour, FontType } from "../global";
import Tsong from "./spsong";
import { Switch, Route, useLocation, useRouteMatch, useHistory } from "react-router-dom";

import { ArrowBackSharp, QueueMusicSharp, MenuBookSharp, LibraryMusicSharp, CollectionsBookmarkSharp } from "@material-ui/icons";
import { Insomnia } from "@awesome-cordova-plugins/insomnia";

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
  }, 100);
 }, [location]);
 const [clr, setClr] = useContext(Colour);
 const [font, setFont] = useContext(FontType);
 let fon;
 if (!font) fon = "Calibri";
 else fon = "Times New Roman";
 if (piskcon.songs.length !== 0) {
  return (
   <>
    <Switch location={location}>
     <Route exact path={path}>
      <IonToolbar color={clr ? "warning" : "primary"} className="ionhead">
       <IonButtons slot="start" onClick={() => history.goBack()}>
        <IonButton>
         <ArrowBackSharp />
        </IonButton>
       </IonButtons>
       <IonLabel style={{ fontFamily: `${fon}` }}>Bhaktivedanta Music & Purports</IonLabel>
      </IonToolbar>
      <div style={{ height: "34px" }}></div>
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
     </Route>
     <Route path={`${path}/:ind`}>
      <Tsong value={[piskcon, setPiskcon]} />
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
  return <p>Not Compatible</p>;
 }
}
