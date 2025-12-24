import { Outlet } from "react-router-dom";

function BlogsLayout(){
    return(
        <>
        <h2>Latest Blogs</h2>
        <button>React</button>
        <button>Node</button>
        <Outlet />
        </>
    )
}
export default BlogsLayout