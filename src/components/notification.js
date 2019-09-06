import React, { PureComponent } from 'react';
import * as S from '../components/layout2';

class NotificationsForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      permission: 'default',
    };
  }
  componentDidMount() {
    this.OneSignal = window.OneSignal || [];
    this.setupOneSignal();
  }
  /**
   * Render subscribe button
   * @param {('default'|'denied'|'granted')} permission - permission level
   * @returns {import('react').ReactElement} React Node
   */
  renderBtn = permission => {
    if (permission === 'default') {
      return (
        <S.SubmitBtn as="button" onClick={this.onSubscriptionBtnClick}>
          Subscribe
        </S.SubmitBtn>
      );
    } else if (permission === 'granted') {
      return (
        <h5>
          Already part of Notification Squad{' '}
          <span role="img" aria-label="relieved face">
            🎉
          </span>
        </h5>
      );
    } else if (permission === 'denied') {
      return (
        <h5>
          Thank You for your time.{' '}
          <span role="img" aria-label="relieved face">
            😌
          </span>
        </h5>
      );
    } else {
      console.warn('Unrecognised permission', permission);
    }
  };
  render() {
    const { permission } = this.state;
    return (
      <div>
        <S.SubSection>
          <S.Subtitle>Notifications</S.Subtitle>
          <sub>As it Happens.</sub>
        </S.SubSection>
        {this.renderBtn(permission)}
      </div>
    );
  }
  onSubscriptionBtnClick = event => {
    this.getSubscriptionState().then(state => {
      if (state.isPushEnabled) {
        /* Subscribed, opt them out */
        this.OneSignal.setSubscription(false);
      } else {
        if (state.isOptedOut) {
          /* Opted out, opt them back in */
          this.OneSignal.setSubscription(true);
        } else {
          /* Unsubscribed, subscribe them */
          this.OneSignal.registerForPushNotifications();
        }
      }
    });
    event.preventDefault();
  };
  setupOneSignal = () => {
    this.OneSignal.push(() => {
      if (!this.OneSignal.isPushNotificationsSupported()) {
        return;
      }
      this.OneSignal.init({
        appId: '1a5a3a21-f5d1-4a88-a3ab-f8219fbbacea',
        autoResubscribe: true,
        notifyButton: {
          enable: false,
        },
      });
      this.updateManageWebPushSubscriptionButton();
      this.OneSignal.on('subscriptionChange', function() {
        this.updateMangeWebPushSubscriptionButton();
      });
    });
  };
  updateManageWebPushSubscriptionButton = async () => {
    try {
      const state = await this.OneSignal.getNotificationPermission();
      this.setState({
        permission: state,
      });
    } catch (error) {
      console.error('Error getting notification status', error);
    }
  };
  async getSubscriptionState() {
    const result = await Promise.all([
      this.OneSignal.isPushNotificationsEnabled(),
      this.OneSignal.isOptedOut(),
    ]);
    const [isPushEnabled, isOptedOut] = result;
    return {
      isPushEnabled: isPushEnabled,
      isOptedOut: isOptedOut,
    };
  }
}

export default NotificationsForm;