import { EmailContextProviderFunction } from "../contexts/EmailContext"

const Filters = () => {
    const {dispatch} = EmailContextProviderFunction()

  return (
    <div className="email__filters">
        <fieldset>
        <legend>filter</legend>
        <label htmlFor="">
            show unread mails
            <input type="checkbox" onChange={(e) => dispatch({type : 'FILTER_UNREAD', unread : e.target.checked})}/>
        </label>
        <label htmlFor="">
            show starred mails
            <input type="checkbox" onChange={(e) => dispatch({type : 'FILTER_STARRED', starred : e.target.checked})}/>
        </label>

        </fieldset>
    </div>
  )
}

export default Filters