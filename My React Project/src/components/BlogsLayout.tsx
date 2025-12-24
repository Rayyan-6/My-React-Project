import { Outlet } from "react-router-dom";


function BlogsLayout(){
    return(
        <>
        <h2>Latest Blogs</h2>
        <button className="text-3xl">React</button>
        <button>Node</button>
        <Outlet />
        </>
    )
}
export default BlogsLayout