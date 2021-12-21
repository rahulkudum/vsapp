import React, { useContext } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { IonItem, IonLabel } from "@ionic/react";

import { Colour, FontType, IskconContent, SearchBook } from "../../global";

function TempleFilter() {
 let history = useHistory();
 let { path, url } = useRouteMatch();
 const [font, setFont] = useContext(FontType);
 let fon;
 if (!font) fon = "Calibri";
 else fon = "Times New Roman";
 const [clr, setClr] = useContext(Colour);

 return (
  <div>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Samsara Davanala Lidha Loka_Songs%20of%20Vaishnava%20Acaryas_0_18`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Mangal Arati</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Prema Dhvani Prayers_`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Prema Dhvani Prayers</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Namaste Narasimhaya_Songs%20of%20Vaishnava%20Acaryas_3_13`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Narasimha Aarati</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Namo Namah Tulasi Krsna Preyasi_Songs%20of%20Vaishnava%20Acaryas_3_12`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Tulasi Arati</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Ceto Darpana Marjanam_Songs%20of%20Vaishnava%20Acaryas_0_20`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Sri Sri Shikshashtakam</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Ten Offenses_`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Ten Offenses</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Govindam Prayers_`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Govindam Prayers</IonLabel>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Sri Guru Carana Padma_Songs%20of%20Vaishnava%20Acaryas_2_6`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Guru Puja</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Jaya Radha Madhava_Songs%20of%20Vaishnava%20Acaryas_1_11`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Jaya Radha-Madhava</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Mangalacarana (Full)_`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Mangalacarana (Full)</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Jaya Jaya Goracander Arotik_Songs%20of%20Vaishnava%20Acaryas_1_16`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Gaura Arati</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Hari Haraye Namah Krsna Yadavaya_Songs%20of%20Vaishnava%20Acaryas_2_2`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Nama Sankirtana</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Vibhavari Sesa_Songs%20of%20Vaishnava%20Acaryas_1_19`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Vibhavari Sesa</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Yasomati Nandana_Songs%20of%20Vaishnava%20Acaryas_1_17`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Sri Nama-Kirtana</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Bhaja Bhakata Vatsala_Songs%20of%20Vaishnava%20Acaryas_1_15`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Bhoga Arati</IonLabel>
   </IonItem>

   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Prasadam Seva_Songs%20of%20Vaishnava%20Acaryas_1_8`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Prasadam Seva</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Namamisvaram Saccidananda Rupam_Songs%20of%20Vaishnava%20Acaryas_3_5`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Damodara Ashtakam</IonLabel>
   </IonItem>
   <IonItem color={clr} button onClick={() => history.push(`${url}/songs/Krsnotkirtana Gana Nartana_Songs%20of%20Vaishnava%20Acaryas_0_19`)}>
    <IonLabel style={{ fontFamily: `${fon}` }}>Sri Sri Sad Goswami Ashtaka</IonLabel>
   </IonItem>
  </div>
 );
}

export default TempleFilter;
