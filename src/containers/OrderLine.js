import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as orderActions from '../actions/order';
import OrderLineComponent from '../components/OrderLine'

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce((count, product) => count + (product.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(orderActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderLineComponent);
