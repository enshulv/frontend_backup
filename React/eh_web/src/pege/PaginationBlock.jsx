import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import DisplayBlock from '../display/DisplayBlock';
import PaginationBar from './PaginationBar';
import requestData from '../non_component/fetchData';
import './Pagination.css';

export default function PaginationBlock(props) {
    const history = useNavigate();
    const { pages: currentPage } = useParams();

    const { totalPages, firstSevenPages } = props;
    const [pages, setPages] = useState(firstSevenPages);
    const [currentPageNum, setCurrentPageNum] = useState(1);
    const [content, setContent] = useState([]);

    const params = { pages: pages, setPages: setPages, totalPages: totalPages, currentPage: currentPageNum, setCurrentPage: setCurrentPageNum };

    useEffect(() => {
        // if (currentPage !== currentPageNum) {
        //     let updatedPages = [];
        //     let start, end;
        //     if (currentPage > totalPages && totalPages > 7) {
        //         start = totalPages - 7;
        //         end = totalPages;
        //         history(`/page/${totalPages}`);
        //     } else if (currentPage <= 7 && totalPages < 7) {
        //         start = 1;
        //         end = totalPages;
        //         history(`/page/${1}`);
        //     } else {
        //         start = currentPage - 7;
        //         end = Number(currentPage);
        //     }
        //     setCurrentPageNum(end);
        //     for (let i = start; i <= end; i++) {
        //         updatedPages.push(i);
        //     }
        //     setPages(updatedPages);
        // }
        if (content.length === 0) requestData(currentPageNum, setContent);
    });

    return (
        <div>
            <PaginationBar {...params} />
            <ul className='display-list'>
                {content.map((item) => {
                    return <li key={item.gid}><DisplayBlock {...item} /></li>
                })}
            </ul>
            <PaginationBar {...params} />
            <Outlet />
        </div>
    );
}
