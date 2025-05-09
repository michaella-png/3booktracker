"use client";
import { useState, useEffect, ChangeEvent } from "react";
import uploadData from "src/app/api/upload-stuff/upload";
import { useRouter } from "next/navigation";
import CollectionPage from "src/app/collectionBtn";
import HomePage from "src/app/homeBtn";

type ReturnData = {
  message: string;
  error?: string;
};

export default function Page() {
  /*const [title, setTitle] = useState("");
  const [content, setContent] = useState("");*/
  const [bookTitle, setbookTitle] = useState('');
  const [author, setauthor] = useState('');
  const [isbn, setisbn] = useState('');
  const [notes, setnotes] = useState('');
  const router = useRouter();

  useEffect(() => {
    // This hook will run after the component is mounted on the client side
    // Any code that interacts with the browser (e.g., navigation, DOM manipulation) should go here
  }, []); // Empty dependency array ensures it runs only once, after initial render

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await uploadData(bookTitle, author, isbn, notes);
    console.log(result); // Handle the result as needed
    router.push("/"); // Redirect to the home page after submission, not needed but good to have as example
  };

/*export default function Page () {
  const [text, setText] = useState<string>(""); // To track the input text
  const [loading, setLoading] = useState<boolean>(false); // To handle loading state
  const [error, setError] = useState<string | null>(null); // To show any error messages
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // To show success message
  
  const [bookTitle, setInput1] = useState('');
  const [author, setInput2] = useState('');
  const [isbn, setInput3] = useState('');
  const [notes, setInput4] = useState('');
  //const [image, setImage] = useState<File | null>(null);
  //const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => 
      (event: React.ChangeEvent<HTMLInputElement>) => {
          setter(event.target.value);
      };

  /*const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0] || null;
      setImage(file);
      if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
              setImagePreview(reader.result as string);
          };
          reader.readAsDataURL(file);
      } else {
          setImagePreview(null);
      }   
  */

/*
  const ImageUpload: React.FC = () => {
    // Use the useState hook to manage the selected image
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
  
    // Handle the change event for the file input
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.files && event.target.files[0]) {
        setSelectedImage(event.target.files[0]);
      }
    };
  }
*/

  return (
    <main className="font-mono">
      <div className="flex-col bg-bgcolor flex min-h-screen">
        <h1 className=" mb-4"> Upload Book</h1>
        <div className="flex space-x-6 text-textcolor">
        <HomePage></HomePage>
        <CollectionPage></CollectionPage>
        </div>
        
        <div className="w-full bg-bgcolor">
          <form onSubmit={handleSubmit}>
            <input style={{ borderRadius: '5px'}} className="margin-elm" type="text" value={bookTitle} onChange={(e) => setbookTitle(e.target.value)} placeholder=" Title" required/>
            <input style={{ borderRadius: '5px'}} className="margin-elm" type="text" value={author} onChange={(e) => setauthor(e.target.value)} placeholder=" Author" required/>
            <input style={{ borderRadius: '5px'}} className="margin-elm" type="text" value={isbn} onChange={(e) => setisbn(e.target.value)} placeholder=" ISBN" required/>
            <input style={{ borderRadius: '5px'}} className="margin-elm" type="text" value={notes} onChange={(e) => setnotes(e.target.value)} placeholder=" Notes"/>
            <button style={{ borderRadius: '5px'}} className="margin-elm text-[#ffffff]" type="submit">Upload</button>
          </form> 
        </div>
        </div>
        </main>
       )
      }; 
  






  {/*return (
    <main>
    <h1>Upload Book</h1>
    <input type="text" className="card rounded-box grid h-20 flex-grow place-items-center" placeholder="Title..."/>
    <input type="text" className="card rounded-box grid h-20 flex-grow place-items-center" placeholder="Author..."/>
    <input type="text" className="card rounded-box grid h-20 flex-grow place-items-center" placeholder="ISBN..."/>
    <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Owned   </span>
    <input type="radio" name="radio-10" className="radio checked:bg-red-500" defaultChecked />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">To Buy   </span>
    <input type="radio" name="radio-10" className="radio checked:bg-blue-500" defaultChecked />
  </label>
</div>
    <input type="text" className="card rounded-box grid h-20 flex-grow place-items-center" placeholder="Notes..."/>
    <div>
    <button>Submit ✓</button>
    </div>
    </main>
    );*/}
