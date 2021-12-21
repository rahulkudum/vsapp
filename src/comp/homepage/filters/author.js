import React, { useState, useEffect, useContext } from "react";
import { useRouteMatch, useHistory, useLocation } from "react-router-dom";
import { IonItem, IonLabel, IonNote, IonItemDivider, IonList, IonAccordion, IonAccordionGroup } from "@ionic/react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Colour, FontType, IskconContent } from "../../global";

function AuthorFilter(props) {
 let history = useHistory();
 let { path, url } = useRouteMatch();

 let location = useLocation();
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
 let color4;
 if (clr) color4 = "white";
 else color4 = "black";

 const [iskcon, setIskcon] = useContext(IskconContent);
 const [expand, setExpand] = props.value;
 const [spos, setSpos] = props.value2;

 //  setTimeout(function () {
 //   if (location.pathname === url) window.scrollTo(0, spos);
 //  }, 500);

 return (
  <IonAccordionGroup multiple={true}>
   {iskcon.author.map((item, i) => {
    return (
     <IonAccordion value={item.name}>
      <IonItemDivider
       onClick={() => {
        setExpand((prev) => {
         let dum = [...prev];
         dum[i] = !dum[i];
         return dum;
        });
       }}
       slot="header"
       style={{ backgroundColor: expand[i] ? `${color2}` : `${color}`, color: expand[i] ? `${color3}` : `${color4}`, fontSize: "16px" }}
      >
       <IonLabel style={{ fontFamily: `${fon}` }}>{item.name}</IonLabel>
       <IonNote mode="ios" slot="end">
        <ExpandMoreIcon style={{ marginRight: "20px", color: expand[i] ? `${color3}` : `${color4}` }} />
       </IonNote>
      </IonItemDivider>
      <IonList slot="content" style={{ backgroundColor: `${color3}` }}>
       {item.songs.map((song) => {
        if (!song) return null;
        let nind;
        for (let j in iskcon.songs) {
         if (iskcon.songs[j].name === song) {
          nind = j;
         }
        }
        return (
         <IonItem
          color={clr}
          button
          onClick={() => {
           setSpos(window.scrollY);
           history.push(`${url}/songs/${iskcon.songs[nind].name}_${iskcon.songs[nind].book}`);
          }}
         >
          <IonLabel style={{ fontFamily: `${fon}` }}>{song}</IonLabel>

          {item.name === "Songs by Others" ? (
           <IonNote style={{ fontFamily: `${fon}` }} color={!clr ? "dark" : "light"} mode="ios" slot="end">
            {iskcon.songs[nind].author}
           </IonNote>
          ) : null}
         </IonItem>
        );
       })}
       <hr style={{ margin: 0 }} />
      </IonList>
     </IonAccordion>
    );
   })}
  </IonAccordionGroup>
 );
}

export default AuthorFilter;
