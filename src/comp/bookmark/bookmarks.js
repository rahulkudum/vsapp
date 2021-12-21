import React, { useContext, useState } from "react";
import { BookMark, Colour, FontType } from "../global";
import { IonItem, IonButton, IonLabel, IonToolbar, IonButtons, IonCheckbox, IonSegment, IonSegmentButton } from "@ionic/react";
import { IndeterminateCheckBoxOutlined } from "@material-ui/icons";
import { LibraryMusicSharp, CollectionsBookmarkSharp, QueueMusicSharp, MenuBookSharp } from "@material-ui/icons";
import { Switch, Route, useLocation, useRouteMatch, useHistory } from "react-router-dom";
import Bsub from "./bsub";
import { useLocal } from "../lshooks";
import { Switch as Switchbtn } from "@material-ui/core";

function Bookmarks() {
 let { path, url } = useRouteMatch();
 const [bookMark, dispatch2] = useContext(BookMark);
 const [select, setSelect] = useState(false);
 const [bplaySwitch, setBplaySwitch] = useLocal("bplaySwitch", true);

 let history = useHistory();
 let location = useLocation();

 const [clr, setClr] = useContext(Colour);
 let color = "";
 if (clr) color = "white";

 const [font, setFont] = useContext(FontType);

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
        <IonLabel style={{ marginLeft: "10px", fontFamily: `${fon}` }}>Bookmarks</IonLabel>
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
      <IonItem color={clr}>
       <IonLabel>Autoplay Bookmark Songs </IonLabel>
       <Switchbtn color="primary" checked={bplaySwitch} onChange={() => setBplaySwitch(!bplaySwitch)} />
      </IonItem>

      {bookMark.length === 0 ? <p style={{ textAlign: "center", color: `${color}`, fontFamily: `${fon}` }}>Please Bookmark a Song to read it here</p> : null}
      {bookMark.map((ele, i) => {
       return (
        <IonItem
         color={clr}
         onClick={() => {
          if (!select) history.push(`${url}/${i}`);
         }}
        >
         <IonLabel style={{ fontFamily: `${fon}` }}>{ele.name} </IonLabel>

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
     <Bsub value={bplaySwitch} />
    </Route>
   </Switch>
   <IonToolbar className="tab" color={clr ? "warning" : "primary"}>
    <IonSegment value="default">
     <IonSegmentButton onClick={() => history.push("/iskcon")}>
      <QueueMusicSharp />
     </IonSegmentButton>
     <IonSegmentButton onClick={() => history.push("/topics")}>
      <MenuBookSharp />
     </IonSegmentButton>
     <IonSegmentButton onClick={() => history.push("/playlist")}>
      <LibraryMusicSharp />
     </IonSegmentButton>
     <IonSegmentButton value="default" onClick={() => history.push("/bookmarks")}>
      <CollectionsBookmarkSharp />
     </IonSegmentButton>
    </IonSegment>
   </IonToolbar>
  </div>
 );
}

export default Bookmarks;
