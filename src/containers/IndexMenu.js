import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../actions/product';
import uniqBy from 'lodash/uniqBy';
import IndexMenu from '../components/IndexMenu'

const mapStateToProps = ({ cart }) => ({
  totalEurPrice: cart.items.reduce((total, product) => total + product.price_eur, 0),
  totalUsdPrice: cart.items.reduce((total, product) => total + product.price_usd, 0),
  count: cart.items.length,
  items: uniqBy(cart.items, o => o.id),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(IndexMenu);
