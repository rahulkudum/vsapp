import React, { useContext, useState } from "react";
import { BookMark, Colour, FontType, Hindit } from "../global";
import { IonItem, IonButton, IonLabel, IonToolbar, IonButtons, IonCheckbox, IonSegment, IonSegmentButton } from "@ionic/react";
import { IndeterminateCheckBoxOutlined } from "@mui/icons-material";
import { QueueMusicSharp, MenuBookSharp } from "@mui/icons-material";
import { Switch, Route, useLocation, useRouteMatch, useHistory } from "react-router-dom";
import Bsub from "./bsub";
import { AutoStoriesSharp, PlayLessonSharp, BookmarkAdd, PlaylistPlaySharp } from "@mui/icons-material";
import SP from "../../sp.png";

function Bookmarks() {
 let { path, url } = useRouteMatch();
 const [bookMark, dispatch2] = useContext(BookMark);
 const [select, setSelect] = useState(false);

 let history = useHistory();
 let location = useLocation();

 const [clr, setClr] = useContext(Colour);
 let color = "";
 if (clr) color = "white";

 const [font, setFont] = useContext(FontType);
 const [hindit, setHindi] = useContext(Hindit);

 let fon;
 if (!font) fon = "Calibri";
 else fon = "Times New Roman";

 return (
  <div>
   <Switch location={location}>
    <Route exact path={path}>
     <div>
      <IonToolbar className="ionhead" color={clr ? "warning" : "primary"}>
       <IonButtons slot="start">
        <IonLabel style={{ marginLeft: "10px", fontFamily: `${fon}` }}>{hindit ? "बुकमार्क" : "Bookmarks"}</IonLabel>
       </IonButtons>

       {select ? (
        <IonButtons
         style={{ margin: "8px" }}
         slot="end"
         onClick={() => {
          dispatch2({ type: "delfold" });
         }}
        >
         <IonLabel style={{ fontFamily: `${fon}` }}>Remove</IonLabel>
        </IonButtons>
       ) : (
        <p></p>
       )}

       {!select ? (
        <IonButtons
         onClick={() => {
          setSelect(true);
         }}
         slot="end"
        >
         <IonButton>
          <IndeterminateCheckBoxOutlined />
         </IonButton>
        </IonButtons>
       ) : (
        <p></p>
       )}

       {select ? (
        <IonButtons
         onClick={() => {
          bookMark.map((ele) => {
           ele.isChecked = false;
          });

          setSelect(false);
         }}
         slot="end"
        >
         <IonLabel style={{ fontFamily: `${fon}` }}>Done</IonLabel>
        </IonButtons>
       ) : (
        <p></p>
       )}
      </IonToolbar>
      <div style={{ height: "58px" }}></div>

      {bookMark.length === 0 ? (
       <>
        <p style={{ textAlign: "center", color: `${color}`, fontFamily: `${fon}`, margin: "10px" }}>
         You can bookmark a song by clicking <BookmarkAdd /> Icon on the heading toolbar of that song
        </p>
        <br />
        <p style={{ textAlign: "center", color: `${color}`, fontFamily: `${fon}`, margin: "10px" }}>
         You can loop through the audios of songs in a bookmark folder by clicking <PlaylistPlaySharp /> Icon on the right side of a bookmarked song
        </p>
       </>
      ) : null}
      {bookMark.map((ele, i) => {
       return (
        <IonItem
         color={clr}
         onClick={() => {
          if (!select) history.push(`${url}/${i}`);
         }}
        >
         <IonLabel style={{ fontFamily: `${fon}` }}>{ele.name ?? "Default"} </IonLabel>

         {select ? (
          <IonCheckbox
           checked={ele.isChecked}
           onIonChange={(e) => {
            ele.isChecked = e.detail.checked;
           }}
          />
         ) : (
          <p></p>
         )}
        </IonItem>
       );
      })}
     </div>
    </Route>
    <Route path={`${path}/:ind`}>
     <Bsub />
    </Route>
   </Switch>

   <IonToolbar className="tab" color={clr ? "warning" : "primary"}>
    <IonSegment value="default">
     <IonSegmentButton style={{ minWidth: 0 }} onClick={() => history.push("/iskcon")}>
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

     <IonSegmentButton value="default" style={{ minWidth: 0 }} onClick={() => history.push("/bookmarks")}>
      <PlayLessonSharp />
     </IonSegmentButton>
    </IonSegment>
   </IonToolbar>
   <div style={{ height: "56px" }}></div>
  </div>
 );
}

export default Bookmarks;
