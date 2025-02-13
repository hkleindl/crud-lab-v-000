import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant}/>
        <Restaurants delete={this.props.delete} restaurants={this.props.restaurants}/>
      </div>
    )
  }
}

const mapStateToProps = ({restaurants}) => ({restaurants})

const mapDispatchToProps = dispatch => {
  return {
    addRestaurant: text => dispatch({type: 'ADD_RESTAURANT', text}),
    delete: id => dispatch({type: 'DELETE_RESTAURANT', id
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer)
