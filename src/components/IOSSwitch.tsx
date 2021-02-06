import {Switch, withStyles} from "@material-ui/core";
import {grey} from "@material-ui/core/colors";

export const IOSSwitch = withStyles({
  switchBase: {
    color: grey[300],
    '&$checked': {
      color: grey[300],
    },
    '&$checked + $track': {
      backgroundColor: "#00FF00"
    },
  },
  checked: {},
  track: {
    backgroundColor: grey[300]
  },
})(Switch);
