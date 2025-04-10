/*export default function Page () {
    return <h1>This is the collection page</h1>
}*/


import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export default async function main() {
  const data = await db.query.posts.findMany({
    columns: {
      bookTitle: true,
      author: true,
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
 
 return (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {data.map((data,index) => (
      <div key={index} className="card w-96 bg-base-100 shadow-sm">
        <div className="card-body">
          <h2 className="card-title">{data.bookTitle}</h2>
          <p>{data.author}</p>
          <div className="justify-end card-actions">
          </div>
        </div>
      </div>
    ))}
  </div>
    );
  }

