import React from "react";
import './DisplayList.css'

const list = [
  "second",
  "discrimination",
  "opinion",
  "popular",
  "realize",
  "oven",
  "banquet",
  "basketball",
  "roof",
  "committee"
];

export default function DisplayList(){

  const words = list.map((li) => <li>{li}</li>)

  return <ul className="words-list">{words}</ul>
}