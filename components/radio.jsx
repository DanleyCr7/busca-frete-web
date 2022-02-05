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
                <FormControlLabel className="text-gray-500" value="sim" control={<Radio size="small" />} label="Sim" />
                <FormControlLabel className="text-gray-500" value="não" control={<Radio size="small" />} label="Não" />
            </RadioGroup>
        </FormControl>
    )
}