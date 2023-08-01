import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './SearchBar.module.css';

class SearchBar extends Component {
  state = {
    inputValue: '',
  };

  handleChange = event => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const searchQuery = this.state.inputValue.trim();
    this.props.onSubmit(searchQuery);
    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <header className={css.searchBar}>
        <form className={css.searchForm} onSubmit={this.handleSubmit}>
          <input
            className={css.searchFormInput}
            name="searchName"
            type="text"
            id="search"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Search images..."
          />
          <button type="submit" className={css.searchFormButton}>
            Search
          </button>
        </form>
      </header>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;