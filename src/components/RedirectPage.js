import React from 'react';
import _ from 'lodash';
import { getValueFromQueryParam } from '../utils/utility';
import {setAuthHeader} from '../utils/dataService';

export default class RedirectPage extends React.Component {
  componentDidMount() {
    const { setExpiryTime, history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push('/dashboard');
      }
      const access_token = getValueFromQueryParam('access_token');
      const expiryTime = (parseInt(getValueFromQueryParam('expires_in')) * 1000) + new Date().getTime(); 
      setAuthHeader(access_token);
      setExpiryTime(expiryTime);
      history.push('/dashboard');
    } catch (error) {
      history.push('/');
    }
  }

  render() {
    return null;
  }
}
