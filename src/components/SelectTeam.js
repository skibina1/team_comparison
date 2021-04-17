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
    setTeam(item.team)
    props.setTeam(item.team)
  }

  return (
    <div>
      <Select 
        items={props.teams}
        filterable={false}
        itemRenderer={itemRenderer}
        onItemSelect={handleClick}
      >
        <Button
          text={team == null ? 'Wybierz Zespół' : team}
          rightIcon="caret-down"
        />
      </Select>            
    </div>
  )
}

SelectTeam.propTypes = {
  teams: PropTypes.array,
  setTeam: PropTypes.func
}

export default SelectTeam
