"use server";
import { db } from "~/server/db";
import { posts } from "~/server/db/schema";

export default async function uploadData(bookTitle: string, author: string, isbn: string, notes: string): Promise<{message: string} | { error: string }> {
  try {
    // Insert the data into the database
    await db.insert(posts).values({ bookTitle, author, isbn, notes });

    // Return a success message or the inserted data
    return { message: "Data uploaded successfully!"};
  } catch (error) {
    console.error("Error uploading data:", error);
    return { error: "Failed to upload data." };
  }
}