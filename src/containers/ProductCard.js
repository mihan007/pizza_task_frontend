import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productActions from '../actions/product';
import ProductCard from '../components/ProductCard';

const mapStateToProps = ({ cart }, { id }) => ({
  addedCount: cart.items.reduce((count, product) => count + (product.id === id ? 1 : 0), 0),
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(productActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProductCard);
