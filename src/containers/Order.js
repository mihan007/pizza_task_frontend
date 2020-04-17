import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uniqBy from 'lodash/uniqBy';
import OrderComponent from '../components/Order'

const mapStateToProps = ({ cart }) => ({
  totalEurPrice: cart.items.reduce((total, product) => total + product.price_eur, 0),
  totalUsdPrice: cart.items.reduce((total, product) => total + product.price_usd, 0),
  count: cart.items.length,
  items: uniqBy(cart.items, o => o.id),
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderComponent);
