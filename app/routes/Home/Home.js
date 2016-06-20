import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../styles';
import Button from '../../components/Button';
import { connect } from 'react-apollo';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.background,
  },
  main: {
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.headerText,
    fontWeight: '400',
    fontStyle: 'italic',
  },
});

const Home = (props) => {
  const { data, onDetailsPress } = props;
  return (
    <View style={styles.container}>
      {data && data.books && data.books.length > 0
        ?
        data.books.map((doc) => (<Text key={doc._id} style={styles.main}>
          Book title: {doc.title}
        </Text>))
        :
        <Text style={styles.main}>
          Home
        </Text>
      }
      <Button
        text="Detailss"
        onPress={onDetailsPress}
      />
    </View>
  );
};

Home.propTypes = {
  onDetailsPress: React.PropTypes.func,
  data: React.PropTypes.object,
};

function mapQueriesToProps({ ownProps, state }) {
  return {
    data: {
      query: gql`
        query getBooks($limit: Int!) {
          books(limit: $limit) {
            _id
            title
          }
        }
      `,
      variables: {
        limit: 0,
      },
    },
  };
}

export default connect({
  mapQueriesToProps,
})(Home);
