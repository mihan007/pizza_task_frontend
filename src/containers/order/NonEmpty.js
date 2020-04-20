import NonEmpty from '../../components/order/NonEmpty'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as orderActions from '../../actions/order'

const mapStateToProps = state => ({
  ...state,
  orderFields: state.form.DeliveryForm ? state.form.DeliveryForm.values : {},
  loading: state.order.loading
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(orderActions, dispatch)
});

export default (connect(
  mapStateToProps,
  mapDispatchToProps
)(NonEmpty))
