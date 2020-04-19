import { connect } from 'react-redux';
import Line from '../../components/order/Line'
import * as productActions from '../../actions/product'
import { bindActionCreators } from 'redux'

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce((count, product) => count + (product.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Line);
