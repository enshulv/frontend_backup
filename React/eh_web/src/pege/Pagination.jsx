import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Pagination(props) {
    const { pages, setPages, totalPages, currentPage, setCurrentPage } = props;
    let lastPage = pages[pages.length - 1];

    const goBack = () => {
        if (currentPage !== 1 && currentPage === pages[0]) {
            let updatedPages = [];
            let start, end;
            if (pages[0] < 7) {
                start = 1;
                end = 7;
            } else {
                start = pages[0] - 7;
                end = lastPage - 7;
            }
            for (let i = start; i <= end; i++) {
                updatedPages.push(i);
            }
            setPages(updatedPages);
        }
        setCurrentPage(currentPage - 1);
    }

    const goForward = () => {
        if (currentPage !== totalPages && currentPage === lastPage) {
            let updatedPages = [];
            let start, end;
            if (lastPage + 7 > totalPages) {
                start = totalPages - 7;
                end = totalPages;
            } else {
                start = lastPage + 1;
                end = lastPage + 7;
            }
            for (let i = start; i <= end; i++) {
                updatedPages.push(i);
            }
            setPages(updatedPages);
        }
        setCurrentPage(currentPage + 1);
    }

    const determineSelected = (isActive) => {
        if (isActive) {
            return 'selected';
        }
    }

    const updatePages = (pageNumber, start, end) => {
        return () => {
            setCurrentPage(pageNumber);
            let updatedPages = [];
            if (end < 7) {
                start = 1;
                end = 7;
                setCurrentPage(pages[0] - 1);
            } else if (end > totalPages) {
                start = totalPages - 7;
                end = totalPages;
                setCurrentPage(lastPage + 1);
            }
            for (let i = start; i <= end; i++) {
                updatedPages.push(i);
            }
            setPages(updatedPages);
        }
    }

    return (
        <ul className='pagination-block'>
            <li>{currentPage !== 1 ? <Link onClick={goBack} to={`/page/${currentPage - 1}`}>{'<'}</Link> : <a>{'<'}</a>}</li>
            {pages[0] !== 1 ? <li><Link onClick={updatePages(1, 1, 7)} to="/page/1">1</Link></li> : null}
            {pages[0] !== 1 ? <li><Link onClick={updatePages(lastPage - 7, pages[0] - 7, lastPage - 7)} to={`/page/${pages[0] - 1}`}>...</Link></li> : null}
            {pages.map((pageNumber) => {
                return <li key={pageNumber}><NavLink onClick={() => {setCurrentPage(pageNumber)}} to={`/page/${pageNumber}`} className={determineSelected}>{pageNumber}</NavLink></li>
            })}
            {totalPages > lastPage ? <li><Link onClick={updatePages(pages[0] + 7, pages[0] + 7, lastPage + 7)} to={`/page/${lastPage + 1}`}>...</Link></li> : null}
            {lastPage !== totalPages ? <li><Link onClick={updatePages(totalPages, totalPages - 7, totalPages)} to={`/page/${totalPages}`}>{totalPages}</Link></li> : null}
            <li>{currentPage !== totalPages ? <Link onClick={goForward} to={`/page/${currentPage + 1}`}>{'>'}</Link> : <a>{'>'}</a>}</li>
        </ul>
    );
}
