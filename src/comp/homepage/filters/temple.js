import React, { useContext } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { IonItem, IonLabel } from "@ionic/react";

import { Colour, FontType, Hindit } from "../../global";

function TempleFilter(props) {
 let history = useHistory();
 let { path, url } = useRouteMatch();
 const [font, setFont] = useContext(FontType);
 let fon;
 if (!font) fon = "Calibri";
 else fon = "Times New Roman";
 const [clr, setClr] = useContext(Colour);
 const [hindit, setHindi] = useContext(Hindit);
 const [spos, setSpos] = props.value;
 return (
  <div>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Samsara Davanala Lidha Loka_Songs%20of%20Vaishnava%20Acaryas_0_18`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "संसार दावानल" : "Mangal Arati"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Prema Dhvani Prayers_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "जय ॐ विष्णुपाद" : "Prema Dhvani Prayers"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Namaste Narasimhaya_Songs%20of%20Vaishnava%20Acaryas_3_13`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "नमस्ते नृसिंहाय" : "Narasimha Aarati"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Namo Namah Tulasi Krsna Preyasi_Songs%20of%20Vaishnava%20Acaryas_3_12`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "नमो नमः तुलसी कृष्णप्रेयसी" : "Tulasi Arati"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Ceto Darpana Marjanam_Songs%20of%20Vaishnava%20Acaryas_0_20`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "चेतोदर्पणमार्जनं" : "Sri Sri Shikshashtakam"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Ten Offenses_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "भगवान के नाम जप में होने वाले दस अपराध" : "The Ten Offenses to the Holy Name"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Govindam Prayers_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "गोविन्दमादिपुरुषं" : "Govindam Prayers"}</IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Sri Guru Carana Padma_Songs%20of%20Vaishnava%20Acaryas_2_6`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "श्रीगुरुचरण पद्म केवल भकति-सद्म" : "Guru Puja"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Jaya Radha Madhava_Songs%20of%20Vaishnava%20Acaryas_1_11`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "जय राधा माधव" : "Jaya Radha Madhava"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Mangalacarana (Full)_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "प्रणाम मंत्र" : "Mangalacarana (Full)"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Jaya Jaya Goracander Arotik_Songs%20of%20Vaishnava%20Acaryas_1_16`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "जय जय गोराचाँदेर आरतिक शोभा" : "Gaura Arati"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Hari Haraye Namah Krsna Yadavaya_Songs%20of%20Vaishnava%20Acaryas_2_2`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "हरि हरये नमः" : "Hari Haraye Namah Krsna"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Vibhavari Sesa_Songs%20of%20Vaishnava%20Acaryas_1_19`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "विभावरी शेष आलोक" : "Vibhavari Sesa"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Yasomati Nandana_Songs%20of%20Vaishnava%20Acaryas_1_17`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "यशोमती-नन्दन" : "Yasomati Nandana"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Bhaja Bhakata Vatsala_Songs%20of%20Vaishnava%20Acaryas_1_15`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "भज भकतवत्सल" : "Bhoga Arati"}</IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Prasadam Seva_Songs%20of%20Vaishnava%20Acaryas_1_8`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "महाप्रसादे गोविन्दे" : "Prasadam Honoring Prayers"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Namamisvaram Saccidananda Rupam_Songs%20of%20Vaishnava%20Acaryas_3_5`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "नमामीश्वरं सच्चिदानंदरूपं" : "Damodara Ashtakam"}</IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Krsnotkirtana Gana Nartana_Songs%20of%20Vaishnava%20Acaryas_0_19`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>{hindit ? "कृष्णोत्कीर्तन गान नर्तन परौ" : "Sri Sri Sad Goswami Ashtaka"}</IonLabel>
   </IonItem>
  </div>
 );
}

export default TempleFilter;
