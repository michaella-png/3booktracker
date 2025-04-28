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

          <img className= "" src="https://clipartcraft.com/images/books-clipart-transparent-background-2.png"
          alt="book stack"/>
        
         <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
        Welcome to StoryStack! Track the books you read, stack up your stories, and watch your library row! 
        Whether you're a casual reader or a dedicated bookworm, StoryStack helps you keep your reading journey
        organized-all in one simple, cozy place. Add thoughts, mark your progress, and rediscover your favorties anytime.
        </div>
        
      </div>
    </main>
  );
}