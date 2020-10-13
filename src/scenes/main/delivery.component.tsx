import React from 'react';
import { ListRenderItemInfo, View } from 'react-native';
import {
  Divider,
  Input,
  Layout,
  List,
  ListElement,
  ListItem,
  ListItemElement,
  StyleService,
  Text,
  useStyleSheet,
  Card,
} from '@ui-kitten/components';
import { OrderScreenProps } from '../../navigation/order.navigator';
import { AppRoute } from '../../navigation/app-routes';
import { ProgressBar } from '../../components/progress-bar.component';
import { SearchIcon } from '../../assets/icons';
import { Todo } from '../../data/todo.model';
import { Toolbar } from '../../components/toolbar.component';
import { MenuIcon, CreditCardIcon } from '../../assets/icons';

import axios from 'axios';

import { Order } from '../../data/order.model';

const getOrderList = ( setOrders ) :Order=> {
  // function getOrderList() {
    const tmpList: Order[] = [];
    axios
        // .get('http://192.168.0.41:8080/api/delivery/delivery'
        .get('http://deliverylabapi.gabia.io/api/delivery/delivery'
        ,{
          params:{
            // stoBrcofcId     : 'B0001',
            // riderId         :
            // dlvryRecvDtStd  : '20200714130000',
            // dlvryRecvDtEnd  : '20200714163000',
            dlvryStateCd    : '04'
            }
          }
        )
        .then(function(response) {
          // handle success
          for( const order of response.data.data )
          {
            tmpList.push( new Order( order ) );
          }
          if( null != setOrders )
            setOrders( tmpList );
        })
        .catch(function(error) {
          // handle error
          alert(error.message);
        })
        .finally(function(response) {
          // always executed
          // alert('Finally called');
        });

        return tmpList
    };

let ordersList: Order[] = getOrderList();

export const DeliveryScreen = (props: DeliveryScreenProps): ListElement => {

  const [orders, setOrders] = React.useState<Order[]>( ordersList );
  const styles = useStyleSheet(themedStyles);

  const navigateOrderDetails = ( orderIndex: number ): void => {
    const { [orderIndex]: order } = ordersList;
    props.navigation.navigate(AppRoute.ORDER_DETAILS, { order });
  };

  React.useEffect(
    () => props.navigation.addListener('focus', () => getOrderList( setOrders ) ),
    []
  );

  const renderOrder = ({ item, index }: ListRenderItemInfo<Order>): ListItemElement => (
    <Card style={styles.card} status='warning' onPress={() => navigateOrderDetails(index)}>
      <View style={styles.cardBody}>
        <View>
          <Text category='s1'>
          { item.stoMtlty }
          </Text>

          <Text category='s1'>
          { item.dlvryCusAdres }
          </Text>

          <View style={ styles.test }>
            <View style={styles.controlContainer}>
              <Text status='control'>
                { item.dlvryPaySeCd }
              </Text>
            </View>
            <Text category='s1' style={{ marginTop:4}}>
            { item.dlvryFoodAmnt } | { item.dlvryAmnt } | { item.dlvryDstnc } Km
            </Text>
          </View>
        </View>

        <View style={styles.tmpTime}>
          <Text status='control'>
            { item.dlvryPickReqTm }분
          </Text>
        </View>
      </View>
    </Card>
  );

  return (
    <Layout style={styles.container}>
      <Toolbar
        title='14,000'
        backIcon={MenuIcon}
        onBackPress={props.navigation.toggleDrawer}
      />
      <Divider/>
      <List
        style={styles.list}
        data={orders}
        renderItem={renderOrder}
      />
    </Layout>
  );
};
const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  filterInput: {
    marginTop: 16,
    marginHorizontal: 8,
  },
  list: {
    flex: 1,
    backgroundColor: 'background-basic-color-1',
  },
  test:{
    flexDirection: 'row',
  },
  card: {
    margin: 2,
    height: 100,
  },
  controlContainer: {
    borderRadius: 6,
    margin: 4,
    paddingHorizontal: 4,
    backgroundColor: '#3366FF',
    height:20,
  },
  tmpTime: {
    margin: 4,
    paddingHorizontal: 20,
    padding: 35,
    // backgroundColor: '#FF3D71',
    // backgroundColor: '#00E096',
    backgroundColor: '#FFAA00',
    height:95,
    marginTop:-17,
    marginRight:-25,
  },
  cardBody:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
