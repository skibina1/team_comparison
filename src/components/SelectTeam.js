import React, { useState } from 'react'
import { Select } from '@blueprintjs/select'
import { Button, MenuItem, Label } from '@blueprintjs/core'
import PropTypes from 'prop-types'
import '../style/SelectTeam.css'

function SelectTeam(props) {
  const [team, setTeam] = useState(null)  

  function itemRenderer(item, { handleClick, modifiers, query }) {
    return (
      <MenuItem
        key={item.HOME_TEAM}
        // label={item.HOME_TEAM}
        text={item.HOME_TEAM}
        onClick={handleClick}
        shouldDismissPopover={true}
      />
    )
  }

  function handleClick(item) {
    setTeam(item.HOME_TEAM)
    props.setTeam(item.HOME_TEAM)
  }

  function filterTeams(query, team) {
    return `${team.HOME_TEAM}`.toLowerCase().indexOf(query.toLowerCase()) >= 0   
  }

  return (
    <div>
      <Select
        items={props.teams}
        filterable={true}
        itemRenderer={itemRenderer}
        onItemSelect={handleClick}
        itemPredicate={filterTeams}
        disabled={props.teams.length === 0 ? true : false}
      >
        <Button
          className="select-button"
          text={team == null ? 'Wybierz Zespół' : team}
          rightIcon="caret-down"
          disabled={props.teams.length === 0 ? true : false}
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
