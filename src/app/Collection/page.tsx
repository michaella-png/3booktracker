/*export default function Page () {
    return <h1>This is the collection page</h1>
}*/


import { db } from "~/server/db";
import { posts } from "~/server/db/schema";
import UploadBook from "src/app/UploadBook";
import HomePage from "src/app/homeBtn";

export default async function main() {
  const data = await db.query.posts.findMany({
    columns: {
      bookTitle: true,
      author: true,
      notes: true,
      isbn: true,
    },
  })
  
  //this commented code below is to show you how to straight up map something as output on your page, unformatted
  //this is the concept that is used below along with the daisyUI cards to output all of your data in your schema / array
    /*return (<div>
        {data.map((data,index) => (
          <div key={index}>{data.title} - {data.content}</div>
        ))}
      </div>)*/


  //this is how to format it with daisyUI cards, you can change the classes to whatever you want, just remember to use tailwind classes
  //this is a grid layout, you can change the grid-cols-1 to whatever you want, just remember to use tailwind classes
  //the biggest change done here is basically you need to wrap all of the  tailwind card stuff with the map function
  // This forces the cards to be generated for each item in the arrayinstead of just one card for the whole array.
 
 return (
    <div className="flex-col space-y-4 bg-bgcolor flex">
      <h1 className="bg-[#ccb481] text-7xl pl-4 justify-center"> Collection Page</h1>
      <div className="flex space-x-6 text-textcolor">
      <HomePage></HomePage>
      <UploadBook></UploadBook>
      </div>
    
    
    <div className="text-[#38200a] w-full px-10 py-4 bg-bgcolor grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    {data.map((data,index) => (
      <div key={index} className="card bg-[#ccb481] rounded-lg w-96 shadow-sm p-4 m-2">
        <div className="card-body text-lg">
        <p className="card-title text-3xl">{data.bookTitle}</p>
        <p>{data.author}</p>
        <p>Notes: {data.notes}</p>
        <p>ISBN: {data.isbn}</p>
        <div className="card-actions">
        </div>
        </div>
      </div>
    ))}
  </div>
  </div>
    );
  }
