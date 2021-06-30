/*
 Copyright (C) 2021 Shruti Agarwal (mail2shruti.ag@gmail.com), Aman Dwivedi (aman.dwivedi5@gmail.com)

 SPDX-License-Identifier: GPL-2.0

 This program is free software; you can redistribute it and/or
 modify it under the terms of the GNU General Public License
 version 2 as published by the Free Software Foundation.
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 You should have received a copy of the GNU General Public License along
 with this program; if not, write to the Free Software Foundation, Inc.,
 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
*/

import React from "react";
import PropTypes from "prop-types";

const InputContainer = ({
  type,
  name,
  value,
  id,
  className,
  onChange,
  children,
  checked = false,
  placeholder = null,
  disabled = null,
  options = null,
}) => {
  if (type === "radio" || type === "checkbox") {
    return (
      <div className="my-0">
        <input
          type={type}
          name={name}
          value={value}
          className={className && `mr-2 ${className}`}
          onChange={onChange}
          checked={checked}
          disabled={disabled}
        />
        <label htmlFor={id} className="font-medium ml-2">
          {children}
        </label>
      </div>
    );
  } else if (type === "select") {
    return (
      <div className="my-0">
        <label htmlFor={id} className="font-demi">
          {children}
        </label>
        &emsp;
        <select
          name={name}
          className={className && `mr-2 ${className}`}
          value={value}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={option.id || index} value={option.id}>
              {" "}
              {option.name}{" "}
            </option>
          ))}
        </select>
      </div>
    );
  }
  return (
    <div className="my-2">
      <label htmlFor={id} className="font-demi">
        {children}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        className={
          type === "file" ? `ml-3 ${className}` : `form-control ${className}`
        }
        onChange={onChange}
        checked={checked}
        placeholder={placeholder}
      />
    </div>
  );
};

InputContainer.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.node,
  options: PropTypes.array,
};

export default InputContainer;
