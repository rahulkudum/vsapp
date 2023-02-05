import React, { useContext } from "react";
import { useRouteMatch, useHistory } from "react-router-dom";
import { IonItem, IonLabel } from "@ionic/react";

import { Colour, FontType } from "../../global";

function AstakamFilter(props) {
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
     history.push(`${url}/songs/Samsara Davanala Lidha Loka_Songs%20of%20Vaishnava%20Acaryas_0_18`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Guruvastakam</h2>
     <p style={{ fontSize: "11px" }}>Visvanatha Cakravarti Thakura</p>
    </IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Ceto Darpana Marjanam_Songs%20of%20Vaishnava%20Acaryas_0_20`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Shikshastakam</h2>
     <p style={{ fontSize: "11px" }}>Lord Sri Caitanya Mahaprabhu</p>
    </IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Krsnotkirtana Gana Nartana_Songs%20of%20Vaishnava%20Acaryas_0_19`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Shad Goswami-astakam</h2>
     <p style={{ fontSize: "11px" }}>Srinivasa Acarya</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Huhunkara Garjanadi Aho_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Advaitastakam</h2>
     <p style={{ fontSize: "11px" }}>Sarvabhauma Bhattacarya</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Sarac Candra Bhrantim_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Nityanandastakam</h2>
     <p style={{ fontSize: "11px" }}>Prabodhananda Sarasvati</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Nava Gaura Varam_More%20Songs%20of%20the%20Vaisnava%20Acaryas_34`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Sacisutastakam</h2>
     <p style={{ fontSize: "11px" }}>Sarvabhauma Bhattacarya</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Ujjvala Varana_More%20Songs%20of%20the%20Vaisnava%20Acaryas_47`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Sacitanayastakam</h2>
     <p style={{ fontSize: "11px" }}>Sarvabhauma Bhattacarya</p>
    </IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Ambudanjanendra Nila_More%20Songs%20of%20the%20Vaisnava%20Acaryas_2`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Krsishna Candrastakam</h2>
     <p style={{ fontSize: "11px" }}>Krsnadasa Kaviraja Goswami</p>
    </IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Sucaru Vakrta Mandalam_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Nanda Nandastakam</h2>
     <p style={{ fontSize: "11px" }}>Anonymous</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Kadacit Kalindi Tata Vipina_Songs%20of%20Vaishnava%20Acaryas_3_6`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Jagannathastakam</h2>
     <p style={{ fontSize: "11px" }}>Adi Sankaracarya</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Namamisvaram Saccidananda Rupam_Songs%20of%20Vaishnava%20Acaryas_3_5`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Damodarastakam</h2>
     <p style={{ fontSize: "11px" }}>Satyavrata Muni</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Adharam Madhuram_More%20Songs%20of%20the%20Vaisnava%20Acaryas_0`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Madhurastakam</h2>
     <p style={{ fontSize: "11px" }}>Sri Vallabhacarya</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Vraje Prasiddham Navanita_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Corastakam</h2>
     <p style={{ fontSize: "11px" }}>Bilvamangala Thakura</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Nava Nirada Nindita_More Songs of the Vaisnava Acaryas_35`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Vrajaraja Sutastakam</h2>
     <p style={{ fontSize: "11px" }}>Anonymous</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Pralaya Payodhi Jale_Songs%20of%20Vaishnava%20Acaryas_3_1`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Dasavatara Stotra</h2>
     <p style={{ fontSize: "11px" }}>Jayadeva Goswami</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Kunkumakta Kancanabja_More%20Songs%20of%20the%20Vaisnava%20Acaryas_29`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Radhikastakam</h2>
     <p style={{ fontSize: "11px" }}>Krsnadasa Kaviraja Goswami</p>
    </IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Disi Disi Racayantim_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Radhikastakam</h2>
     <p style={{ fontSize: "11px" }}>Rupa Goswami</p>
    </IonLabel>
   </IonItem>
   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Radhika Sarada Indu Nindimukha_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Radhikastakam</h2>
     <p style={{ fontSize: "11px" }}>Sanatana Goswami</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Munindra Vrnda Vandite_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Sri Radha Krpa Kataksha Stava Raja</h2>
     <p style={{ fontSize: "11px" }}>Lord Siva</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Krsna Prema Mayi Radha_More%20Songs%20of%20the%20Vaisnava%20Acaryas_28`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Yugalastakam</h2>
     <p style={{ fontSize: "11px" }}>Jiva Goswami</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Madhuram Madhurebhyo ‘Pi_More%20Songs%20of%20the%20Vaisnava%20Acaryas_31`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Kevalastakam</h2>
     <p style={{ fontSize: "11px" }}>Nilakanta Goswami</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Gangeya Campeya_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Vrndadevi-astakam</h2>
     <p style={{ fontSize: "11px" }}>Visvanatha Cakravarti Thakura</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Bhratur Antakasya Pattane_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Yamunastakam</h2>
     <p style={{ fontSize: "11px" }}>Visvanatha Cakravarti Thakura</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Devi Suresvari Bhagavati Gange_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Ganga Stotram</h2>
     <p style={{ fontSize: "11px" }}>Adi Sankaracarya</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`${url}/songs/Nija Pati Bhuja_`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Govardhana Vasa Prarthana Dasakam</h2>
     <p style={{ fontSize: "11px" }}>Ragunatha Dasa Goswami</p>
    </IonLabel>
   </IonItem>

   <IonItem
    color={clr}
    button
    onClick={() => {
     setSpos(window.scrollY);
     history.push(`/topics/Stavamrita%20Lahari`);
    }}
   >
    <IonLabel style={{ fontFamily: `${fon}` }}>
     <h2>Stavamrita Lahari</h2>
     <p style={{ fontSize: "11px" }}>Song Book of Ashtakams (Visvanatha Cakravarti Thakura)</p>
    </IonLabel>
   </IonItem>
  </div>
 );
}

export default AstakamFilter;
