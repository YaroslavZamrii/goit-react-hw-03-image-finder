import { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageCallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';

import { Container } from './App.styled';
import { fetchImg } from 'services/api';

export class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    totalPages: 1,
    isLoading: false,
    error: null,
  };

  searchQuery = query => {
    this.setState({ query, page: 1 });
  };

  clickBtn = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.page !== prevState.page ||
      this.state.query !== prevState.query
    )
      try {
        this.setState({ isLoading: true });
        const searchImgResult = await fetchImg(
          this.state.query,
          this.state.page
        );
        this.setState(prev => ({
          images:
            this.state.page === 1
              ? searchImgResult.hits
              : [...prev.images, ...searchImgResult.hits],
        }));
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ isLoading: false });
      }
  }

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.searchQuery} />
        <Loader isLoading={this.state.isLoading} />
        <ImageCallery images={this.state.images} />
        <Button onClick={this.clickBtn} />
      </Container>
    );
  }
}
