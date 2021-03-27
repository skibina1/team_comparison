import React, { useState } from 'react'
import { Select } from '@blueprintjs/select'
import { Button, MenuItem, Label } from '@blueprintjs/core'
import PropTypes from 'prop-types'

function SelectTeam(props) {
  const [team, setTeam] = useState(null)  

  function itemRenderer(item, { handleClick }) {
    return (
      <MenuItem
        key={item.team}
        label={item.team}
        text={item.team}
        onClick={handleClick}
        shouldDismissPopover={true}
      />
    )
  }

  function handleClick(item) {
    console.log(item)
    setTeam(item.team)
    props.setTeamA(item.team)
  }

  return (
    <div>
      {console.log(props)}
      <Select 
        items={props.teams}
        filterable={false}
        itemRenderer={itemRenderer}
        onItemSelect={handleClick}
      >
        <Button
          text={team == null ? props.teams[0].team : team}
          rightIcon="caret-down"
        />
      </Select>            
    </div>
  )
}

SelectTeam.propTypes = {
  teams: PropTypes.array,
  setTeamA: PropTypes.func
}

export default SelectTeam
