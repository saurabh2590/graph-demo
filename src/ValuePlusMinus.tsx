import {Button, Switch} from "@material-ui/core";
import {Add, Remove} from "@material-ui/icons";
import React from "react";

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
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return <div>
    <Switch
      checked={state.checked}
      onChange={handleChange}
      name="checked"
      aria-label={label}
      inputProps={{ 'aria-label': 'secondary checkbox' }}
    />
    <Button variant="contained" onClick={increment}><Add/></Button>
    <Button variant="contained" onClick={decrement}><Remove/></Button>
  </div>
}
