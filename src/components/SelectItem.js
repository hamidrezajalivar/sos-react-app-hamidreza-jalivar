import { Fragment, useEffect, useState } from "react";

import { Link } from 'react-router-dom';
import ModalBottom from './ModalBottom';
import { NavLink } from 'react-router-dom';

const SelectItem = ({title,setToggleclass,toggleclass}) => {
    const handleModal=()=>{
        setToggleclass(!toggleclass);
    }

    return ( 
        <Fragment>
            <div className="flex justify-between my-10">
                <h1 className="font-bold text-[13px]">{title}</h1>
                <button onClick={handleModal}><img src="assets/img/select.png" className="w-[24px] "/></button>
            </div>
                <div className={`modal-wallet z-[200] fixed left-0 right-0   ${toggleclass ? "bottom-0 " : "bottom-[-500px] "}`}>  <ModalBottom toggleclass={toggleclass} setToggleclass={setToggleclass}/></div>
          
        </Fragment>
    );
}
 
export default SelectItem;