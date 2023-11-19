import React from "react"
import { useRouter } from "next/router"
import { Grid, Loader, Image, Segment, ItemDescription} from "semantic-ui-react"
export default function PokemonName() {
  const [pokemonInfo, setPokemonInfo] = React.useState({ loading: true })
  const router = useRouter()

  React.useEffect(function () {
    if (pokemonInfo.name !== router.query.name && router.query.name) {
      console.log("Load in pokemon info")
      fetch(`https://pokeapi.co/api/v2/pokemon/${router.query.name}`)
        .then((r) => r.json())
        .then(function (r) {
          setPokemonInfo(r);
        })
        .catch((e) =>
          setPokemonInfo({ loading: false, name: router.query.name })
        )
    }
  })

  //console.log(router.query)
  return (
    <>
      <h1>Pokemon Name: {router.query.name}</h1>
      <Loader
        active={pokemonInfo.loading || pokemonInfo.name !== router.query.name}
      />

      {
        //if this statement
        pokemonInfo.id ? (
          //then do this
          <>
          <Grid stackable columns={2}>
            <Grid.Column>
              <Segment>
                <Image centered src={pokemonInfo.sprites.other['official-artwork'].front_default} />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
              <h3>Stats</h3>
                <Grid columns={2}>
                  <Grid.Column width={4}>
                    <Grid.Row><ItemDescription>ID:</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>Species:</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>Height:</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>Weight:</ItemDescription></Grid.Row>
                  </Grid.Column>
                  
                  <Grid.Column width={4}>
                    
                    <Grid.Row><ItemDescription>{pokemonInfo.id}</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>{pokemonInfo.species.name}</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>{pokemonInfo.height/10} m</ItemDescription></Grid.Row>
                    <Grid.Row><ItemDescription>{pokemonInfo.weight/10} kg</ItemDescription></Grid.Row>
                  </Grid.Column>
                  </Grid>
              </Segment>
            </Grid.Column>
          </Grid>
          </>
        ) : (
          //else do this
          <>
            {isNaN(pokemonInfo.id) ? (
              <h2>Pokemon Not Found</h2>
            ) : (
              <h2>Searching for Pokemon</h2>
            )}
          </>
        )
      }
    </>
  )
}
