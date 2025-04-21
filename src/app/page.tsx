"use client";

import Link from "next/link";
//import MyButton from "./MyButton";
import UploadBook from "./UploadBook";
import CollectionPage from "./collectionBtn";
import { useState, ChangeEvent } from "react";

type ReturnData = {
  message: string;
  error?: string;
};

export default function HomePage() {
  
  return (
    <main className="font-mono">
      <div className="bg-indigo-200 flex">
        <h1 className="text-7xl">StoryStack</h1>
        <UploadBook></UploadBook>
        <CollectionPage></CollectionPage>

        
        
          <img  className= " object-scale-down" src="https://clipartcraft.com/images/books-clipart-transparent-background-2.png"
          alt="book stack" />
         <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
        StoryStack is a free and intuitive web application designed to help book enthusiasts of 
        all ages organize, track, and explore their book collections effortlessly. 
        </div>
        
      </div>
    </main>
  );
}

//id= "dynamicBooks" ????????