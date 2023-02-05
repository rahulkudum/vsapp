import React, { useContext } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { IonItem, IonLabel } from "@ionic/react";

import { Colour, FontType } from "../../global";

function PranamaFilter(props) {
 let history = useHistory();
 let { path, url } = useRouteMatch();
 const [font, setFont] = useContext(FontType);
 let fon;
 if (!font) fon = "Calibri";
 else fon = "Times New Roman";
 const [clr, setClr] = useContext(Colour);
 const [spos, setSpos] = props.value;

 return (
  <div>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Mangalacarana (Full)_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Mangalacarana (Full)</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Sri Guru Pranama_Songs%20of%20Vaishnava%20Acaryas_0_0`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Sri Guru Pranama</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Sri Rupa Pranama_Songs%20of%20Vaishnava%20Acaryas_0_1`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Sri Rupa Pranama</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Mangalacaran_Songs%20of%20Vaishnava%20Acaryas_0_2`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Mangalacarana</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Srila Prabhupada Pranati_Songs%20of%20Vaishnava%20Acaryas_0_3`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Srila Prabhupada Pranati</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Srila Bhaktisiddhanta Sarasvati Pranati_Songs%20of%20Vaishnava%20Acaryas_0_4`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Srila Bhaktisiddhanta Sarasvati Pranati</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Srila Gaurakisora Pranati_Songs%20of%20Vaishnava%20Acaryas_0_5`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Srila Gaurakisora Pranati</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Srila Bhaktivinoda Pranati_Songs%20of%20Vaishnava%20Acaryas_0_6`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Srila Bhaktivinoda Pranati</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Srila Jagannatha Pranati_Songs%20of%20Vaishnava%20Acaryas_0_7`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Srila Jagannatha Pranati</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Sri Vaishnava Pranama_Songs%20of%20Vaishnava%20Acaryas_0_8`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Sri Vaishnava Pranama</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Sri Gauranga Pranama_Songs%20of%20Vaishnava%20Acaryas_0_9`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Sri Gauranga Pranama</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Sri Panca-tattva Pranama_Songs%20of%20Vaishnava%20Acaryas_0_10`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Sri Panca-tattva Pranama</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Sri Krishna Pranama_Songs%20of%20Vaishnava%20Acaryas_0_11`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Sri Krishna Pranama</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Sambandhadhideva Pranama_Songs%20of%20Vaishnava%20Acaryas_0_12`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Sambandhadhideva Pranama</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Abhidheyadhideva Pranama_Songs%20of%20Vaishnava%20Acaryas_0_13`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Abhidheyadhideva Pranama</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Prayojanadhideva Pranama_Songs%20of%20Vaishnava%20Acaryas_0_14`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Prayojanadhideva Pranama</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Sri Radha Pranama_Songs%20of%20Vaishnava%20Acaryas_0_15`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Sri Radha Pranama</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Panca-tattva Maha-mantra_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Panca-tattva Maha-mantra</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Hare Krishna Mahamantra_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>Hare Krishna Mahamantra</IonLabel>
   </IonItem>
  </div>
 );
}

export default PranamaFilter;
