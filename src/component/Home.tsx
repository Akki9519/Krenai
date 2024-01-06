import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width / 2 - 36;
const CARD_HEIGHT = 220;
import React, {useEffect, useState} from 'react';

import {SafeAreaView} from 'react-native-safe-area-context';
export default function Home({navigation}: any) {
  const [data, setData] = useState<any[]>([]);

  const api = async () => {
    try {
      const res = await fetch(
        'https://storeapi.wekreta.in/api/v4/product/customer?id=0&secondaryKey=3d70712a-26fb-11ee-b277-029ff3b26cce&productName=&categoryName=serveware,kitchenware&subCategoryName=&subSubCategoryName=&brandName=&isFeatured=0&search=&currentPage=1&itemsPerPage=27&sortBy=createdDate&sortOrder=desc&isFetchListing=0&searchTag=&storeUuid=cb910d4a-bf60-11ed-814d-0252190a7100',
      );
      const result = await res.json();
      console.log(result.object);
      setData(result.object);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    api();
  }, []);
  return (
    <>
      <ScrollView>
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            {data.map((item: any) => {
              return (
                <TouchableOpacity
                 
                  style={styles.cardContainer}
                  key={item.id}>
                  <View style={[styles.card, styles.shadow]}>
                    <View style={styles.imageBox}>
                      <Image
                        style={styles.image}
                        source={{uri: item.mediaUrl}}
                      />
                    </View>
                    <View style={styles.footer}>
                      <View style={styles.titleBox}>
                        <Text style={styles.location}>{item.description}</Text>
                        <View style={styles.a}>
                        <Text style={{color:'black',fontWeight:'700'}}>Price:</Text>
                       <Text style={{color:'black',fontWeight:'700'}}>{item.variants[0].mrp}</Text>
                       </View>

                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </SafeAreaView>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:20
  },
  a:{
flexDirection:'row'
  },
  cardContainer: {
    marginLeft: 24,
    marginBottom: 24,
  },
  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    backgroundColor: 'ffffff',
    borderRadius: 16,
  },
  imageBox: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    overflow: 'hidden',
  },
  image: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT - 60,
    resizeMode: 'cover',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
    marginLeft: 16,
    marginRight: 10,
  },
  titleBox: {
    flex: 1,
  },
  title: {
    marginVertical: 4,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#070f18',
  },
  location: {
    fontSize: 13,
    color: 'black',
    fontFamily:'serif',
    fontWeight:'700',
  },
  shadow: {
    shadowColor: '#000',
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
});
