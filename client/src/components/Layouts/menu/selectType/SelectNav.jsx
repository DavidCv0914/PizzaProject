import React from 'react'
import { SelectSoda } from './SelectSoda'
import { SelectType } from './SelectType'

export const SelectNav = () => {
  return (
    <div className="select-nav">
        <SelectType/>
        <SelectSoda/>
    </div>
  )
}
