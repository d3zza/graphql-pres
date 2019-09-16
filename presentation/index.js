// Import React
import React from 'react';
// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text
} from 'spectacle';
// Import theme
import createTheme from 'spectacle/lib/themes/default';
import CodeSlide from 'spectacle-code-slide';

require('prismjs/components/prism-graphql');

const images = {
  dreambuilder: require('../assets/Dream-Builder-Home-Page-Banner.jpg'),
  graphql: require('../assets/GraphQL_Logo.png'),
  apollo: require('../assets/ApolloLogo.jpg')
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
        <Slide bgColor="secondary">
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
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            Benefits
          </Heading>
          <List textColor="quaternary" line padding="0 50px" size={6}>
            <Appear>
              <ListItem margin="0 0 20px">Reduces ‘overfetching’</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 0 20px">Can get related data in same request</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 0 20px">Hierarchical</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 0 20px">Strongly typed</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 0 20px">Introspective</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="secondary">
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            Strongly Typed
          </Heading>
        </Slide>

        <CodeSlide
          transition={['slide']}
          lang="graphql"
          code={require('raw-loader!../assets/schema-types-01.example')}
          ranges={[
            { loc: [0, 12], note: 'Project Type from DreamBuilder' },
            { loc: [2, 7], note: 'Supports primitives (scalars) Boolean, String, Float, Int' },
            { loc: [1, 2], note: 'ID is a special type' },
            { loc: [9, 10], note: 'Custom type' },
            { loc: [7, 8], note: 'List of Steps' },
            { loc: [13, 23] },
            { loc: [20, 21] },
            { loc: [24, 31] },
            { loc: [29, 30] },
            { loc: [32, 39], note: 'Supports Interface' },
            { loc: [40, 41], note: 'Interfaces can be implemented by other types' },
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
            transition={[]}
            // textSize="18px"
            source={require('raw-loader!../assets/query-user.example')}
            lang="graphql"
            theme="external"
            padding="0 150px"
          />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0" padding="0 150px">
            We don't have to get the entire ‘User’ object if we only want say, the name
          </Text>
        </Slide>

        <Slide bgColor="secondary">
          <CodePane
            transition={[]}
            // textSize="18px"
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
            transition={[]}
            // textSize="18px"
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
            transition={[]}
            // textSize="18px"
            source={require('raw-loader!../assets/response-user-friends.example')}
            lang="graphql"
            theme="external"
            padding="0 150px"
          />
        </Slide>

        <Slide bgColor="secondary">
          <CodePane
            transition={[]}
            // textSize="18px"
            source={require('raw-loader!../assets/query-user-min.example')}
            lang="graphql"
            theme="external"
            padding="0 150px"
          />
          <Text textColor="quaternary" textSize="32px" margin="40px auto 0">
            With GraphQL we can request just the fields we want
          </Text>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="graphql"
          code={require('raw-loader!../assets/user.example')}
          ranges={[
            { loc: [4, 11], note: 'In REST, we get all the fields...' },
            { loc: [2, 3] },
            { loc: [4, 7] },
            { loc: [8, 10] }
            // ...
          ]}
        />

        <Slide bgColor="secondary">
          <Heading textFont="script" size={1} bold={false} textColor="orange">
            Benefits
          </Heading>
          <List textColor="quaternary" line padding="0 50px" size={6}>
            <Appear>
              <ListItem margin="0 0 20px">Eliminates ‘overfetching’</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 0 20px">Can get related data in same request</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 0 20px">Hierarchical</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 0 20px">Strongly typed</ListItem>
            </Appear>
            <Appear>
              <ListItem margin="0 0 20px">Introspective</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem bulletStyle="star">Item 1</ListItem>
            <ListItem bulletStyle="cross">Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
      </Deck>
    );
  }
}
