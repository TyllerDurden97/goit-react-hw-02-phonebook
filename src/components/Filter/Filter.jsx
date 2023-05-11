import React from "react";
import css from 'components/Filter/Filter.module.css';


export const Filter = ({ value, onChange }) => (
   <label className={css.filterLabel}>Find contacts by name:
         <input
            type="text"
            value={value}
            onChange={onChange}
            className={css.filterInpt}
         />
   </label>
)

