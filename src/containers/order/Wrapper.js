import { connect } from 'react-redux';
import Wrapper from '../../components/order/Wrapper'

const mapStateToProps = ({ cart }) => ({
  count: cart.items.length
});

const mapDispatchToProps = dispatch => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Wrapper);
