import {Button, TextField} from "@material-ui/core";
import {Add, Remove} from "@material-ui/icons";
import React from "react";
import "./ValuePlusMinus.css";
import {IOSSwitch} from "./components/IOSSwitch";

type ValuePlusMinusProps = {
  value: number;
  label: string;
  checked: boolean;
  increment: () => void;
  decrement: () => void;
}
export const ValuePlusMinus: React.FC<ValuePlusMinusProps> = ({value, label, checked, increment, decrement}) => {
  const [state, setState] = React.useState({
    checked,
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({...state, [event.target.name]: event.target.checked});
  };

  return <div className="main">
    <div className="switchContainer">
      <span>{label}</span>
      <IOSSwitch
        checked={state.checked}
        onChange={handleChange}
        name="checked"
        aria-label={label}
        inputProps={{'aria-label': 'secondary checkbox'}}
      />
    </div>
    <div className="inputContainer">
      <Button variant="contained" onClick={increment}><Add/></Button>
      <TextField
        id="standard-number"
        type="number"
        inputProps={{min: 0, style: {textAlign: 'center', color: "white"}}}
        value={value}
      />
      <Button variant="contained" onClick={decrement}><Remove/></Button>
    </div>
  </div>
}
