import React from 'react'
import axios from 'axios'
import {
  Container,
  Card,
} from 'semantic-ui-react'


class Locations extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    axios.get(`https://api.got.show/api/characters/locations`)
    .then( res => { this.setState({ characters: res.data}) })
    .catch( err => { console.log(err)})
  }

  // locations = () => {
  //   const { characters: [] } = this.state  
  //   for ( let i = 0; i < characters.locations.length; i++) {
  //     <ul>
  //        <li>characters.locations[i]</li>
  //      </ul>
  //       return(
  //         <ul>
  //           <li>characters.locations</li>
  //         </ul>
  //     )
  //   }
  // }

  render(){
    const { characters } = this.state
  return(
    <Container>
    <Card.Group itemsPerRow={1}>
      { characters.map( r =>
        <Card key={r.id}>
        <Card.Content>
          <Card.Header>
            {r.name}
          </Card.Header>
          <Card.Description>
            {r.locations[0]},
            {r.locations[1]},
            {r.locations[2]},
            {r.locations[3]},
          </Card.Description>
        </Card.Content>
        </Card>
        )}
    </Card.Group>
  </Container>
    )
  }
}

export default Locations