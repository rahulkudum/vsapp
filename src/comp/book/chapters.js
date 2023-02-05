import React, { useContext, useState, useEffect } from "react";
import Sub from "./songlist";
import Song from "./song";
import { BookContent, Colour, FontType } from "../global";
import { Switch, Route, useHistory, useParams, useRouteMatch, useLocation } from "react-router-dom";
import { IonItem, IonLabel, IonButtons, IonButton, IonToolbar } from "@ionic/react";
import { ArrowBackSharp } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";

function Part() {
 let { name } = useParams();
 let { path, url } = useRouteMatch();
 let history = useHistory();
 let location = useLocation();
 let songonly = false;

 const [clr, setClr] = useContext(Colour);
 const content = useContext(BookContent);

 let ia;
 for (let i in content) {
  if (content[i].name === name) {
   ia = i;
  }
 }

 const [font, setFont] = useContext(FontType);
 let fon;
 if (!font) fon = "Calibri";
 else fon = "Times New Roman";

 const [spos, setSpos] = useState(0);
 useEffect(() => {
  setTimeout(function () {
   if (location.pathname === url) window.scrollTo(0, spos);
  }, 100);
 }, [location]);

 return (
  <AnimatePresence onExitComplete>
   <Switch location={location}>
    <Route exact path={path}>
     <IonToolbar className="ionhead" color={clr ? "warning" : "primary"}>
      <IonButtons slot="start">
       <IonButton onClick={() => history.goBack()}>
        <ArrowBackSharp />
       </IonButton>
      </IonButtons>
      <IonButtons slot="start">
       <IonLabel style={{ fontFamily: `${fon}` }}>{content[ia].name}</IonLabel>
      </IonButtons>
     </IonToolbar>
     <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ type: "linear", duration: 1 }}>
      <div style={{ height: "58px" }}></div>
      {content[ia].chap.length > 0
       ? content[ia].chap.map((td, i) => {
          function next() {
           setSpos(window.scrollY);
           history.push(`${url}/${i}`);
          }

          if (td.name.indexOf("-") !== -1) {
           let name = td.name.split("-");
           return (
            <IonItem color={clr} button onClick={next}>
             <IonLabel style={{ fontFamily: `${fon}` }}>
              <h2> {name[0]}</h2>
              <p style={{ fontSize: "11px" }}> {name[1]}</p>
             </IonLabel>
            </IonItem>
           );
          }

          return (
           <IonItem color={clr} button onClick={next}>
            <IonLabel style={{ fontFamily: `${fon}` }}>{td.name}</IonLabel>
           </IonItem>
          );
         })
       : content[ia].song.map((td, i) => {
          songonly = true;
          function next() {
           setSpos(window.scrollY);
           history.push(`${url}/${i}`);
          }

          return (
           <IonItem color={clr} button onClick={next}>
            <IonLabel style={{ fontFamily: `${fon}` }}>{td.name}</IonLabel>
           </IonItem>
          );
         })}
      <div style={{ height: "56px" }}></div>
     </motion.div>
    </Route>
    <Route path={`${path}/:songid`}>{songonly ? <Song i1={ia} i2={0} /> : <Sub title={ia} />}</Route>
   </Switch>
  </AnimatePresence>
 );
}

export default Part;
