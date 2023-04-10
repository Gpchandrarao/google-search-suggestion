// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onInputFind = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  updateInput = props => {
    this.setState({
      searchInput: props,
    })
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const findValue = suggestionsList.filter(eachItem =>
      eachItem.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
            className="google-img"
          />
          <div className="search-card-container">
            <div className="search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                alt="search icon"
                className="icon-img"
              />
              <input
                type="search"
                placeholder="Search Google"
                value={searchInput}
                onChange={this.onInputFind}
                className="search-input"
              />
            </div>
            <ul className="suggestion-card">
              {findValue.map(eachItem => (
                <SuggestionItem
                  searchResult={eachItem}
                  key={eachItem.id}
                  updateInput={this.updateInput}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
