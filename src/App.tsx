import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {UncontroledOnOff} from "./components/UncontroledOnOff/UncontroledOnOff";
import {UncontroledAccordion} from "./components/UncontroledAccordion/UncontroledAccordion";
import {UncontroledRating} from "./components/UncontroledRating/UncontroledRating";
import {OnOff} from "./components/OnOff/OnOff";

function App() {

   const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
   const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
   const [switchOn, setSwitchOn] = useState(true)

   return (
      <div className={"App"}>

         <OnOff on={switchOn} onChange={setSwitchOn}/>
         <UncontroledOnOff onChange={setSwitchOn}/> {switchOn.toString()}
         {/*<UncontroledAccordion title={"Users"}/>*/}
         {/*<UncontroledRating/>*/}
         {/*<PageTitle title={"This is React App"}/>*/}
         {/*<Accordion title={"Menu"} collapsed={accordionCollapsed} onChange = {() => setAccordionCollapsed(!accordionCollapsed)}/>*/}
         {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
      </div>
   );
}

type PageTitlePropsType = {
   title: string
}

function PageTitle(props: PageTitlePropsType) {
   return (
      <h2>{props.title}</h2>
   );
}

export default App;
