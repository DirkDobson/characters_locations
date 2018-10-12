import React from 'react'
import axios from 'axios'
import {
  Container,
  Card,
  
} from 'semantic-ui-react'


class Characters extends React.Component {
  state = {
    characters: []
  }

  componentDidMount() {
    axios.get(`https://api.got.show/api/characters/paths`)
    .then( res => { this.setState({ characters: res.data}) })
    .catch( err => { console.log(err)})
  }

  render() {
    const { characters } = this.state
    return(
      <Container>
        <Card.Group itemsPerRow={1}>
          { characters.map( r =>
            <Card key={r.name}>
            <Card.Content>
              <Card.Header>
                {r.name}
              </Card.Header>
              <Card.Description>
                {r.path[0].alive}
              </Card.Description>
            </Card.Content>
            </Card>
            )}
        </Card.Group>
      </Container>
    )
  }
}

export default Characters