import * as React               from 'react';
import addWeeks                 from 'date-fns/addWeeks';
import TextField                from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns }       from '@mui/x-date-pickers-pro/AdapterDateFns';
import { DateRangePicker }      from '@mui/x-date-pickers-pro/DateRangePicker';
import Box                      from '@mui/material/Box';
import { Input } from "@mui/material"

function getWeeksAfter(date, amount) {
  return date ? addWeeks(date, amount) : undefined;
}

export default function DatePicker() {
  const [value, setValue] = React.useState([null, null]);

  return (
    <Box
      sx={ {
        display: 'flex',
        alignItems: 'center',
        '& > :not(style)': { m: 1 },
      } }
    >
      <LocalizationProvider dateAdapter={ AdapterDateFns }>
        <DateRangePicker
          disablePast
          value={ value }
          maxDate={ getWeeksAfter(value[0], 4) }
          onChange={ (newValue) => {
            setValue(newValue);
          } }
          renderInput={ (startProps, endProps) => (
            <React.Fragment>
              <Input placeholder={"Placeholder"} { ...startProps } id="standard-basic" label="Starting Date" variant="standard" size="small" sx={ { width: '40%' } } />
              <Box><div style={{color:"white"}}>to</div></Box>
              <Input placeholder="Placeholder" { ...endProps } id="standard-basic" variant="standard" size="small" sx={ { width: '40%' } } />
            </React.Fragment>
          ) }
        />
      </LocalizationProvider>
    </Box>
  );
}