import {ADD_REMINDER} from '../constants.js'

export const addReminder = (text) => {
  const action = {
    type: ADD_REMINDER,
    text
  }
  return action;
}