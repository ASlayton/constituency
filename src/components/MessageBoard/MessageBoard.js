import React from 'react';
import './MessageBoard.css';
import CommentInput from '../CommentInput/CommentInput';

import userReqs from '../../firebase/users';
import authReqs from '../../firebase/auth';
import msgReqs from '../../firebase/messages';

class MessageBoard extends React.Component {
  state = {
    user: {},
    messages: [],
  }
  componentDidUpdate (props) {
    if (this.props.bill.bill_slug !== props.bill.bill_slug) {
      this.getAllMessages();
    }
  }
  getAllMessages = () => {
    const {bill} = this.props;
    msgReqs
      .getMessages(bill.bill_slug)
      .then(messages => {
        this.setState({messages});
      })
      .catch(err => {
        console.error('Error getting user info', err);
      });
  }
  getUserInfo = () => {
    userReqs
      .getUserInfo(authReqs.getUid())
      .then(user => {
        this.setState({user});
      })
      .catch(err => {
        console.error('Error getting messages', err);
      });
  }
  componentDidMount () {

    this.getAllMessages();
    this.getUserInfo();

  }
  render () {
    return (
      <div className="MessageBoard">
        <CommentInput user={this.state.user} bill={this.props.bill} votes={this.props.votes} />
        {/* messages here */}
      </div>
    );
  }
};

export default MessageBoard;
