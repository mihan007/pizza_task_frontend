import { connect } from 'react-redux';
import LinesAndTotal from '../../components/order/LinesAndTotal'
import { uniqBy } from 'lodash'

const mapStateToProps = ({ cart }) => ({
  totalEurPrice: cart.items.reduce((total, product) => total + product.price_eur, 0),
  totalUsdPrice: cart.items.reduce((total, product) => total + product.price_usd, 0),
  deliveryEurPrice: 200,
  deliveryUsdPrice: 250,
  items: uniqBy(cart.items, o => o.id),
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LinesAndTotal);
