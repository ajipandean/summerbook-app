import React, {Fragment} from 'react';
import {Header, Divider} from 'react-native-elements';

import HeaderActions from './detail/HeaderActions';
import NavigationBack from './NavigationBack';

export default function TopHeader({navigation, hasActions, actions}) {
  return (
    <Fragment>
      <Header
        placement="left"
        backgroundColor="#fff"
        rightComponent={hasActions ? () => <HeaderActions actions={actions}/> : false}
        leftComponent={() => <NavigationBack goBack={navigation.goBack}/>}
      />
      <Divider/>
    </Fragment>
  );
}
