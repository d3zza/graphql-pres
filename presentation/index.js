// Import React
import React from 'react';
// Import Spectacle Core tags
import { Appear, CodePane, Deck, Heading, Image, List, ListItem, Slide, Text } from 'spectacle';
// Import theme
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';

require('prismjs/components/prism-graphql');

const images = {
  bg: require('../assets/bg.jpg'),
  dreambuilder: require('../assets/Dream-Builder-Home-Page-Banner.jpg'),
  graphql: require('../assets/GraphQL_Logo.png'),
  apollo: require('../assets/apollo-logo.png')
};

// Require CSS
require('normalize.css');

require('./yorkshire.css');

require('./style-overrides.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#03A9FC',
    quaternary: '#CECECE',
    quinary: '#777',
    black: '#000',
    white: '#fff',
    orange: '#e4541b',
    charcoalGrey: '#333333',
    greyishBrown: '#3d3936'
  },
  {
    primary: {
      name: 'Nunito Sans',
      googleFont: true,
      styles: ['400', '700']
    },
    secondary: 'Helvetica',
    script: 'yorkshireregular'
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide bgColor="secondary">
          <Text textColor="quaternary" margin="20px" textSize="48px" italic>
            I'll tell you a REST joke but you have to request the joke and the punchline separately
          </Text>
        </Slide>
        <Slide bgColor="secondary" bgImage={images.bg}>
          <Image margin="0 auto 30px" src={images.dreambuilder} height={425} />
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            Building your dreams
          </Heading>
          <Text size={6} margin="40px auto 0" textColor="quaternary">
            (with GraphQL)
          </Text>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.graphql} margin="40px auto" height="120px" />
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            GraphQL
          </Heading>
          <List textColor="quaternary" line padding="0 150px" size={6}>
            <Appear>
              <ListItem margin="0 0 20px">Query language for APIs</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 0 20px">Created by Facebook (2012)</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 0 20px">Open sourced in 2015</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 0 20px">Shopify, Twitter, GitHub, Yelp</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            Strongly Typed
          </Heading>
        </Slide>

        <CodeSlide
          lang="graphql"
          code={require('raw-loader!../assets/schema-types-01.example')}
          ranges={[
            { loc: [0, 12], note: 'Project Type from DreamBuilder', title: 'Schema' },
            { loc: [2, 7], note: 'Supports primitives (scalars) Boolean, String, Float, Int' },
            { loc: [1, 2], note: 'ID is a special (unique) type ! indicates required' },
            { loc: [9, 10], note: 'Custom type' },
            { loc: [13, 23] },
            { loc: [7, 8], note: 'List [] of Steps' },
            { loc: [20, 21], note: 'Nesting of custom types' },
            { loc: [24, 31] },
            { loc: [29, 30] },
            { loc: [32, 39], note: 'Supports Interfaces' },
            { loc: [40, 41], note: 'types can implement Interfaces' },
            { loc: [41, 46], note: 'Implementation' },
            { loc: [46, 49] },
            { loc: [52, 57] },
            { loc: [71, 72], note: 'Unions' },
            { loc: [73, 75], note: 'Query' },
            { loc: [81, 83], note: 'Mutation' }
            // ...
          ]}
        />

        <Slide bgColor="secondary">
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            Overfetching
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane
            source={require('raw-loader!../assets/query-user.example')}
            lang="graphql"
            theme="external"
            padding="0 150px"
          />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0" padding="0 150px">
            We don't have to get entire ‘User’ if we only want the name
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane
            source={require('raw-loader!../assets/query-user-min.example')}
            lang="graphql"
            theme="external"
            padding="0 150px"
          />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0">
            With GraphQL we can request just the fields we want
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            Hierarchical
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane
            source={require('raw-loader!../assets/query-user-friends.example')}
            lang="graphql"
            theme="external"
            padding="0 150px"
          />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0" padding="0 150px">
            We can express relationships in schema and retrieve them in a single query
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane
            source={require('raw-loader!../assets/response-user-friends.example')}
            lang="graphql"
            theme="external"
            padding="0 150px"
          />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0" padding="0 150px" />
        </Slide>

        <Slide bgColor="secondary">
          <Image src={images.apollo} margin="40px auto" height="120px" />
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            Apollo (Client)
          </Heading>
          <List textColor="quaternary" line padding="0 150px" size={6}>
            <ListItem>React</ListItem>
            <ListItem textColor="quinary">Vue</ListItem>
            <ListItem textColor="quinary">Meteor</ListItem>
            <ListItem textColor="quinary">Ember</ListItem>
            <ListItem textColor="quinary">Web Components</ListItem>
            <ListItem textColor="quinary">Native iOS / Android</ListItem>
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            Server
          </Heading>
          <List textColor="quaternary" line padding="0 150px" size={6}>
            <ListItem>Node Express / Express-Graphql</ListItem>
            <ListItem margin="0 0 20px">GraphQL for .NET</ListItem>
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            React/Apollo Example
          </Heading>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane
            source={require('raw-loader!../assets/App.Project.Query1.example')}
            lang="js"
            theme="external"
          />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0" padding="0 150px">
            Create Apollo Client
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane
            source={require('raw-loader!../assets/App.Project.Query2.example')}
            lang="js"
            theme="external"
            padding="0"
          />
          <div />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0" padding="0 150px">
            ‘gql’ parses GraphQL AST from template literal
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane
            source={require('raw-loader!../assets/App.Project.Query3.example')}
            lang="jsx"
            theme="external"
            padding="0"
          />
          <div />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0" padding="0">
            Consume and render React
          </Text>
        </Slide>

        <Slide bgColor="secondary" transition={['zoom']}>
          <CodePane
            source={require('raw-loader!../assets/App.Project.Query4.example')}
            lang="jsx"
            theme="external"
            padding="0"
          />
          <div />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0" padding="0">
            Query handler (function as child)
          </Text>
        </Slide>

        <Slide bgColor="secondary" transition={['zoom']}>
          <CodePane
            source={require('raw-loader!../assets/App.Project.Query5.example')}
            lang="jsx"
            theme="external"
            padding="0"
          />
          <div />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0" padding="0">
            Query handler implementation
          </Text>
        </Slide>

        <Slide bgColor="secondary" transition={['zoom']}>
          <CodePane
            source={require('raw-loader!../assets/App.Project.Query6.example')}
            lang="jsx"
            theme="external"
            padding="0"
          />
          <div />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0" padding="0">
            Query handler (ES6)
          </Text>
        </Slide>

        {/* <CodePane
          source={require('raw-loader!../assets/App.Project.Query.example')}
          lang="jsx"
          theme="external"
          padding="0"
        /> */}
        <CodeSlide
          textSize="18px"
          lang="jsx"
          code={require('raw-loader!../assets/App.Project.Query.example')}
          ranges={[{ loc: [0, 7] }, { loc: [8, 13] }, { loc: [14, 27] }, { loc: [28, 47] }]}
        />

        <Slide bgColor="secondary" transition={['fade']}>
          <CodePane
            source={require('raw-loader!../assets/App.Project.Query7.example')}
            lang="jsx"
            theme="external"
            padding="0"
          />
          <div />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0" padding="0">
            Hooks version
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            GrahpiQL
          </Heading>
          <List textColor="quaternary" line padding="0 150px" size={6}>
            <ListItem margin="0 0 20px">Write and debug queries</ListItem>
            <ListItem margin="0 0 20px">Introspection</ListItem>
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            Some Benefits to Rawsons
          </Heading>
          <List>
            <ListItem>Decoupling of clients and apis</ListItem>
            <ListItem>Schema evolution without versioning</ListItem>
            <ListItem>Gives flexibility to clients</ListItem>
            <ListItem>Optimistic Responses</ListItem>
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            Thanks!
          </Heading>
          <List>
            <ListItem>Decoupling of clients and apis</ListItem>
            <ListItem>Schema evolution without versioning</ListItem>
            <ListItem>Gives flexibility to clients</ListItem>
            <ListItem>Optimistic Responses</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
