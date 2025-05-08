"use client";

import Link from "next/link";
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
      
      <div className="flex-col space-y-4 bg-bgcolor flex">
        <h1 className="text-7xl">StoryStack</h1>
        <div className="flex space-x-6 text-textcolor">
        <UploadBook></UploadBook>
        <CollectionPage></CollectionPage>
        </div>

        <div className="w-full bg-bgcolor py-10">
        <div className="home-content flex flex-col md:flex-row md:items-start  space-y-4 md:space-y-0 w-full  px-10 space-x-20  items-center text-textcolor">
          <img src="https://clipartcraft.com/images/books-clipart-transparent-background-2.png"
          alt="book stack"/>
          <div className="card max-w-md text-left bg-bgcolor rounded-box grid h-20 flex-grow ">
          <p>Welcome to StoryStack! Track the books you read, stack up your stories, and watch your library grow! 
        Whether you're a casual reader or a dedicated bookworm, StoryStack helps you keep your reading journey
        organized-all in one simple, cozy place. Add thoughts, mark your progress, and rediscover your favorites anytime.
          </p>
          </div>
        </div>
        </div>
      </div>
    </main>
  );
}