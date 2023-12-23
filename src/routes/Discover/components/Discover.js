import React, { Component } from 'react';
import DiscoverBlock from './DiscoverBlock/components/DiscoverBlock';
import '../styles/_discover.scss';
import NewReleasesService from '../../../services/NewReleases.service';
import featuredPlaylistService from '../../../services/featuredPlaylist.service';
import categoriesServices from '../../../services/categories.services';

export default class Discover extends Component {
  constructor() {
    super();

    this.state = {
      newReleases: [],
      playlists: [],
      categories: []
    };
  }

  componentDidMount() {
    this.fetchNewReleases();
    this.fetchFeaturedPlaylists();
    this.fetchCategories();
  }

  fetchNewReleases = async () => {
    try {
      const newReleasesData = await NewReleasesService.getNewReleases();
      this.setState({ newReleases: newReleasesData.albums.items });
    } 
    catch (error) {
      console.error('Error fetchNewReleases:', error);
    }
  };
  fetchFeaturedPlaylists = async () => {
    try {
      const FeaturedPlaylists = await featuredPlaylistService.getFeaturedPlaylist();
      this.setState({ playlists: FeaturedPlaylists.playlists.items });
    } 
    catch (error) {
      console.error('error fetchFeaturedPlaylists:', error);
    }
  };
  fetchCategories = async () => {
    try {
      const newCategories = await categoriesServices.getCategories();
      this.setState({ categories: newCategories.categories.items });
    } 
    catch (error) {
      console.error('error fetchCategories :', error);
    }
  };

  render() {
    const { newReleases, playlists, categories } = this.state;

    return (
      <div className="discover">
        <DiscoverBlock text="RELEASED THIS WEEK" id="released" data={newReleases} />
        <DiscoverBlock text="FEATURED PLAYLISTS" id="featured" data={playlists} />
        <DiscoverBlock text="BROWSE" id="browse" data={categories} imagesKey="icons" />
      </div>
    );
  }
}
