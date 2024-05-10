import { React } from 'react';
import { NavLink } from 'react-router-dom';
import './Index.css';

export default function Index(props) {
  const { indexItems, clicked, setClicked } = props;
  const { menu } = JSON.parse(sessionStorage.getItem('language'));

  const highlightClicked = ({ isActive }) => {
    return isActive ? "clicked" : "not-clicked";
  };

  return (
    <div className='index-item'>
      <div className='menu' onClick={() => { setClicked(!clicked) }}>
        <span>{menu}</span>
      </div>
      {indexItems.map((item) => {
        return (
          <div className='jump' key={item[1]}>
            <div>{'>'}</div>
            <div className='jump-item'>
              <NavLink className={highlightClicked} to={item[0]}>
                <span>{item[1]}</span>
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
}
