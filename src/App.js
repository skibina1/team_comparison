import React, { useEffect, useState } from 'react'
import './App.css'
import { getData } from './util'
import { Select } from '@blueprintjs/select'
import { Button, MenuItem, Label } from '@blueprintjs/core'

const teams = [
  { team: 'Black Widow' },
  { team: 'Young Lions'}
]

function App() {
  const [text, setText] = useState('Test')

  // useEffect( async () => {
  //   let response = await getData('Black Widow', 'Young Lions')
  //   console.log(response)
  //   setText(JSON.stringify(response))
  // }, [])

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
  }

  return (
    <div className="App">
      <div>
        {text}
      </div>
      <div>
        <Select 
          items={teams}
          filterable={false}
          itemRenderer={itemRenderer}
          onItemSelect={handleClick}
        >
          <Button
            text={teams[0].team}
            rightIcon="caret-down"
          />
        </Select>
      </div>
      <div>
        <Label>Label B</Label>
      </div>
    </div>
  )
}

export default App
