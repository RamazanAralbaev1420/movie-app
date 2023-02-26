
import { Pagination } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

function  CustomPagination({ count, setCurrentPage, currentPage, baseURL }) {
    const navigate = useNavigate()


    function changeCurrentPage(e) {
        if(window.scrollY > 0) {
            window.scroll(0, 0)
        }
        setCurrentPage(e.target.textContent);
        navigate(`/${baseURL}/pages/${e.target.textContent}`)
    }

    return (
        <div className="w-100 d-flex justify-content-center">
            <Pagination
                count={count}
                defaultPage={currentPage}
                color="primary" 
                onChange={(e) => {
                    changeCurrentPage(e);
                    
                }}
                />
        </div>
    )
}

export default CustomPagination;