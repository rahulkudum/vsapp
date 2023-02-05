import React, { useState, useContext, useEffect } from "react";
import Song from "./song";
import { BookContent, Colour, FontType } from "../global";
import { Switch, Route, useHistory, useParams, useRouteMatch, useLocation } from "react-router-dom";
import { IonItem, IonLabel, IonToolbar, IonButtons, IonButton } from "@ionic/react";
import { ArrowBackSharp } from "@mui/icons-material";
import { AnimatePresence, motion } from "framer-motion";

function Sub(props) {
 let { songid } = useParams();
 let { path, url } = useRouteMatch();
 let location = useLocation();
 let id = Number(songid);
 let history = useHistory();
 const [clr, setClr] = useContext(Colour);
 const content = useContext(BookContent);
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
       <IonLabel style={{ fontFamily: `${fon}` }}>
        {content[props.title].chap[id].name.indexOf("-") !== -1
         ? content[props.title].chap[id].name.slice(0, content[props.title].chap[id].name.indexOf("-"))
         : content[props.title].chap[id].name}
       </IonLabel>
      </IonButtons>
     </IonToolbar>
     <motion.div exit={{ opacity: 0 }} animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ type: "linear", duration: 1 }}>
      <div style={{ height: "58px" }}></div>
      {content[props.title].chap[id].song.map((td, i) => {
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
    <Route path={`${path}/:songid`}>
     <Song i1={props.title} i2={id} />
    </Route>
   </Switch>
  </AnimatePresence>
 );
}

export default Sub;
