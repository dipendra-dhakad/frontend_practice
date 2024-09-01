import { createContext, useState } from "react";
import { baseUrl } from "../baseUrl";

 //step 1
export const AppContext = createContext();

export default function AppContextProvider({Children}){
     const [loading , setLoading] = useState(false);
     const [posts , setPosts] = useState([]);
     const [page , setPage] = useState(1);
     const [totalPages, setTotalPages] = useState(null);


    //data filing pending

    async function fetchBlogPosts(page=1) {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`; 

        try {
            const result = await fetch(url);
            const data = await result.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.log("Error in fetching data");
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
         setLoading(false);
    }

    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);

    }

   const value = {
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages


   }


   return <AppContextProvider value={value}>

              {Children} 

          </AppContextProvider>
   

}


