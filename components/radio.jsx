import { FormControl, FormControlLabel, Radio, RadioGroup } from "@mui/material";

export function RadioPerson() {
    return (
        <FormControl>
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                defaultValue="não"
                name="row-radio-buttons-group"
            >
                <FormControlLabel value="sim" control={<Radio />} label="Sim" />
                <FormControlLabel value="não" control={<Radio />} label="Não" />
            </RadioGroup>
        </FormControl>
    )
}