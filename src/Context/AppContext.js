import { useState } from "react";
import { createContext } from "react";
import { baseUrl } from "../baseUrl";
//step1
export const AppContext = createContext();

//Step-2 Data pass->through provider
export function AppContextProvider({ children }) {
  const [loading, setloading] = useState(false);
  const [posts, setpost] = useState([]);
  const [page, setpage] = useState(1);
  const [totalpages, settotalpages] = useState(null);
  

  //Data Fill

  async function fetchBlogPosts(page = 1) {
    let url = `${baseUrl}?page=${page}`;
    
    console.log("Prinitng The Data")
    console.log(url)
    setloading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setpage(data.page);
      setpost(data.posts);
      settotalpages(data.totalPages);
      console.log(page)
    } catch (error) {
      alert("There iS some network Call error");
      setpage(1);
      setpost([]);
      settotalpages(null);
    }
    setloading(false);
  }

  function handelpagechange(page) {
    setpage(page);
    fetchBlogPosts(page);
  }
  console.log("printing total pages")
  console.log(totalpages)

  const value = {
    loading,
    setloading,
    page,
    setpage,
    posts,
    setpost,
    totalpages,
    settotalpages,
    fetchBlogPosts,
    handelpagechange
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
