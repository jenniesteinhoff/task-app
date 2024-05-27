import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Checkbox = ({label, icon, value, onChange}) => {
    return (
      <label className="checkbox-label">
         <input type="checkbox" checked={value} onChange={onChange}></input>
         <FontAwesomeIcon className={label} icon={icon} size="lg" checked={value} onChange={onChange} />
      </label>
   )
};