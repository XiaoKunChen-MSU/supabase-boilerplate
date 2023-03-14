import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://gdbxobfaqddydrkmsxkv.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkYnhvYmZhcWRkeWRya21zeGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcwMDA4MTIsImV4cCI6MTk5MjU3NjgxMn0.Sk47vbWhuyToT2Bu9rUHM9GDm73scpZ9rAD9LxULaso'
const supabase = createClient(supabaseUrl, supabaseKey)



async function getBooks(){
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `<li>${book.title} - ${book.author} - (${book.isbn}) - (${book.published_year})</li>` ;
  }
}

getBooks();