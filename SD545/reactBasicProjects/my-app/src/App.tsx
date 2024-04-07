import React from 'react';

import './App.css';
import ContentCard from './contentCard/ContentCard';
import JockComponent from './jockComponent/Joke';
import MappingComponent from './arrayComp/Maping';
import { jokesData } from './data/JokeData';
import Calculater from './calculater/calculater';


function App() {

  
const nums=[1,2,3,4,5,6,7,4,8,8,8,8,]
const doubled =nums.map(function(num){return num*2})
// console.log(doubled);
const jockComponents= jokesData.map(joke=> <JockComponent key={joke.id} question={joke.quastion} punchLine={joke.punchLine}/>);

  return (
  <div>

    {doubled.map(num=>num*2)}

    <ContentCard
    name="mr flunskey"
    imgUrl='http:/placekitten.com/400/200'
    phone='202 -202-202'
    email='flunkey@gmail.com' />
    <ContentCard
       name="mr maima"
       imgUrl='http:/placekitten.com/400/200'
       phone='202 -202-202'
       email='flunkey@gmail.com'/>
    <ContentCard
       name="mr chunguan"
       imgUrl='https://unsplash.com/photos/a-tall-building-with-a-sky-background-JF5SChGtuZQ'
       phone='202 -202-202'
       email='flunkey@gmail.com'/>




       <MappingComponent />
       

  </div>
  );
}

export default App;
