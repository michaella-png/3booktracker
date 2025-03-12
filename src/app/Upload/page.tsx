"use client";

import { useState, ChangeEvent } from "react";
/*
export default function Page (){
  return <main>
    <h1>burger</h1>
  </main>
  console.log("this works");
<p>"Testing123"</p>
}
*/

type ReturnData = {
  message: string;
  error?: string;
};

export default function Page () {
  const [text, setText] = useState<string>(""); // To track the input text
  const [loading, setLoading] = useState<boolean>(false); // To handle loading state
  const [error, setError] = useState<string | null>(null); // To show any error messages
  const [successMessage, setSuccessMessage] = useState<string | null>(null); // To show success message
  
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');
  const [input4, setInput4] = useState('');
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
  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleButtonClick = async () => {
    if (text.trim() === "") {
      alert("Please enter some text.");
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await fetch("/api/upload-stuff", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  // Use JSON for request body
        },
        body: JSON.stringify({
          content: text,
        }),
      });

      const data = await response.json() as ReturnData;

      if (response.ok) {
        setSuccessMessage(data.message); // Show success message
        setText(""); // Clear input
        setError(null); // Reset error state
      } else {
        setError(data.error || "An unknown error occurred");
      }
    } catch (error) {
      console.error("Error uploading text:", error);
      setError("An error occurred while uploading the text.");
    } finally {
      setLoading(false); // End loading state
    }
  }

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
    <main className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center mb-4">Upload Book</h1>
        
        {/* Display any error message */}
        {error && <div className="alert alert-error mb-4"><span>{error}</span></div>}

        {/* Display success message */}
        {successMessage && <div className="alert alert-success mb-4"><span>{successMessage}</span></div>}
        
        
        <div>
            <input type="text" value={input1} onChange={handleInputChange(setInput1)} placeholder="Input 1"/>
            <input type="text" value={input2} onChange={handleInputChange(setInput2)} placeholder="Input 2"/>
            <input type="text" value={input3} onChange={handleInputChange(setInput3)} placeholder="Input 3"/>
            <input type="text" value={input4} onChange={handleInputChange(setInput4)} placeholder="Input 4"/>
            {/*
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {imagePreview && <img src={imagePreview} alt="Selected Image" />}
            */}
        </div>
        

        {/*}
        <input 
        type="file" 
        accept="image/*" 
        onChange={handleImageChange} 
        />

         {selectedImage && (
        <div>
          <h4>Selected Image:</h4>
          <img 
            src={URL.createObjectURL(selectedImage)} 
            alt="Selected" 
            style={{ width: '200px', height: 'auto' }} 
          />
        </div>
         )}

        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Book Title"
          className="input input-bordered w-full mb-4"
        />

  
        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Author"
          className="input input-bordered w-full mb-4"
        />
      

        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="ISBN"
          className="input input-bordered w-full mb-4"
        /> 

        <input 
          type="radio"
          id="owned"
        />
        <label htmlFor="owned">Owned </label>

        <input 
          type="radio"
          id="toBuy"
        />
        <label htmlFor="toBuy">To Buy </label>

        <input
          type="text"
          value={text}
          onChange={handleTextChange}
          placeholder="Notes"
          className="input input-bordered w-full mb-4"
        />
*/}
        <button 
          onClick={handleButtonClick}
          className="btn btn-primary w-full"
          disabled={loading} // Disable button during loading
          >
          {loading? "Uploading..." : "Upload Text"}
        </button>
         
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
